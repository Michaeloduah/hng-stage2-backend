require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 6000;

// Database Connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to the database"));

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
app.use("", require("./routes/routes"))



const port = 6000;
app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});