const http = require("http");
const psList = require("ps-list");

const getPsList = async () => {
  const data = await psList();
  return data;
};

const printPsList = (data) => {
  const ps = data.find((process) => process.name === "Photoshop.exe");
  console.log(ps);
};

http
  .createServer(async (req, res) => {
    console.log("start server");
    const data = await getPsList();
    printPsList(data);
  })
  .listen(8000);
