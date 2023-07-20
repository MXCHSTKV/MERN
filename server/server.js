import express from "express";

const PORT = 3002;

const server = express();

server.get("/", (req, res) => {
  res.send("All works, ya");
});

server.listen(PORT, () => {
  console.log(`Servering at http://localhost${PORT}`);
});
