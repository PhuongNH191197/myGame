import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Client } from "@heroiclabs/nakama-js";

var useSSL = false; // Enable if server is run with an SSL certificate.
var client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);

async function authenticate() {
  var deviceId = localStorage.getItem("deviceId");
  if (!deviceId) {
    deviceId = uuidv4();
    localStorage.setItem("deviceId", deviceId);
  }
  const session = await client.authenticateDevice(deviceId, true);
  localStorage.setItem("user_id", session.user_id);
  // ep4
  const trace = false;
  var socket = client.createSocket(useSSL, trace);
  await socket.connect(session);
  console.info(session);
  console.info(socket);
}

authenticate();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
