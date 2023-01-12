const express = require('express');
const mongoose = require('mongoose');
//Allows us to control app's Cross Origin Resource Sharing settings
const cors = require('cors');
//Routes
const userRoutes = require('./routes/user')
const courseRoutes = require('./routes/course');

//server setup
const app = express();
const port = 4000;
//Allows all resources/origin to access our backend application
//Enable all CORS requests
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Defines the '/api/users' string to be included for all routes defined in the 'user' route file
app.use('/api/users', userRoutes)
app.use('/api/courses', courseRoutes)


//Database connection
/*mongoose.connect("mongodb+srv://dbUser:dbUser@zuitt.ri5rh.mongodb.net/batch144_booking_system?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});*/
mongoose.connect("mongodb+srv://yaniiix21:clark123@wdc028-course-booking.y3iug.mongodb.net/batch144_booking_system?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

app.listen(port, () =>{
	console.log(`API is now online on port ${port}`)
})