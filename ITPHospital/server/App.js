const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const mongoose = require('mongoose') //mongo db library
const cors = require('cors') //Cors will let us accept cross origin request from our frontend to backend.
const dotenv = require('dotenv') //for keep secret and non shareable properies
const multer = require('multer') //Multer is a middleware that will let us handle multipart/form data sent from our frontend form.
const morgan = require('morgan') //used to log information of each request that server receives.
var forms = multer();

//api configuration
app.use(express.json({extended : true}))
app.use(express.urlencoded({extended : true}))
app.use(forms.array()); 
app.use(bodyParser.json({limit : '30mb', extended : true}))
app.use(bodyParser.urlencoded({limit : '30mb', extended : true}))
app.use(morgan("common"))
app.use(cors())
dotenv.config()

//routes configaration
const userRoute = require('./routes/user.js')
const EchannelRoute = require('./routes/Echannel.js')
const CancelRoute = require('./routes/CancelAppointment.js')
const setdate = require('./routes/AppointmentTime.js')
app.use('/user', userRoute)
app.use('/Echannel', EchannelRoute)
app.use('/CancelAppointment', CancelRoute)
app.use('/AppointmentTime', setdate)

const server = http.createServer(app)

//mongo setup
const PORT = process.env.PORT
mongoose.set('strictQuery', true)
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        server.listen(PORT, () => {console.log(`server running on port ${PORT}`);})
    })
    .catch((err) => {console.log(err);})
