import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import wasm from "../../wasm-lib/pkg/wasm_lib";

const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const validation = wasm.validate_login(username, password);
    if (validation === "Valid") {
      const res = await fetch("http://127.0.0.1:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      setMessage(data);

      // Blockchain interaction (example)
      const client = await SigningCosmWasmClient.connectWithSigner("rpc_url", "signer");
      const contractAddress = "cosmwasm_contract_address";
      await client.execute(
        "sender_address",
        contractAddress,
        { register_user: { username } },
        "auto",
        "memo"
      );
    } else {
      setMessage("Invalid input");
    }
  };

  return (
    <div style={{ 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      background: "linear-gradient(135deg, #667eea, #764ba2)" 
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        padding: "2rem",
        width: "300px",
      }}>
        <h2 style={{ color: "white", textAlign: "center" }}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ 
            width: "100%", 
            padding: "0.5rem", 
            margin: "0.5rem 0", 
            borderRadius: "8px", 
            border: "none",
            background: "rgba(255, 255, 255, 0.2)",
            color: "white"
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ 
            width: "100%", 
            padding: "0.5rem", 
            margin: "0.5rem 0", 
            borderRadius: "8px", 
            border: "none",
            background: "rgba(255, 255, 255, 0.2)",
            color: "white"
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "0.5rem",
            margin: "0.5rem 0",
            borderRadius: "8px",
            border: "none",
            background: "rgba(255, 255, 255, 0.3)",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <p style={{ color: "white", textAlign: "center" }}>{message}</p>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

