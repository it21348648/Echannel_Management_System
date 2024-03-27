import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import '../EchannelDashboard/DeleteAppointment.css'
import Img05 from './Images/woman-using-tablet-pc-pressing-260nw-476910106.png'
import { useState } from 'react'
import axios from 'axios';

export default function cancelAppointment() {

  const [referenceNo, setreferenceNo] = useState("")
  const [cancelReason, setcancelReason] = useState("")

  const sendData = async(e) => {
    e.preventDefault();
    const removeappointment ={
      ReferenceNo : referenceNo,
      CancelReason : cancelReason
    }

    console.log(removeappointment)

    await axios.post("http://localhost:3001/CancelAppointment/cancel",removeappointment).then(()=>{
      alert("Appointment cancel Successfully")

    }).catch((err)=>{
      alert("error adding")
    })
  }
  return (
    <div>

      <Navbar></Navbar>
      
      <img className='echannelimg01' src={Img05} alt='Cancel appointment imagge'/>

      <h1 className="channeltopic01">Cancel Your Appointment</h1>

      <div className = "channelparg">
      <span>Your time is valuable, and we understand the importance of keeping your appointments up to date. With our easy-to-use appointment update page, you can quickly modify your booking details and ensure that your schedule remains accurate and on track. We want to make it as effortless as possible for you to manage your appointments, so you can focus on what really matters. With just a few clicks, you can make changes to your appointment details, and we'll take care of the rest. Trust us to help you stay organized and on top of your busy schedule.</span>
      </div>

      {/* <form className ='channeltopic01'>
        
        <div className='aligntext'>
        <span className='formText'>Referance Number</span>
        </div>

        <br/>
        <input className='fillingText' type='search' required></input>
        <br/>

        <div className='aligntext'>
        <span className='formText'>Reason for consultation</span>
        </div>

        <br/>
        <input className='fillingText' type='textbox' required/>

        </form> */}

<div className='form-group'>
      <form onSubmit={sendData}>
  <div>
    <div  className='formTextMargin'>
    <label className='formText'>Reference number</label>
    </div>
    <br/>
    
    <input type="text" class="fillingText" id="formGroupExampleInput" placeholder="Enter your reference number"
      onChange={(e)=>{
        setreferenceNo(e.target.value);
        }}/>
  </div>

  <div className='formTextMargin'>
    <label className='formText'>Reason for cancelation+
    </label>
    <br/>
    {/* <div className='formFillmargin'> */}
    <textarea class="descriptionbox" rows="3"
     onChange={(e)=>{
      setcancelReason(e.target.value);
      }}></textarea>
    {/* </div> */}
  </div>


  <div style={{ textAlign: "center" }}>
      <button className='btnsubmit' type='submit'>Delete</button>
      </div>
</form>
    </div>

        {/* <div style={{ textAlign: "center" }}>
      <button className='btnsubmit' type='submit'>Ask to delete</button>
      </div> */}

      <div className = "cancelPara02">
      <span>After press “Ask to delete” button we will inform as soon as possible to your email, whether your request is approve or not.</span>
      </div>

    <Footer/>

    </div>
  )
}