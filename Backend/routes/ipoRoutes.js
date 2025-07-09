const express = require('express')
const router = express.Router()
const IPO = require('../models/IPO')

// CREATE IPO
router.post('/ipos', async (req, res) => {
  try {
    console.log("📦 IPO request body:", req.body)
    const ipo = await IPO.create(req.body)
    res.status(201).json({ message: 'IPO created successfully', ipo })
  } catch (error) {
    console.error("❌ Error adding IPO:", error.message)
    res.status(500).json({ error: error.message })
  }
})

// READ ALL IPOs
router.get('/ipos', async (req, res) => {
  try {
    const ipos = await IPO.findAll()
    res.json(ipos)
  } catch (error) {
    console.error("❌ Error fetching IPOs:", error.message)
    res.status(500).json({ error: error.message })
  }
})

// READ IPO by ID
router.get('/ipos/:id', async (req, res) => {
  try {
    const ipo = await IPO.findByPk(req.params.id)
    if (!ipo) return res.status(404).json({ error: 'IPO not found' })
    res.json(ipo)
  } catch (error) {
    console.error("❌ Error fetching IPO by ID:", error.message)
    res.status(500).json({ error: 'Failed to fetch IPO' })
  }
})

// UPDATE IPO
router.put('/ipos/:id', async (req, res) => {
  try {
    const [updated] = await IPO.update(req.body, {
      where: { id: req.params.id },
    })
    if (!updated) return res.status(404).json({ error: 'IPO not found' })
    res.json({ message: 'IPO updated successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to update IPO' })
  }
})

// DELETE IPO
router.delete('/ipos/:id', async (req, res) => {
  try {
    const deleted = await IPO.destroy({
      where: { id: req.params.id },
    })
    if (!deleted) return res.status(404).json({ error: 'IPO not found' })
    res.json({ message: 'IPO deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete IPO' })
  }
})

module.exports = router
