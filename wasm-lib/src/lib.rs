use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn validate_login(username: &str, password: &str) -> String {
    if username.len() > 3 && password.len() > 6 {
        "Valid".to_string()
    } else {
        "Invalid".to_string()
    }
}

