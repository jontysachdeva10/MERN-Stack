const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");

// Import User model
const User = require("../../models/User");

/**
 * @description ADD USER
 */
exports.registerUser = async (req, res) => {
  // check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, address, city, state, email, phone } = req.body;
  try {
    // check if user exists
    let user = await User.findOne({ phone });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exist." }] });
    }
    
    // creating a user instance
    user = new User({
      name,
      address,
      city,
      state,
      email,
      phone,
    });

    await user.save();

  } catch (error) {
    res.status(500).send(error.message);
  }
};
