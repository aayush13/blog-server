"use strict";

const express = require("express");

const authController = require('../controllers/authenticator.controller')

const router = express.Router();

router.get('/', authController.get);

module.exports = router;