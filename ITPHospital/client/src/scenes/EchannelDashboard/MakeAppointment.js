import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import './MakeAppointment.css'
import Img02 from './Images/doctor appoinment.jpg'
import Img03 from './Images/Health-professional-team.gif'
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function BookingPage() {

    const [patientName, setPatientName] = useState("")
    const [patientPhoneNumber, setPatientPhoneNumber] = useState("")
    const [doctorName, setDoctorName] = useState("")
    const [appointmentType, setAppointmentType] = useState("")
    const [date_Time, setDate_Time] = useState("")
    const [reason, setReason] = useState("")
    // const [searchInput, setSearchInput] = useState("");
    // const [filteredChannels, setFilteredChannels] = useState([]);
    //const phoneRegex = /^0\d{2}\d{7}$/;//Phone number

    const sendData = async(e) => {
      e.preventDefault();
      const newEchannel = {
        PatientName : patientName,
        PatientPhoneNumber : patientPhoneNumber,
        DoctorName : doctorName,
        AppointmentType : appointmentType,
        Date_Time : date_Time,
        Reason : reason
      }

      console.log(newEchannel);

      await axios.post("http://localhost:3001/Echannel/insert", newEchannel).then(()=>{
        alert("Channel added successfully")

      }).catch((err)=>{
        alert("error adding")
      })
    }

    //searchbar
    // const handleChange = (e) => {
    //   e.preventDefault();
    //   const input = e.target.value;
    //   setSearchInput(input);
    //   setFilteredchannels(
    //     channels.filter((channel) =>
    //     channel.SheduleTime.match(input)
    //     )
    //   )
    // }

    // const displayedChannels = searchInput.length > 0 ? filteredChannels : channels;

    // const MyComponent = () => {
    //   const [patientPhoneNumber, setPatientPhoneNumber] = useState('');
    
    //   const handlePhoneNumberChange = (e) => {
    //     const phoneNumber = e.target.value;
    //     const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters
    //     if (formattedPhoneNumber.length <= 10) {
    //       setPatientPhoneNumber(formattedPhoneNumber);
    //     }
    //   };

    //phone num validation
//     if (!phoneRegex.test(phone)) {
//       setError('Phone number must be in the format 0xx-xxxxxxx');
//    return;
// }
    
    
  return (
    <div>

      <Navbar/>
      <img className='echannelimg01' src={Img02} alt='Appointment image'/>

      <h1 className="channeltopic01">Give your details to register your appoinment</h1>
    
      <div className='container'>

        <div className='column'>
      {/*<form className ='channeltopic01'>
        
        <div className='aligntext'>
        <span className='formText'>Doctor name</span>
        </div>
        <br/>
        <input className='fillingText' type='search' required></input>
        <br/>
        <div className='aligntext'>
        <span className='formText'>Appoinment type</span>
        </div>
        <br/>

        <input className='ratiobtn' type="radio"/>
        <label className='formText'>Virtual Meeting</label>
        
        <input className='ratiobtn' type="radio"/>
        <label className='formText'>Physical Meeting</label>

        <div className='aligntext02'>
        <span className='formText'>Date & Time</span>
        </div>

        <br/>
        <input className='fillingText' type='datetime-local' required></input>
        <br/>

        <div className='aligntext'>
        <span className='formText'>Reason for consultation</span>
        </div>

        <br/>
        <input className='fillingText' type='textbox' required/>

      </form>*/}


<div className='form-group'>
      <form onSubmit={sendData}>

    
    <div  className='formTextMargin'>
    <label className='formText'>Patient Name</label>
    </div>
    <br/>
    
    <input type="text" class="fillingText" id="formGroupExampleInput2" placeholder="Enter name" onChange={(e)=>{setPatientName(e.target.value)}} required></input>
    
    <div  className='formTextMargin'>
    <label className='formText'>Patient phone number</label>
    </div>
    <br/>

    <input type="text" class="fillingText" id="formGroupExampleInput2" placeholder="Phone number"  onChange={(e)=>{setPatientPhoneNumber(e.target.value)}} required></input>


  <div>
    <div  className='formTextMargin'>
    <label className='formText'>Doctor Name</label>
    </div>
    <br/>
    {/* <div className='formFillmargin'> */}

    <select className='fillingText' onChange={(e)=>{setDoctorName(e.target.value)}} required>
        <option><div> <input type="text" /> </div> </option>  
      <option>Dr. Senarathna</option>
      <option>Dr. muhandan</option>
      <option>Dr. Harischandra</option>
      <option>Dr. Hewage</option>
      <option>Dr. Sanath</option>
    </select> 

    {/* </div>


    {/* <input
      type="text"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput}/> */}


  </div>
  <div className='formTextMargin'>
  <label className='formText'>Appointment type</label>
  </div>

  <div className='radiobtn'>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="physical" onChange={(e)=>{setAppointmentType(e.target.value)}} required/>
  <label class="radiotextColor" for="inlineRadio1">Physical</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="virtual" onChange={(e)=>{setAppointmentType(e.target.value)}}required/>
  <label class="radiotextColor" for="inlineRadio2">Virtual</label>
</div>
</div>

  <div>
    <div className='formTextMargin'>
    <label className='formText'>Date & Time</label>
    </div>
    <br/>
    <select className='fillingText' onChange={(e)=>{setDate_Time(e.target.value)}} required>
      <option>Select time slot</option>
      <option>3rd Monday May 5.00 p.m-6.00 p.m</option>
      <option>3rd Monday May 6.00 p.m-7.00 p.m</option>
      <option>4rd Monday May 5.00 p.m-6.00 p.m</option>
      <option>4rd Monday May 6.00 p.m-7.00 p.m</option>
      <option>5rd Monday May 5.00 p.m-6.00 p.m</option>
      <option>5rd Monday May 6.00 p.m-7.00 p.m</option>
    </select>
  </div>
  <div className='formTextMargin'>
    <label className='formText'>Reason for consultation</label>
    <br/>
    {/* <div className='formFillmargin'> */}
    <textarea class="descriptionbox" rows="3"onChange={(e)=>{setReason(e.target.value)}} required></textarea>
    {/* </div> */}
  </div>

  <div style={{ textAlign: "center" }}>
      <button className='btnsubmit' type='submit'>Reserve Appointment</button>
    </div>
</form>
    </div>

        </div>
        <img src = {Img03}></img>
        <div className='column'>

            
        </div>
        </div>
    {/* <div style={{ textAlign: "center" }}>
      <button className='btnsubmit' type='submit'>Pay & Book</button>
    </div> */}

      <Footer/>
    </div>
  )
}
