"use strict";
import {get, getAuthToken, verifyAuthToken} from '../controllers/authenticator.controller'
const express = require("express");
const router = express.Router();

router.get('/', get);
router.post('/', getAuthToken);
router.post('/verify', verifyAuthToken);

module.exports = router;