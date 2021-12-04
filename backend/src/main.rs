use actix_files::Files;
use actix_web::{middleware, web, App, HttpResponse, HttpServer, Result};
use lyrian::model::LyrianModel;
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize)]
struct LearningData {
    contents: String,
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(middleware::Logger::default())
            .configure(app_config)
    })
    .bind(("0.0.0.0", 8088))?
    .run()
    .await
}

fn app_config(config: &mut web::ServiceConfig) {
    config.service(
        web::scope("")
            .service(web::resource("/api/create_model").route(web::post().to(create_model)))
            .service(Files::new("/", "/frontend/build").index_file("index.html")),
    );
}

async fn create_model(form: web::Form<LearningData>) -> Result<HttpResponse> {
    let res = match LyrianModel::from_str(&*form.contents) {
        Ok(model) => match model.to_json_str() {
            Ok(json) => json,
            Err(e) => e,
        },
        Err(e) => e,
    };
    Ok(HttpResponse::Ok()
        .content_type("text/plain; charset=utf-8")
        .body(res))
}

#[cfg(test)]
mod test {
    use super::*;

    use actix_web::body::{Body, ResponseBody};
    use actix_web::dev::{Service, ServiceResponse};
    use actix_web::http::{header::CONTENT_TYPE, HeaderValue, StatusCode};
    use actix_web::test;
    use actix_web::web::Form;

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
    async fn create_model_unit_test() {
        let params = Form(LearningData {
            contents: String::from("テスト"),
        });
        let resp = create_model(params).await.unwrap();

        assert_eq!(resp.status(), StatusCode::OK);
        assert_eq!(
            resp.headers().get(CONTENT_TYPE).unwrap(),
            HeaderValue::from_static("text/plain; charset=utf-8")
        );
        assert_eq!(resp.body().as_str(), RESP_TEXT);
    }

    #[actix_rt::test]
    async fn create_model_integration_test() {
        let mut app = test::init_service(App::new().configure(app_config)).await;
        let xhr = test::TestRequest::post()
            .uri("/api/create_model")
            .set_form(&LearningData {
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
