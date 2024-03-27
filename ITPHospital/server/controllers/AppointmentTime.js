const SetdateSchema = require("../models/AppointmentTime")
const mongoose = require("mongoose")

const Setdate = async(req, res) => {
    try{
        const { SheduleTime } = req.body
        const settime = await SetdateSchema.create({ SheduleTime })
        res.status(202).json({"date-time" : settime })
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

const Updatedate = async(req, res) => {
    try{
        const {dateID} = req.params
        const { newSheduleTime } = req.body
        const UpdateDatetime = await SetdateSchema.findById(dateID)
        UpdateDatetime.SheduleTime = newSheduleTime
        
        await UpdateDatetime.save()
        res.status(200).json({"updateDate" : UpdateDatetime})
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

const Deletedate = async(req, res) => {
    try{
        const {dateID} = req.params
        const deleteDatetime = await SetdateSchema.findOneAndDelete({_id : dateID})
        res.status(200).json({"msg" : "date Time Deleted", "deleteDatetime" : deleteDatetime})
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

const Readdate = async(req, res) => {
    try{
        const viewdatetime = await SetdateSchema.find({})
        res.status(200).json({"result" : viewdatetime})
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

module.exports = {Setdate, Updatedate, Deletedate, Readdate}