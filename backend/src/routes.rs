use actix_files::Files;
use actix_web::web;

use crate::api::create_model;

pub fn routes(config: &mut web::ServiceConfig) {
    config.service(
        web::scope("")
            .service(web::resource("/api/create_model").route(web::post().to(create_model)))
            .service(Files::new("/", "/frontend/build").index_file("index.html")),
    );
}
