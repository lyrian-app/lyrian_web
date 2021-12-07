use actix_files::NamedFile;
use actix_web::{get, middleware, web, App, HttpServer, Result};
use std::env;

pub mod api;
pub mod errors;
pub mod routes;

use routes::routes;

#[get("/favicon")]
async fn favicon() -> Result<NamedFile> {
    Ok(NamedFile::open("/frontend/build/favicon.ico")?)
}

async fn index() -> Result<NamedFile> {
    Ok(NamedFile::open("/frontend/build/index.html")?)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let port: u16 = env::var("PORT")
        .unwrap_or_else(|_| "8088".to_string())
        .parse()
        .expect("PORT must be a number");

    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Logger::default())
            .configure(routes)
            .default_service(web::route().to(index))
    })
    .bind(("0.0.0.0", port))?
    .run()
    .await
}

#[cfg(test)]
mod test {
    use super::*;

    use api::LearningData;
    use routes::routes;

    use actix_web::body::{Body, ResponseBody};
    use actix_web::dev::{Service, ServiceResponse};
    use actix_web::http::{header::CONTENT_TYPE, HeaderValue, StatusCode};
    use actix_web::test;

    trait BodyTest {
        fn as_str(&self) -> &str;
    }

    impl BodyTest for ResponseBody<Body> {
        fn as_str(&self) -> &str {
            match self {
                ResponseBody::Body(ref b) => match b {
                    Body::Bytes(ref by) => std::str::from_utf8(by).unwrap(),
                    _ => panic!(),
                },
                ResponseBody::Other(ref b) => match b {
                    Body::Bytes(ref by) => std::str::from_utf8(by).unwrap(),
                    _ => panic!(),
                },
            }
        }
    }

    const RESP_TEXT: &str = "{\"state_space\":[{\"word\":\"テスト\",\"mora\":\"テスト\",\"syllable\":\"テスト\",\"part_of_speech\":\"名詞\"}],\"wa_table\":[{\"aliases\":[0],\"probs\":[0.0]}],\"prev_index\":1}";

    #[actix_rt::test]
    async fn create_model_integration_test() {
        let mut app = test::init_service(App::new().configure(routes)).await;
        let xhr = test::TestRequest::post()
            .uri("/api/create_model")
            .set_json(&LearningData {
                contents: String::from("テスト"),
            })
            .to_request();
        let resp: ServiceResponse = app.call(xhr).await.unwrap();

        assert_eq!(resp.status(), StatusCode::OK);
        assert_eq!(
            resp.headers().get(CONTENT_TYPE).unwrap(),
            HeaderValue::from_static("text/plain; charset=utf-8")
        );
        assert_eq!(resp.response().body().as_str(), RESP_TEXT);
    }
}
