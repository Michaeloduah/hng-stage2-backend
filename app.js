require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000), console.log("Connected to Mongoose server"))
    .catch((err) => console.log(err));


// Database Connection
// mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Middlewares
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(
  session({
  secret: "my secret key",
  saveUninitialized: true,
  resave: false,
})
);

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

// Route Prefix
app.use("/", require("./routes/routes"))



// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on port http://localhost:${port}`);
// });