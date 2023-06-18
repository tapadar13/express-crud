const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.routes");

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  console.log("Hello from the homepage!");
  res.send("Hello from the homepage!");
});

app.listen(PORT, () => {
  console.log(`Server is now running successfully on http://localhost:${PORT}`);
});
