const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

/**
 * @description ADD NGO
 */
const { addNgo } = require("../controller/ngo/ngo");
router.post(
  "/",
  [
    body("name", "Name is required").notEmpty(),
    body("address", "Address is required").notEmpty(),
    body("city", "City is required").notEmpty(),
    body("type", "Type is required").notEmpty(),
    body("email", "Email is required").isEmail(),
    body("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
  ],
  addNgo
);

/**
 * @description GET NGO
 */
const { getNgo } = require("../controller/ngo/ngo");
router.get("/:type", getNgo);

/**
 * @description PICKUP REGISTER
 */
const { pickupRegister } = require("../controller/ngo/pickup");
router.post(
  "/pickup",
  [
    body("name", "Name is required").notEmpty(),
    body("address", "Address is required").notEmpty(),
    body("city", "Please enter your City").notEmpty(),
    body("state", "Please enter your State").notEmpty(),
    body("email", "Please enter your valid Email").isEmail(),
    body("phone", "Enter valid Phone No.").isLength({ min: 10, max: 10 }),
  ],
  pickupRegister
);

/**
 * @description DONATE MONEY
 */
const { donateMoney } = require("../controller/ngo/donate");
router.post(
  "/donate",
  [

  ],
  donateMoney
);

module.exports = router;
