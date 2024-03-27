import React from 'react'
import './PatientList.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import imgPatientList from './Images/online-consultation.gif'

export default function PatientList() {
  return (
    <div>

        <Navbar/>
        <hr style={{height:'130px'}}></hr>

        {/* <img src={imgPatientList} class="img-fluid" alt="Responsive image"className='imgsize'></img> */}

        <div className="container-fluid">
        <div className="row">
        <div className="col">
            <h1  style={{marginLeft:'40px'}}>View your appointment list</h1>
        </div>
        
        
        <div className="col ravidu">
            <div className='imgsize'>
            <img src={imgPatientList} className="img-fluid" alt="Responsive image" />
            </div>
        </div>
        

        </div>
        </div>

        {/* name cards */}
        <h1 className='patientListMargin'>Patient list</h1>

      <div className='NameList'>
      <div class="list-group">
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
</div>
</div>

<div style={{ textAlign: "center" }}>
      <button className='btnsubmit01' type='submit'>Download current appointment list</button>
    </div>

<Footer/>
    </div>
  )
}
