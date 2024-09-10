const cors = require("cors");
const express = require("express");
const connectMongo = require("./persistence/connection");
const mainRouter = require("./routes");

const app = express();
const PORT = process.env.PORT || 9000;

connectMongo().catch((err) => console.error("Error connect to Mongo", err));

app.use(cors());
app.use(express.json());

app.use("/api", mainRouter);

app.get("/", (_, res) => {
  res.json();
});

app.listen(PORT, () => console.log(`Server Runing on portttt: ${PORT}`));
module.exports = app;
