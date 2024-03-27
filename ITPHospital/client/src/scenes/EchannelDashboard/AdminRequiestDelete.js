import React from 'react'
import Footer from '../../components/footer'
import './AdminRequiestDelete.css'

export default function AdminRequiestDelete() {

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })

  return (

    <div>

        <div className='margin'>
            <h2>Appointment delete requiests</h2>
            <br/>
            <p className='paraFontSize'>Our eChannel system has you covered. With our user-friendly admin page, you can easily manage cancellation requests and ensure a fair policy is enforced. Patients can request cancellations up to 2 days before their scheduled appointment, giving you ample time to adjust your schedule accordingly. Our system provides a hassle-free approach to appointment cancellations, allowing for efficient and seamless operations. Join the growing number of healthcare providers who have made the switch to our eChannel system and experience the benefits for yourself.</p>
            <br/>
        </div>

<div className='NameList'>
      <div class="list-group">
  {/* <a href="#" class="list-group-item list-group-item-action" aria-current="true"> */}
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Mr Kasun Gimhan</h4>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <a href="#" class="btn btn-primary" style={{marginLeft:'200px'}}>View profile</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
            Delete Appointment
        </button>
        {/* <a href="#" class="btn btn-primary" style={{marginLeft:'20px'}}>Cancel requiest</a> */}
        </div>
  {/* <a href="#" class="list-group-item list-group-item-action"> */}
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Mr Nagoda Withana</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <a href="#" class="btn btn-primary" style={{marginLeft:'200px'}}>View profile</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
        Delete Appointment
        </button>
        {/* <a href="#" class="btn btn-primary" style={{marginLeft:'20px'}}>Cancel requiest</a> */}

        </div>
  {/* </a> */}
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Miss Nayomi Gamage</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <a href="#" class="btn btn-primary" style={{marginLeft:'200px'}}>View profile</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
        Accept delete requiest
        </button>
        <a href="#" class="btn btn-primary" style={{marginLeft:'20px'}}>Cancel requiest</a>
        </div>

  {/* <a href="#" class="list-group-item list-group-item-action" aria-current="true"> */}
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Mr Kasun Gimhan</h4>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <a href="#" class="btn btn-primary" style={{marginLeft:'200px'}}>View profile</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
        Accept delete requiest
        </button>
        <a href="#" class="btn btn-primary" style={{marginLeft:'20px'}}>Cancel requiest</a>
        </div>
  {/* </a> */}
  {/* <a href="#" class="list-group-item list-group-item-action"> */}
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Mr Nagoda Withana</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <a href="#" class="btn btn-primary" style={{marginLeft:'200px'}}>View profile</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
        Accept delete requiest
        </button>
        <a href="#" class="btn btn-primary" style={{marginLeft:'20px'}}>Cancel requiest</a>
        </div>
  {/* </a> */}
  {/* <a href="#" class="list-group-item list-group-item-action"> */}
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Miss Nayomi Gamage</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <a href="#" class="btn btn-primary" style={{marginLeft:'200px'}}>View profile</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
        Accept delete requiest
        </button>
        <a href="#" class="btn btn-primary" style={{marginLeft:'20px'}}>Cancel requiest</a>
        </div>
  {/* </a> */}

  {/* <a href="#" class="list-group-item list-group-item-action" aria-current="true"> */}
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Mr Kasun Gimhan</h4>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <a href="#" class="btn btn-primary" style={{marginLeft:'200px'}}>View profile</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
        Accept delete requiest
        </button>
        <a href="#" class="btn btn-primary" style={{marginLeft:'20px'}}>Cancel requiest</a>
        </div>
  {/* </a> */}
  {/* <a href="#" class="list-group-item list-group-item-action"> */}
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Mr Nagoda Withana</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <a href="#" class="btn btn-primary" style={{marginLeft:'200px'}}>View profile</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
        Accept delete requiest
        </button>
        <a href="#" class="btn btn-primary" style={{marginLeft:'20px'}}>Cancel requiest</a>
        </div>
  {/* </a> */}
  {/* <a href="#" class="list-group-item list-group-item-action"> */}
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h4 class="mb-1">Miss Nayomi Gamage</h4>
      <small class="text-muted">3 days ago</small>
    </div>
    <p class="mb-1">Patient Description.</p>
    <a href="#" class="btn btn-primary" style={{marginLeft:'200px'}}>View profile</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
        Accept delete requiest
        </button>
        <a href="#" class="btn btn-primary" style={{marginLeft:'20px'}}>Cancel requiest</a>
        </div>
  {/* </a> */}
</div>
</div>


      <Footer/>
    </div>
  )
}
