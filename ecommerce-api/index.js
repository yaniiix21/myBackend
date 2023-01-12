const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const orderRoutes = require('./routes/order')


// server set up
const app = express()
const port = 4000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/order', orderRoutes)

// db connection
mongoose.connect("mongodb+srv://yaniiix21:clark123@wdc028-course-booking.y3iug.mongodb.net/batch144_capstone2_ecommerce?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology:true
})

let db = mongoose.connection

db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => console.log("We're connected to the cloud database"))

app.listen(process.env.PORT || port, () => console.log(`Now listening to port ${process.env.PORT ||port}`))