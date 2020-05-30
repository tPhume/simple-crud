import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import animalRouter from "./resources/animal/router";

mongoose
  .connect("mongodb://user:password@127.0.0.1:27017/simple-crud", {
    useNewUrlParser: true,
    authSource: "admin",
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const app = express();
const port = 9000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.use("/api/animal", animalRouter);

app.listen(port, () => console.log(`Server running at port ${port}`));
