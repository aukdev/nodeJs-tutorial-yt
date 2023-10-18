import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFile } from "node:fs/promises";
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const fileRead = async (path, res, contentType) => {
  try {
    const data = await readFile(join(__dirname, "../", path));
    res.writeHead(200, `Content-Type: ${contentType}`);
    res.end(data);
  } catch (error) {
    // log(error);
    res.writeHead(404, `Content-Type: text/html`);
    const data = await readFile(join(__dirname, "../", "public/404.html"));
    res.end(data);
  }
};
