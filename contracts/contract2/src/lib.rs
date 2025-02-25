use cosmwasm_std::{
    entry_point, DepsMut, Env, MessageInfo, Response, StdResult,
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct StoreMsg {
    pub value: String,
}

#[entry_point]
pub fn execute(
    _deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    msg: StoreMsg,
) -> StdResult<Response> {
    Ok(Response::new()
        .add_attribute("action", "store_value")
        .add_attribute("value", msg.value)
        .add_attribute("sender", info.sender))
}

