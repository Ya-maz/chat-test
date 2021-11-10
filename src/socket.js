import { io } from "socket.io-client";

export const socket = io("wss://test-chat-backend-hwads.ondigitalocean.app", {
  transports: ["websocket"],
  upgrade: false,
  autoConnect: false,
});