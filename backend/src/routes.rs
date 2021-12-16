use actix_web::web;

use crate::api::create_model;

pub fn routes(config: &mut web::ServiceConfig) {
    config.service(
        web::scope("/api")
            .service(web::resource("/create_model").route(web::post().to(create_model))),
    );
}
