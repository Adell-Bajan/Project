const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const empty  = require('is-empty');
const app = express.Router();

const User = require('../models/user');

const auth = require("../controller/auth.controller");


// register  route
app.post("/register", auth.register);

// get result user
app.get("/result",auth.result);


module.exports = app;
