import React from 'react'
import Navbar from '../../components/navbar'
import './AdminAppointmentDatelist.css'
import AppointmentList01 from './Images/appointment_list_gif.gif'
import AppointmentList02 from './Images/male-doctor-holding-appointment-list-2914530-2425213.png'
import Footer from '../../components/footer'

export default function AdminAppointmentDatelist() {
  return (
    <div>

        <Navbar/>
        <hr style={{height:'130px'}}></hr>
      {/* <!-- ======= Hero Section ======= -->
  <section id="hero" className="d-flex flex-column align-items-center justify-content-center">
    <h1>Hi, I'm Alice!</h1>
    <h2>I am a graphic designer</h2>
    <a href="#about" className="btn-get-started scrollto"><i className="bi bi-chevron-double-down"></i></a>
   </section>End Hero */}

  {/* page column */}

  <div className="container">
  <div className="row">
  <div className="col">
    <h1>View your appointment list</h1>
    <p>An e-channel management system is a digital solution used in healthcare settings to manage patient appointments and streamline the process of scheduling, tracking, and organizing patient visits. These systems are typically used in hospitals, clinics, and other healthcare facilities.</p>
  </div>
    <div className="col">
        
        <img src={AppointmentList01} className="img-fluid" alt="Responsive image"/>
    </div>

  </div>
</div>

<div className='margindateist'>
<select className='fillingText'>
        <option>Select</option>  
      <option>Dr. Senarathna</option>
      <option>Dr. muhandan</option>
      <option>Dr. Harischandra</option>
      <option>Dr. Hewage</option>
      <option>Dr. Sanath</option>
    </select>
    </div>
    {/* </div> */}

{/* date time cards */}
<div className='cardAlign'>
<div className="card-deck">
  <div className="card">
    <img className="card-img-top" style={{height:'60%',width:'80%'}} src={AppointmentList02} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Patient List</h5>
      <p className="card-text">3rd Monday May 5.00 p.m-6.00 p.m</p>
      <a href="#" class="btn btn-primary" style={{backgroundColor:'#389a9d'}}>View list</a>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" style={{height:'60%',width:'80%'}} src={AppointmentList02} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Patient List</h5>
      <p className="card-text">3rd Monday May 6.00 p.m-7.00 p.m</p>
      <a href="#" class="btn btn-primary" style={{backgroundColor:'#389a9d'}}>View list</a>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" style={{height:'60%',width:'80%'}} src={AppointmentList02} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Patient List</h5>
      <p className="card-text">4rd Monday May 5.00 p.m-6.00 p.m</p>
      <a href="#" class="btn btn-primary" style={{backgroundColor:'#389a9d'}}>View list</a>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

<div className="card-deck">
  <div className="card">
  <img className="card-img-top" style={{height:'60%',width:'80%'}} src={AppointmentList02} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Patient List</h5>
      <p className="card-text">4rd Monday May 6.00 p.m-7.00 p.m</p>
      <a href="#" class="btn btn-primary" style={{backgroundColor:'#389a9d'}}>View list</a>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
  <img className="card-img-top" style={{height:'60%',width:'80%'}} src={AppointmentList02} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Patient List</h5>
      <p className="card-text">5rd Monday May 5.00 p.m-6.00 p.m</p>
      <a href="#" class="btn btn-primary" style={{backgroundColor:'#389a9d'}}>View list</a>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
  <img className="card-img-top" style={{height:'60%',width:'80%'}} src={AppointmentList02} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Patient List</h5>
      <p className="card-text">5rd Monday May 6.00 p.m-7.00 p.m</p>
      <a href="#" class="btn btn-primary" style={{backgroundColor:'#389a9d'}}>View list</a>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

<div className="card-deck">
  <div className="card">
  <img className="card-img-top" style={{height:'60%',width:'80%'}} src={AppointmentList02} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Patient List</h5>
      <p className="card-text">6th Thursday May 6.00 p.m-7.00 p.m</p>
      <a href="#" class="btn btn-primary" style={{backgroundColor:'#389a9d'}}>View list</a>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
  <img className="card-img-top" style={{height:'60%',width:'80%'}} src={AppointmentList02} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Patient List</h5>
      <p className="card-text">6th Thursday May 5.00 p.m-6.00 p.m</p>
      <a href="#" class="btn btn-primary" style={{backgroundColor:'#389a9d'}}>View list</a>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
  <img className="card-img-top" style={{height:'60%',width:'80%'}} src={AppointmentList02} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Patient List</h5>
      <p className="card-text">7th Friday May 6.00 p.m-7.00 p.m</p>
      <a href="#" class="btn btn-primary" style={{backgroundColor:'#389a9d'}}>View list</a>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

</div>

<Footer/>
    </div>
  )
}
