require("dotenv").config();
require("./DL/db").connect();
const express = require("express");

const app = express();
const cors = require("cors");
const PORT = process.env.PORT;
const dataRouter = require("./routes/data.route");

app.use(cors());
app.use(express.json());

app.use("/api", dataRouter);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
