const mongoose = require("mongoose")

const EchannelSchema = new mongoose.Schema({

    PatientName : {
        type : String,
        required : true,
    },
    PatientPhoneNumber : {
        type : String,
        required : true,
    },
    
    DoctorName : {
        type : String,
        required : true,
    },
    AppointmentType : {
        type : String,
        required : true,
    },
    Date_Time : {
        type : String,
        required : true,
    },
    Reason : {
        type : String,
        required : true,
    },
})

module.exports = mongoose.model("Make_appointment", EchannelSchema)