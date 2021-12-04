use actix_web::{http::StatusCode, HttpResponse, ResponseError};
use derive_more::Display;

#[derive(Debug, Display)]
pub enum ApiErrorResponse {
    #[display(fmt = "Json stringify error")]
    JsonStringifyError,
    #[display(fmt = "LyrianModel generation error")]
    LyrianModelGenerationError,
}

impl ResponseError for ApiErrorResponse {
    fn status_code(&self) -> StatusCode {
        match self {
            ApiErrorResponse::JsonStringifyError => StatusCode::BAD_GATEWAY,
            ApiErrorResponse::LyrianModelGenerationError => StatusCode::BAD_GATEWAY,
        }
    }

    fn error_response(&self) -> HttpResponse {
        match self {
            ApiErrorResponse::JsonStringifyError => HttpResponse::BadRequest().finish(),
            ApiErrorResponse::LyrianModelGenerationError => HttpResponse::BadRequest().finish(),
        }
    }
}
