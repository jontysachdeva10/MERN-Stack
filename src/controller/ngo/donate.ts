const { validationResult } = require("express-validator");

import { Donate } from "../../models/Donate";

const donateMoney = async function (req: any, res: any) {
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
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export { donateMoney };
