// Here we will have all the routes corresponding to the user model

import { Router } from "express";

const Image = require("./images");

const router = new Router();

// Define routes === endpoints
// GET - localhost:4000/users
router.get("/users", async (req, res, next) => {
  try {
    // Somehow get the data from my table
    // .findAll is a model method
    // send the users back
  } catch (error) {
    next(e);
  }
});

module.exports = router;
