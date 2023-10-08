import fileRead from "./libs/readfile.js";
import fileWrite from "./libs/writefile.js";
import { log } from "node:console";
import inquirer from "inquirer";
import { cardGen } from "./libs/htmlCardGen.js";

const studentInfor = [];

(async () => {
  let allCard = "";

  do {
    const data = await inquirer.prompt([
      {
        type: "input",
        message: "Enter Student Name",
        name: "name",
      },
      {
        type: "number",
        message: "Enter Student age",
        name: "age",
      },
      {
        type: "input",
        message: "Enter Student city",
        name: "city",
      },
      {
        type: "list",
        message: "Enter Student Class",
        choices: ["class 1", "class 2", "class 3", "class 4"],
        name: "stuclass",
      },
      {
        type: "checkbox",
        message: "Enter Student Subject",
        choices: ["java", "javascript", "python", "golang", "dart"],
        name: "subject",
      },
      {
        type: "confirm",
        message: "Have more Students",
        name: "check",
      },
    ]);

    // log(data);
    const { check, ...infor } = data;
    studentInfor.push(infor);
    if (!check) {
      break;
    }
  } while (true);

  studentInfor.forEach(({ name, age, stuclass, subject }) => {
    allCard += cardGen(name, age, stuclass, subject);
  });

  log(allCard);
  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Student Infor</title>
    <link href="./index.css" rel="stylesheet" />
  </head>
  <body>
    <main class="main">
      ${allCard}
    </main>
  </body>
</html>
  `;
  fileWrite("index.html", htmlContent, (d) => log(d));
})();

// fileRead("read.txt", (data) => {
//   const whatToDo = String(data).split(" ");
//   const command = whatToDo[0];
//   const content = whatToDo.slice(1, whatToDo.length - 1).join(" ");
//   const file = whatToDo[whatToDo.length - 1];

//   if (command === "write") {
//     fileWrite(file, content, (d) => log(d));
//   }
// });
