// const http = require("http");
// const tasklist = require("tasklist");

// const getTaskList = async () => {
//   const data = await tasklist();
//   return data;
// };

// const searchProcessName = (list) => {
//   for (let i = 0; i < list.length; i++) {
//     //   console.log(list[i].imageName);
//     if (list[i].imageName === "Photoshop.exe") {
//       console.log(`이름 : ${list[i].imageName}`, `PID : ${list[i].pid}`, `SessionName :${list[i].sessionName}`);
//     }
//   }
// };

// http
//   .createServer(async (req, res) => {
//     console.log("start server");
//     const data = await getTaskList();
//     searchProcessName(data);
//   })
//   .listen(8000);
