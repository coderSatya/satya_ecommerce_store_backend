const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const user_routes = require("./routes/Users");

app.get("/", (req, res) => {
  res.send("Hi, I am live");
});

// middleware or to set router
app.use("/api/user", user_routes);
const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am connected`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
