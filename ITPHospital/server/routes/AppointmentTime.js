const express = require("express")
const router = express.Router()
const {Setdate, Updatedate, Deletedate, Readdate} = require("../controllers/AppointmentTime")

router.post("/insert", Setdate)
router.put("/update/:dateID", Updatedate)
router.delete('/delete/:dateID', Deletedate)
router.get('/getAll', Readdate)

module.exports = router