use cosmwasm_std::{
    entry_point, DepsMut, Env, MessageInfo, Response, StdResult,
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct RegisterMsg {
   pub username: String,
}

#[entry_point]
pub fn execute(
    _deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    msg: RegisterMsg,
) -> StdResult<Response> {
    Ok(Response::new()
        .add_attribute("action", "register_user")
        .add_attribute("username", msg.username)
        .add_attribute("sender", info.sender))
}

