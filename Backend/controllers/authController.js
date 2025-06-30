const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Register
exports.registerAdmin = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const existing = await Admin.findOne({ where: { email } })
    if (existing) return res.status(400).json({ msg: 'Admin already exists' })

    const hashed = await bcrypt.hash(password, 10)
    await Admin.create({ name, email, password: hashed })

    res.status(201).json({ msg: 'Admin registered successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server error' })
  }
}

// Login
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body

  try {
    const admin = await Admin.findOne({ where: { email } })
    if (!admin) return res.status(401).json({ msg: 'Invalid credentials' })

    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) return res.status(401).json({ msg: 'Invalid credentials' })

    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    res.status(200).json({ msg: 'Login successful', token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server error' })
  }
}
