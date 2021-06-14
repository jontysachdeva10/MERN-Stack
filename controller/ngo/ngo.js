const { validationResult } = require('express-validator');
const NGO = require('../../models/NGO');

/**
 * @description ADD NGO
 */
exports.addNgo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, address, city, type, email, phone } = req.body;
  try {
    let ngo = await NGO.findOne({ email });   // findOne returns a promise, so instead, we are using async/await & using try-catch to handle response and errors
    if(ngo) {
      return res.status(400).json({ errors: [{ msg: 'NGO already exist' }]});
    }
    
    ngo = new NGO({
      name,
      address,
      city,
      type,
      email,
      phone,
    });

    await ngo.save();
    res.json(ngo);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server not found");
  }
};

/**
 * @description GET NGO
 */
exports.getNgo = async (req, res) => {
  try {
      const { type } = req.params;
      const{ city } = req.query;
      let ngo;
      if(city) {
        ngo = await NGO.find({ type, city });
      }
      else {
        ngo = await NGO.find({ type });
      }
  
      if(!ngo) {
          return res.status(404).json({ msg: 'NGO not found' });
      }
      res.json(ngo);
  } catch (error) {
      console.error(error);
      res.status(500).json({ msg: error.message });
  }
};
