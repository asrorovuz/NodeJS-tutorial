const { error } = require("console");
const fs = require("fs");
const path = require("path");

// papka yaratish 1-parametr yo'li, 2-parametr opshin majburiy emas, 3-parametr collback funksiya xatolik bor yoki yo'qligi
// fs.mkdir(path.join(__dirname, "server"), err => {
//     if(err) throw new Error()

//     console.log("massage successfull!")
// } )

// filega ma'lumotlar yozish 1-yo'li, 2-parametr kiritilayotgan ma'lumot, 3-parametr colback
fs.writeFile(
  path.join(__dirname, "server", "server.txt"),
  "Create new server",
  (error) => {
    if (error) throw new Error();

    console.log("Success!");

    // filedagi ma'lumotlarni ulash
    fs.appendFile(
      path.join(__dirname, "server", "server.txt"),
      " and complate file",
      (err) => {
        if (err) throw new Error();

        console.log("Success changed!");
      }
    );

    // filedan ma'lumotlarni o'qish 1-usul
    fs.readFile(path.join(__dirname, "server", "server.txt"), (err, data) => {
      if (err) throw new Error();

      console.log(Buffer.from(data).toString());
    });

    // filedan ma'lumotlarni o'qish 2-usul
    fs.readFile(
      path.join(__dirname, "server", "server.txt"),
      "utf-8",
      (err, data) => {
        if (err) throw new Error();

        console.log(data);
      }
    );
  }
);
