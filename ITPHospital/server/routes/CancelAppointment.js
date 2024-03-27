const express = require("express")
const router = express.Router()
const {Cancelappointment, Readcancelrequiest} = require("../controllers/CancelAppointment")

router.post("/cancel", Cancelappointment)
router.get("/getAll", Readcancelrequiest)

module.exports = router