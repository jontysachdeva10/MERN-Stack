const { validationResult } = require("express-validator");

const Donate = require("../../models/Donate");

exports.donateMoney = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, amount, upi, location, phone, email } = req.body;
  try {
    let donate = new Donate({
      name,
      amount,
      upi,
      location,
      phone,
      email,
    });

    await donate.save();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
