const mongoose = require("mongoose");

uri =
  "mongodb+srv://sprakash6233:WEpRPhhMZVSrhsPw@cluster0.p1s1mrj.mongodb.net/?retryWrites=true&w=majority";

const connectDB = () => {
  console.log("connect data");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
