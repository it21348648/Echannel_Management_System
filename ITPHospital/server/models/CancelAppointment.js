const mongoose = require ("mongoose")

const CancelSchema = new mongoose.Schema({

    ReferenceNo : {
        type : String,
        required : true,
    },

    CancelReason : {
        type : String,
        required : true,
    },
})

module.exports = mongoose.model("Cancel_appointment", CancelSchema)