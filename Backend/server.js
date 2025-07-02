const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const sequelize = require('./config/db')
const IPO = require('./models/IPO')
const ipoRoutes = require('./routes/ipoRoutes')
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api', ipoRoutes)

const PORT = process.env.PORT || 5000

sequelize.sync().then(() => {
  console.log('✅ PostgreSQL connected & tables synced')
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
