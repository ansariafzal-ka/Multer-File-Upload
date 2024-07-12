require("dotenv").config();
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const upload = require("./src/middleware/multer");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Multer File Upload",
  });
});

app.post("/upload", upload.single("file-upload"), (req, res) => {
  res.send("Upload");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
