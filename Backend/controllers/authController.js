const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Register admin
exports.registerAdmin = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const exists = await Admin.findOne({ email })
    if (exists) return res.status(400).json({ msg: 'Admin already exists' })

    const hashedPassword = await bcrypt.hash(password, 10)
    const newAdmin = new Admin({ name, email, password: hashedPassword })
    await newAdmin.save()

    res.status(201).json({ msg: 'Admin registered successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server error' })
  }
}

// Login admin
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body

  try {
    const admin = await Admin.findOne({ email })
    if (!admin) return res.status(401).json({ msg: 'Invalid credentials' })

    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) return res.status(401).json({ msg: 'Invalid credentials' })

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    res.status(200).json({ msg: 'Login successful', token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server error' })
  }
}
