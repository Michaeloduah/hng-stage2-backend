const express = require("express");
const router = express.Router();
const User = require("../models/users");
const fs = require("fs");

// Add a Person
router.post("/api", (req, res) => {
  const user = new User({
    name: req.body.name,
    track: req.body.track,
    email: req.body.email,
  });
  user
    .save()
    .then((result) => {
      req.session.message = {
        type: "success",
        message: "User added successfully",
      };
      res.send(user);
    })
    .catch((err) => {
      console.error(err);
      res.json({ message: err.message, type: "danger" });
    });
});

// View a Person by Id
router.get("/api/:id", (req, res) => {
  let id = req.params.id;
  User.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.redirect("/");
    });
});

// Update user route
router.patch("/api/:id", (req, res) => {
  let id = req.params.id;

  User.findByIdAndUpdate(id, {
    name: req.body.name,
    track: req.body.track,
    email: req.body.email,
  })
    .then((result) => {
      req.session.message = {
        message: "Person Updated Successfully",
      };
      res.send("Person updated successfully");
    })
    .catch((err) => {
      console.error(err);
      res.json({ message: err.message});
    });
});

// Delete User Route
router.delete('/api/:id', (req, res) => {
    let id = req.params.id;
    User.findOneAndRemove(id)
    .then((result) => {
        req.session.message = {
            message: 'Person Deleted Successfully'
        };
        res.send("Person Deleted successfully");
    })
    .catch((err) => {
        console.error(err);
        res.json({message: err.message});
    });
})
module.exports = router;
