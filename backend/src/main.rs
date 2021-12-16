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
