import { Server as IOServer } from "socket.io";
export default function handler(req:any,res:any){
  if (!res.socket.server.io) {
    const io = new IOServer(res.socket.server, { path: "/api/socket_io", cors: { origin: "*" } });
    (globalThis as any)._io = io;
    io.on("connection", (socket) => {
      socket.emit("dashboard-update", { connected: true });
      socket.on("user-online", (payload) => io.emit("user-online", payload));
    });
    res.socket.server.io = io;
  }
  res.end();
}
