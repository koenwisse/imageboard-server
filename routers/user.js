import { Router } from "express";

const User = require("../models").user;

const router = new Router();

// Define routes === endpoints
// GET - localhost:4000/users

router.get("/users", async (req, res, next) => {
  try {
    // Somehow get the data from my table
    // .findAll is a model method
  } catch (error) {
    next(e);
  }
});

module.exports = router;
