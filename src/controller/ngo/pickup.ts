const { validationResult } = require("express-validator");

import { Pickup } from "../../models/Pickup";

const pickupRegister = async (req: any, res: any) => {
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
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export { pickupRegister };
