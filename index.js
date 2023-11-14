import { createConnection } from "mysql2/promise";
import { log } from "node:console";

(async () => {
  try {
    const db = await createConnection({
      host: "localhost",
      port: "3306",
      user: "root",
      database: "school",
    });

    const [result] = await db.query("SELECT l_name FROM `student_dtails`");
    log(result);
  } catch (error) {
    log(error);
  }
})();

// const db = createConnection({
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "",
//   database: "school",
// });

// db.connect((err) => {
//   if (err) {
//     log(err);
//   } else {
//     log("db connected");
//     const sqlQuery = "UPDATE `office_details` SET name='kumara' WHERE id = 2";
//     db.query(sqlQuery, (err, result) => {
//       if (err) {
//         log(err);
//       } else {
//         log(result);
//       }
//     });
//   }
// });
