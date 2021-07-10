const { validationResult } = require("express-validator");

const Pickup = require("../../models/Pickup");

exports.pickupRegister = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, address, city, state, item, quantity, phone, email } = req.body;
  try {
    let pickup = new Pickup({
      name,
      address,
      city,
      state,
      item,
      quantity,
      phone,
      email,
    });

    await pickup.save();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
