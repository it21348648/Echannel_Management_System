const express = require("express")
const router = express.Router()
const {Makeappointment, UpdateAppointment, DeleteAppointment,  ReadAppointment} = require("../controllers/Echannel")

router.post("/insert", Makeappointment)
router.put("/update/:ChannelID", UpdateAppointment)
router.delete('/delete/:ChannelID', DeleteAppointment)
router.get('/getAll', ReadAppointment)

module.exports = router