use actix_web::{web, HttpResponse, Result};
use lyrian::model::LyrianModel;
use serde::{Deserialize, Serialize};

use crate::errors::ApiErrorResponse;

#[derive(Deserialize, Serialize)]
pub struct LearningData {
    pub contents: String,
}

pub async fn create_model(form: web::Form<LearningData>) -> Result<HttpResponse, ApiErrorResponse> {
    match LyrianModel::from_str(&*form.contents) {
        Ok(model) => match model.to_json_str() {
            Ok(json) => Ok(HttpResponse::Ok()
                .content_type("text/plain; charset=utf-8")
                .body(json)),
            Err(_) => Err(ApiErrorResponse::JsonStringifyError),
        },
        Err(_) => Err(ApiErrorResponse::LyrianModelGenerationError),
    }
}

#[cfg(test)]
mod test {
    use super::*;

    use actix_web::body::{Body, ResponseBody};
    use actix_web::http::{header::CONTENT_TYPE, HeaderValue, StatusCode};
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
}
