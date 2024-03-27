const mongoose = require("mongoose")

const SetdateSchema = new mongoose.Schema({

    SheduleTime : {
        type : Date,
        required : true,
    },
})

module.exports = mongoose.model("Setdate", SetdateSchema)