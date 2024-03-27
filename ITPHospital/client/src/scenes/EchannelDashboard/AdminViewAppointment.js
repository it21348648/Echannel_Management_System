import React, { useEffect, useState } from 'react'
import './AdminViewAppointment.css'
import SideNavbar from '../../components/sideBar'
import Footer from '../../components/footer'
import imgPatientList from './Images/online-consultation.gif'

export default function AdminViewAppointment() {
  const [patientList, setPatientList] = useState([])

  const loadData = async()=> {
    const req = await fetch("http://localhost:3001/Echannel/getAll", {
      method : "GET"
    })
    const res = req.json()
    return res
  }

  useEffect(()=> {
    loadData().then((res) => {setPatientList(res.result);})
  }, [])

  return (
    <div>

        <SideNavbar/>
        <hr style={{height:'130px'}}></hr>

        {/* <img src={imgPatientList} class="img-fluid" alt="Responsive image"className='imgsize'></img> */}

        <div className="container-fluid">
        <div className="row">
        <div className="col">
            <h1  style={{marginLeft:'40px'}}>Appointment list</h1>
            <br></br>
            <p className='paragraph'>Managing appointments can be a stressful and time-consuming task, especially when it comes to healthcare. Our hospital management system offers an efficient solution to this problem by providing a user-friendly interface for patients to view and manage their appointments easily. Whether you need to schedule a new appointment or reschedule an existing one, our system simplifies the process, allowing you to manage your healthcare with ease.<br/><br/>

            With our automated reminders, you will never miss an important check-up again. Our system sends out reminders before each scheduled appointment, ensuring that you are prepared and on time. By taking advantage of our appointment management system, you can take control of your health and enjoy peace of mind knowing that you have easy access to all of your upcoming appointments. Experience the convenience of our system and focus on what matters most - your health.</p>
        </div>
        
        
        <div className="col ravidu">
            <div className='imgsize'>
            <img src={imgPatientList} className="img-fluid" alt="Responsive image" />
            </div>
        </div>
        

        </div>
        </div>


        <div className="container-fluid">
        {/* name cards */}
        <h1 className='patientListMargin'>Patient list</h1>

      <div className='NameList'>
      <div class="list-group">
        {
          patientList.map((obj, index) => {
            return(
            <a href="#" class="list-group-item list-group-item-action" aria-current="true" key={index}>
              <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">{obj.DoctorName}</h4>
                <small>{obj.AppointmentType}</small>
              </div>
              <p class="mb-1">{obj.Reason}</p>
              <small>Click to view patient profile...</small>
            </a>
            )
            
          })
        }


</div>
  {/* <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Mr Nagoda Withana</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <small class="text-muted">Click to view patient profile...</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Miss Nayomi Gamage</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <small class="text-muted">Click to view patient profile...</small>
  </a>

  <a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Mr Kasun Gimhan</h4>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <small>Click to view patient profile...</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Mr Nagoda Withana</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <small class="text-muted">Click to view patient profile...</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Miss Nayomi Gamage</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <small class="text-muted">Click to view patient profile...</small>
  </a>

  <a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Mr Kasun Gimhan</h4>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <small>Click to view patient profile...</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Mr Nagoda Withana</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <small class="text-muted">Click to view patient profile...</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Miss Nayomi Gamage</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <small class="text-muted">Click to view patient profile...</small>
  </a> */}
</div>
</div>

<div style={{ textAlign: "center" }}>
      <button className='btnsubmit01' type='submit'>Download current appointment list</button>
    </div>

<Footer/>
    </div>
  )
}
