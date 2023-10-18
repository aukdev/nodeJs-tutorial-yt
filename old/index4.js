import { createServer } from "node:http";
import { log } from "node:console";
import { server } from "./server-control.js";

const PORT = process.env.PORT || 4000;

createServer((req, res) => {
  server(req, res);
}).listen(PORT, () => log(`server running ${PORT}`));
