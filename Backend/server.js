const express = require("express")
const dotenv = require("dotenv")
const connectDB = require( "./config/db")
const cors = require( "cors")

dotenv.config()

const app = express();


app.use(cors());
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
    res.send('IPO Backend API Running')
})

app.use('/api/auth', require('./routes/authRoutes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Serve is running on  http://localhost:${PORT}`)
})