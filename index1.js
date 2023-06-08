import { log } from "node:console";
import {
  appendFile,
  appendFileSync,
  readFile,
  readFileSync,
  rm,
  rmSync,
  writeFile,
  writeFileSync,
} from "node:fs";
// import { readFile, writeFile, appendFile, rmdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//// Sync API
// const data = readFileSync(join(__dirname, "write.js"), {
//   encoding: "utf-8",
// });

// log(data);

// writeFileSync(
//   join(__dirname, "write.js"),
//   `
// const c = 'upul';
// `
// );

// appendFileSync(
//   join(__dirname, "write.js"),
//   `
// console.log(c)
// `
// );

// rmSync(join(__dirname, "write.js"));

//// Promise API
// readFile(join(__dirname, "read.txt"), {
//   encoding: "utf-8",
// })
//   .then((data) => log(data))
//   .catch((err) => log(err));

// const writeFun = async (data) => {
//   try {
//     await writeFile(join(__dirname, "write.js"), data, {
//       encoding: "utf-8",
//     });
//   } catch (error) {
//     log(error);
//   }
// };

// writeFun(`
// const a = 'amila';
// console.log(a)
// `);

// appendFile(
//   join(__dirname, "write.js"),
//   `
// const c = 'upul';
// console.log(e);
// `
// )
//   .then((res) => log(res))
//   .catch((err) => log(err));

// rm(join(__dirname, "read.txt"))
//   .then((res) => log(res))
//   .catch((err) => log(err));
////// Callback API

// readFile(join(__dirname, "read.txt"), (err, data) => {
//   if (!err) {
//     log(data.toString("utf-8"));
//   }
// });

// writeFile(
//   join(__dirname, "write.txt"),
//   "AUK Learning Center 1",
//   {
//     encoding: "utf-8",
//   },
//   (err) => {
//     if (err) {
//       log(err);
//     }
//   }
// );

// appendFile(
//   join(__dirname, "write.js"),
//   `
//   const a = 'amila';
//   const c = [1,2,3,4,5];

//   console.log(a);
//   console.log(c[2])
//   `,
//   (err) => {
//     if (!err) {
//       log("document written");
//     }
//   }
// );

// rm(join(__dirname, "write.txt"), (err) => !err && log("file is deleted"));
