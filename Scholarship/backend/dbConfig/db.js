require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose
  .connect(
    process.env.DB_URL, { useNewUrlParser: true }   )
  .then(() => {
    console.log("DataBase is Connected Successfully");
})
.catch((err) => {  console.log(`error : ${err}`);  });
 