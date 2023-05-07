require("dotenv").config()
const express = require("express")
const app = express()
const morgan = require('morgan');
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const { connectDB, db } = require("./db/connect")

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// sample
app.get("/", (req, res) => {
  res.send("Hello world")
})

// routes
const userRouter = require("./routes/users")


// mount routes
app.use("/api/v1/users", userRouter)

const startApp = async () => {
  try {
    await connectDB()
    app.listen(PORT, console.log(`App started on PORT ${PORT}`))
  } catch (err) {
    console.log("an error occured", err)
  }
}

startApp()


//clients talks to routes
//routes talks to controller
//controller to model
//model talks to db
//db returns value to model
//model talks to controller
//controller performs the logic
