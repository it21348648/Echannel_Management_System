import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import './UpdateAppointment.css'
import Img04 from './Images/If-You-Cant-Get-a-Doctors-Appointment.jpg'

export default function updateAppointment() {

  // const updatefunction = async(e) => {
  //   e.preventDefault()
  //   const req = await fetch(`http://localhost:3001/Echannel/update/${updatableObj._id}`, {
  //       method : "PUT",
  //       headers : {"content-type" : "application/json"},
  //       body : JSON.stringify({newSheduleTime : SheduleTime})
  //   })
  //   const res = req.json()
  //   alert("Date Time Updated!!!")
  // }
  return (
    <div>

      <Navbar></Navbar>
      <img className='echannelimg01' src={Img04} alt='Update appointment imagge'/>

      <h1 className="channeltopic01">Update Your Appointment</h1>

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

      </form> */}

  <div className='form-group'>
    <form>
      <div>
        <div  className='formTextMargin'>
          <label className='c'>Doctor Name</label>
        </div>
        <br/>
          {/* <div className='formFillmargin'> */}
          <select className='fillingText'>
            <option>Select</option>  
            <option>Dr. Senarathna</option>
            <option>Dr. muhandan</option>
            <option>Dr. Harischandra</option>
            <option>Dr. Hewage</option>
            <option>Dr. Sanath</option>
          </select>
          {/* </div> */}
      </div>
      <div className='formTextMargin'>
        <label className='formText'>Appointment type</label>
      </div>

        <div className='radiobtn'>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="radiotextColor" for="inlineRadio1">Physical</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="radiotextColor" for="inlineRadio2">Virtual</label>
          </div>
        </div>

        <div>
          <div className='formTextMargin'>
            <label className='formText'>Date & Time</label>
          </div>
          <br/>
            <select className='fillingText'>
              <option>Select time slot</option>
              <option>3rd Monday May 5.00 p.m-6.00 p.m</option>
              <option>3rd Monday May 6.00 p.m-7.00 p.m</option>
              <option>4rd Monday May 5.00 p.m-6.00 p.m</option>
              <option>4rd Monday May 6.00 p.m-7.00 p.m</option>
              <option>5rd Monday May 5.00 p.m-6.00 p.m</option>
              <option>5rd Monday May 6.00 p.m-7.00 p.m</option>
            </select>
        </div>
        <div class="form-group">
          <div className='formTextArea'>
            <label for="exampleFormControlTextarea1" style={{fontsize:'large'}}>Reason for consultation</label>
            </div>
          <div className='fillingText01'>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{backgroundColor:'#b8f0f1'}}></textarea>
          </div>
        </div>
    </form>
  </div>


      <div style={{ textAlign: "center" }}>
      <button className='btnsubmit' type='submit'>Save Changes</button>
      </div>

      <Footer/>
    </div>
  )
}
