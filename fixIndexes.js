const mongoose = require("mongoose");
const User = require("./models/User");

const MONGO_URI = "mongodb+srv://Javah21223:java198780@spec.v57bg.mongodb.net/";

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("Connected to database");

    // Удаляем проблемные индексы
    await mongoose.connection.db.collection("users").dropIndex("name_1").catch(err => console.log("Index not found"));
    await mongoose.connection.db.collection("users").dropIndex("email_1").catch(err => console.log("Index not found"));

    console.log("Indexes deleted");

    mongoose.disconnect();
  })
  .catch(err => console.error(err));
