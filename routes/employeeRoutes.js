const express = require('express');
const route = express.Router();

const {createEmployee, employeeRegistration, employeeLogin} = require("../controllers/employeeController");

route.post("/register",employeeRegistration)
route.post("/login",employeeLogin);

module.exports = route