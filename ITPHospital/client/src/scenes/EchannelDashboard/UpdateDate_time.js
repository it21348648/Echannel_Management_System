import React from 'react'
// import './PatientList.css'
import './UpdateDate_Time.css'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import imgPatientList from './Images/online-consultation.gif'
import { useState, useEffect } from 'react'
import axios from 'axios';
import moment from 'moment'//new

export default function PatientList() {



    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
      })


      //update

      // const updatefunction = async(e) => {
      //   e.preventDefault()
      //   const req = await fetch(`http://localhost:3001/AppointmentTime/update/${updatableObj._id}`, {
      //       method : "PUT",
      //       headers : {"content-type" : "application/json"},
      //       body : JSON.stringify({newSheduleTime : SheduleTime})
      //   })
      //   const res = req.json()
      //   alert("Date Time Updated!!!")
      // }

      /*view crud */

      const [shedule, setschedule] = useState([])

  const loadData = async()=> {
    const req = await fetch("http://localhost:3001/AppointmentTime/getAll", {
      method : "GET"
    })
    const res = req.json()

    return res
  }

  // delete 
  const deleteDate = async(id) => {
    const req = await fetch(`http://localhost:3001/AppointmentTime/delete/${id}`, {
      method : "DELETE"
    })

    var res = req.json();

    return res
  }

  useEffect(()=> {
    loadData().then((res) => {setschedule(res.result);})
  }, [])


    /*insert crud */

      const [sheduleTime, setsheduleTime] = useState("")
      const currentDate = new Date().toISOString().split('T')[0]; // Get current date in yyyy-mm-dd format
      const currentTime = new Date().toISOString().split('T')[1].substring(0, 5);

  const sendData = async(e) => {
    e.preventDefault();
    const addDate ={
      SheduleTime : sheduleTime
    }

    // console.log(removeappointment)

    await axios.post("http://localhost:3001/AppointmentTime/insert",addDate).then(()=>{
      alert("Appointment cancel Successfully")

    }).catch((err)=>{
      alert("error adding")
    })
  }

  //calander



  //end caander

  return (
    <div>

        <Navbar/>
        <hr style={{height:'130px'}}></hr>

        {/* <img src={imgPatientList} class="img-fluid" alt="Responsive image"className='imgsize'></img> */}

        <div className="container-fluid">
        <div className="row">
        <div className="col">
            <h1  style={{marginLeft:'40px'}}>Manage your sheduled times</h1>
            <p className='par'>Our system also enables you to customize your scheduling preferences to fit your unique needs. You can set specific appointment durations, block off time for breaks, and set your availability for specific days or times. This level of flexibility ensures that you can provide the best possible care to your patients without sacrificing your own well-being.<br/><br/>

In addition to simplifying appointment management, our system provides real-time updates and notifications to keep you informed about any changes to your schedule. This means you can spend less time managing your appointments and more time doing what you do best - providing quality care to your patients.</p>
        </div>
        
        <div className="col">
            <div className='imgsize'>
            <img src={imgPatientList} className="img-fluid" alt="Responsive image" />
            </div>
        </div>
        

        </div>
        </div>

        {/*\\\\\\\\\\\\\\\\*/}

        

        {/* name cards */}
        <h3 className='patientListMargin'>Shedule new appointment time</h3>

        <div class="row" style={{marginLeft:'40px', marginRight:'40px'}}>

        <div class="col-sm-6">
    <div class="card">
      <div class="card-body">

      
        <form onSubmit={sendData}>
      <input className='fillingText'  type="datetime-local"
            min={`${currentDate}T${currentTime}`} onChange={(e)=>{setsheduleTime(e.target.value)}} required></input>
        <h5 class="card-title">Add date and time</h5>
        <p class="card-text">Add next available date add time for new appointments.</p>
        {/* <a href="#" class="btn btn-primary">Add Time-slot</a> */}
        <button class="btn btn-primary" type='submit'>Add Time-slot</button>
        </form>
      </div>
    </div>
  </div>

  <div class="col-sm-6">
    
  <div class="card" style={{backgroundColor:'white'}}>
      
        <h5 class="card-title">Add date and time</h5>
        <p class="card-text">Add next available date add time for new appointments.</p>
        
        </div>
    
  </div>

    <h3>Shduled times</h3>




        {/* view crud */}

    {
          shedule.map((obj, index) => {
            return(


  <div class="col-sm-6">
    <div class="card">
      <div class="card-body" key={index}>
        <h5 class="card-title">{obj.SheduleTime}</h5>
        {/* <p class="card-text">{obj.AppointmentType}</p> */}
        <a href="#" class="btn btn-primary" style={{fontSize:'small'}}>Update</a>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}} onClick={ () => deleteDate(obj._id) }>
 Delete
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={ () => deleteDate(obj._id) }>Save changes</button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
)
            
})
}






   {/* <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">3rd Monday of May</h5>
        <p class="card-text">6.00 p.m-7.00 p.m</p>
        <a href="#" class="btn btn-primary">Update</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}} >
            Delete
        </button>
      </div>
    </div>
  </div> */}


  {/*<div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">4rd Monday of May</h5>
        <p class="card-text">5.00 p.m-6.00 p.m</p>
        <a href="#" class="btn btn-primary">Update</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
            Delete
        </button>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">4rd Monday of May</h5>
        <p class="card-text">6.00 p.m-7.00 p.m</p>
        <a href="#" class="btn btn-primary">Update</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
            Delete
        </button>

      </div>
    </div>
  </div>

  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">5rd Monday of May</h5>
        <p class="card-text">5.00 p.m-6.00 p.m</p>
        <a href="#" class="btn btn-primary">Update</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
            Delete
        </button>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">5rd Monday of May</h5>
        <p class="card-text">6.00 p.m-7.00 p.m</p>
        <a href="#" class="btn btn-primary">Update</a>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{marginLeft:'20px'}}>
            Delete
        </button>
      </div>
    </div>
  </div> */}

  
  
</div>

<Footer/>
    </div>
  )
}
