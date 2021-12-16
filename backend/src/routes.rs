use actix_web::web;

use crate::api::create_model;

pub fn routes(config: &mut web::ServiceConfig) {
    config.service(
        web::scope("/api")
            .service(web::resource("/create_model").route(web::post().to(create_model))),
    );
}

#[cfg(test)]
mod test {
    use crate::api::LearningData;
    use crate::routes::routes;

    use actix_web::body::{Body, ResponseBody};
    use actix_web::dev::{Service, ServiceResponse};
    use actix_web::http::{header::CONTENT_TYPE, HeaderValue, StatusCode};
    use actix_web::test;
    use actix_web::App;

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
