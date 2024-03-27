const EchannelSchema = require("../models/Echannel")
const mongoose = require("mongoose");
const { Login } = require("./user");

// function func(){

// }

const Makeappointment = async(req, res) => {
    try{
        const {PatientName, PatientPhoneNumber, DoctorName, AppointmentType, Date_Time, Reason } = req.body
        console.log(req.body);
        const newChannel = await EchannelSchema.create({ PatientName, PatientPhoneNumber, DoctorName, AppointmentType, Date_Time, Reason })
        res.status(202).json({"newchannel" : newChannel})
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

const UpdateAppointment = async(req, res) => {
    try{
        console.log("in back en");
        const {ChannelID} = req.params
        const { PatientName, PatientPhoneNumber, DoctorName, AppointmentType, Date_Time, Reason } = req.body
        const Wpdatechannel = await EchannelSchema.findById(ChannelID)
        Wpdatechannel.PatientName = PatientName
        Wpdatechannel.PatientPhoneNumber = PatientPhoneNumber
        Wpdatechannel.DoctorName = DoctorName
        Wpdatechannel.AppointmentType = AppointmentType
        Wpdatechannel.Date_Time = Date_Time
        Wpdatechannel.Reason = Reason
        await Wpdatechannel.save()
        res.status(200).json({"ward" : Wpdatechannel})
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

const DeleteAppointment = async(req, res) => {
    try{
        const {ChannelID} = req.params
        const deleteChannel = await EchannelSchema.findOneAndDelete({_id : ChannelID})
        res.status(200).json({"msg" : "Channel Deleted", "deleteChannel" : deleteChannel})
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

const ReadAppointment = async(req, res) => {
    try{
        const resultSet = await EchannelSchema.find({})
        res.status(200).json({"result" : resultSet})
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

module.exports = {Makeappointment, UpdateAppointment, DeleteAppointment, ReadAppointment}