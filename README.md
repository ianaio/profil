# profil

# USED COMMANDS:

## POSTGRESS DB CREATE
psql -U postgres
sudo -u postgress psql profil
sudo -u postgres psql profil
sudo -u postgres psql


### POSTGRESS-DIESEL //keep on mind that you need to connect to DB using \c[DATABASE_NAME] in postgress prompt. Then past it in .ENV

vim .env


## WASM-PACK INSTALL/BUILD

curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
wasm-pack build --target web
wasm-pack --version
rustup target add wasm32-unknown-unknown


## CRUCIAL LIBRARY FOR POSTGRESS-DIESEL
sudo apt update
sudo apt install libpq-dev


## COSMWASM CONTRACT GENERATE
cargo build
cargo build --release --target wasm32-unknown-unknown


## DIESEL CARGO POSTGRESS AUTO GENERATE
cargo install diesel_cli --no-default-features --features postgres
diesel --version
diesel setup
vim .env
psql -U postgres
diesel setup
diesel print-schema > src/schema.rs


vim schema.rs

## CARGO TREE COMMANDS
cargo install cargo-tree
cargo tree | grep mio
cargo tree > tree.txt
vim tree.txt

## CARGO CASH CLEAN
rm -rf ~/.cargo/registry/cache
rm -rf ~/.cargo/registry/index
rm -rf ~/.cargo/git
cargo clean
rm Cargo.lock
cargo build

grep mio Cargo.lock

