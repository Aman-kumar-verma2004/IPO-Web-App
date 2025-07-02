const express = require('express')
const router = express.Router()
const  IPO  = require('../models/IPO') 

// Add IPO
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

router.get('/ipos', async (req, res) => {
  try {
    const ipos = await IPO.findAll()
    res.json(ipos)
  } catch (error) {
    console.error("❌ Error fetching IPOs:", error.message)
    res.status(500).json({ error: error.message })
  }
})

router.put('/ipos/:id', async (req, res) => {
  try {
    const [updated] = await IPO.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) return res.status(404).json({ error: 'IPO not found' });
    res.json({ message: 'IPO updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update IPO' });
  }
});

// Delete IPO
router.delete('/ipos/:id', async (req, res) => {
  try {
    const deleted = await IPO.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) return res.status(404).json({ error: 'IPO not found' });
    res.json({ message: 'IPO deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete IPO' });
  }
});



module.exports = router
