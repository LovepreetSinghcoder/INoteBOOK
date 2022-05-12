const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'Lovepreetisagoodb$oy@';

// Create a user using : "/api/auth/createuser". no login required
router.post('/createuser', [
  body('name', 'Enter a Valid name').isLength({ min: 3 }),
  body('email', 'Please write valid email').isEmail(),
  body('password', 'Please choose password atleast 5 character').isLength({ min: 5 }),
], async (req, res) => {
  // if there are erroe , return bad request and the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // check whether the email exists already
    let user = await User.findOne({ email: req.body.email });
    // console.log(user)
    if (user) {
      return res.status(400).json({ error: "Sorry a User from this email already exist!" })
    }
    //adding security to the password using bcrypt salt and hashibng techniques
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // create a new user
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    })
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);


    res.json({ authtoken })
  } catch (error) {
    console.error(error.message);
    res.status(500).sen("Some Error occured!")
  }
})


// Authenticate a user using : "/api/auth/login". no login required
router.post('/login', [
  body('email', 'Please write valid email').isEmail(),
  body('password', 'Password cannnot be blank!').exists(),
], async (req, res) => {
  // if there are erroe , return bad request and the error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Please try again with right creditial" })
    }
    const passwordCompare = bcrypt.compare(password, user.password);
    if

  } catch (error) {

  }
}
)
module.exports = router 