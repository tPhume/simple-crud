import express from "express";

const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.listen(port, () => console.log(`Server running at port ${port}`));
