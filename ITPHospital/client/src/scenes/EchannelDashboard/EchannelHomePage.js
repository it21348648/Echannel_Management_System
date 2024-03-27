import React from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
// import '../Styles.css'
import './EchannelHomePage.css'
import Img01 from './Images/home1.jpg'
import Img11 from './Images/echannelPage02.jpg'
import Img12 from './Images/echannelPage01.jpg'
import Img13 from './Images/Echannel_main_page.jpg'
// import { useNavigate } from 'react-router-dom'


export default function echannelPage() {
  return (
    <div>

      <Navbar/>
      <hr style={{height:'130px'}}></hr>

<div id="myCarousel" className="carousel slide" data-ride="carousel">
        
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

        <div class="carousel-inner">
          <div class="item active">
            <div className='imgslide'>
            <img src={Img01} alt="Slide 1" />
            </div>
          </div>
          <div class="item">
          <div className='imgslide'>
            <img src={Img11} alt="Slide 2" />
            </div>
          </div>
          <div class="item">
          <div className='imgslide'>
            <img src={Img12} alt="Slide 3" />
            </div>
          </div>
          <div class="item">
          <div className='imgslide'>
            <img src={Img13} alt="Slide 4" />
            </div>
          </div>
        </div>
    
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
  </div>

      {/* <img className='echannelimg01' src = {Img01} alt = "Echannel image"/> */}

      {/* <div id="carouselExampleControls" class="slideshow" data-ride="carousel">
      <div class="slideshow__wrapper">
      
      <img class="slideshow__wrapper" src={Img01} alt="First slide"/>
      
      <div class="carousel-item">
      <img class="d-block w-100" src={Img11} alt="Second slide"/>
      </div>
      <div class="carousel-item">
      <img class="d-block w-100" src={Img12} alt="Third slide"/>
      </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}
      
      <h1 className="channeltopic01">Channel Your Doctor</h1>

      <div className = "channelparg">
      <span>Welcome to our online healthcare platform, where you can easily connect with trusted doctors and schedule appointments for physical or virtual consultations. You can book your appointments by one click. you can browse through a wide range of healthcare professionals and select the one that best suits your needs. We offer the flexibility to choose between in-person visits or video consultations.</span>
      </div>
      
      <h3 className='channeltopic02'>Press the bellow button to make an appointment</h3>
      <button className='GoBookingPage' onClick= {()=>window.location.href="/EchannelDashboard/MakeAppointment"}>Make an appointment</button>
      <br/>

      {/* <h3 className='appointmentMain'>Press the bellow button to update your appointment.......<span className='text02'>Only you can update your appointment before one week your appointment date.</span></h3>
      <button className='GoBookingPage' onClick= {()=>window.location.href="/EchannelDashboard/UpdateAppointment"}>Update an appointment</button>
      <br/>

      <h3 className='appointmentMain'>Press the bellow button to delete your appointment.......<span className='text02'>Only you can delete your appointment before one week our appointment date.</span></h3>
      <button className='GoBookingPage' onClick= {()=>window.location.href="/EchannelDashboard/CancelAppointment"}>Delete an appointment</button>
      <br/> */}

      <div className='common'></div>

      <Footer/>
    </div>
  )
}