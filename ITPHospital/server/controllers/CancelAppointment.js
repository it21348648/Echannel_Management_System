const CancelSchema = require("../models/CancelAppointment")
const mongoose = require("mongoose")

const Cancelappointment = async(req, res) => {
    try{
        const {ReferenceNo, CancelReason} = req.body
        const cancel = await CancelSchema.create({ReferenceNo, CancelReason})
        res.status(202).json({"cancel" : cancel})
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

const Readcancelrequiest = async(req, res) => {
    try{
        const readcancel = await CancelSchema.find({})
        res.status(200).json({"readresult" : readresultSet})
    } catch(error){
        res.status(500).json({"msg" : error.message})
    }
}

module.exports = {Cancelappointment, Readcancelrequiest}