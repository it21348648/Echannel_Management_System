import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Loginpage from './scenes/Loginpage'
import Homepage from './scenes/Homepage'
import AmbulanceDashboard from './scenes/AmbulanceDashboard'
import EmployeeManagerDashboard from './scenes/EmployeeManagerDashboard'
import InventoryDashboard from './scenes/InventoryDashboard'
import LaboratoryDashboard from './scenes/LaboratoryDashboard'
import PharmacyDashboard from './scenes/PharmacyDashboard'
import ProfilePage from './scenes/ProfilePage'
import WardManagerDashboard from './scenes/WardManagerDashboard'
import ServicesPage from './scenes/ServicesPage'
import VideoRequestForm from './scenes/VideoRequestForm'
import RoomPage from './scenes/VideoRoom'
import VideoUI from './scenes/VideoConference'
import EchannelHomePage from './scenes/EchannelDashboard/EchannelHomePage'
import AppointmentList from './scenes/EchannelDashboard/AppointmentList'/*r*/
import PatientList from './scenes/EchannelDashboard/PatientList'/*r*/
import UpdateDateTime from './scenes/EchannelDashboard/UpdateDate_time'/*admin page showwww*/
import MakeAppointment from './scenes/EchannelDashboard/MakeAppointment'
import AdminRequiestDelete from './scenes/EchannelDashboard/AdminRequiestDelete'/*r*/
import AdminViewAppointment from './scenes/EchannelDashboard/AdminViewAppointment'/*r*/
import AdminAppointmentDatelist from './scenes/EchannelDashboard/AdminAppointmentDatelist'/*r special*/
import UpdateAppointment from './scenes/EchannelDashboard/UpdateAppointment'/*r*/
import CancelAppointment from './scenes/EchannelDashboard/DeleteAppointment'/*r*/
import ViewUpdateDelete from './scenes/EchannelDashboard/ViewUpdateDelete'
// import AdminTable from './scenes/EchannelDashboard/AdminTable'


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/login' element={ <Loginpage /> } />
                    <Route path='/AmbulanceDashboard' element={<AmbulanceDashboard />} />
                    <Route path='/EmployeeManagerDashboard' element={<EmployeeManagerDashboard />} />
                    <Route path='/EchannelDashboard' element={<EchannelHomePage/>}/>
                    <Route path='/EchannelDashboard/MakeAppointment' element={<MakeAppointment/>}/>
                    <Route path='/EchannelDashboard/AppointmentList' element={<AppointmentList/>}/>
                    <Route path='/EchannelDashboard/PatientList' element={<PatientList/>}/>
                    <Route path='/EchannelDashboard/UpdateDateTime' element={<UpdateDateTime/>}/>
                    <Route path='/EchannelDashboard/AdminRequiestDelete' element={<AdminRequiestDelete/>}/>
                    <Route path='/EchannelDashboard/AdminViewAppointment' element={<AdminViewAppointment/>}/>
                    <Route path='/EchannelDashboard/AdminAppointmentDatelist' element={<AdminAppointmentDatelist/>}/>
                    <Route path='/EchannelDashboard/UpdateAppointment' element={<UpdateAppointment/>}/>
                    <Route path='/EchannelDashboard/CancelAppointment' element={<CancelAppointment/>}/>
                    <Route path='/EchannelDashboard/ViewUpdateDelete' element={<ViewUpdateDelete/>}/>
                    {/* <Route path='/EchannelDashboard/AdminTable' element={<AdminTable/>}/> */}
                    <Route path='/InventoryDashboard' element={<InventoryDashboard />} />
                    <Route path='/LaboratoryDashboard' element={<LaboratoryDashboard/>} />
                    <Route path='/PharmacyDashboard' element={<PharmacyDashboard />} />
                    <Route path='/ProfilePage' element={<ProfilePage />} />
                    <Route path='/WardManagerDashboard' element={<WardManagerDashboard />} />
                    <Route path='/ServicesPage' element={<ServicesPage/>}/>
                    <Route path='/VideoRequestForm' element={<VideoRequestForm/>}/>
                    <Route path='/VideoUI' element={<VideoUI/>}/>
                    <Route path='/room/:roomID' element={<RoomPage/>}/>
                </Routes>
            </BrowserRouter>            
        </div>
    );
}

export default App;

//Tharaka source code
// import Navbar from "./components/navbar";
// import Home  from "./components/home";
// import Footer from "./components/footer";
// import Loginpage from "./scenes/Loginpage";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routers>
//       <Navbar/>
//       <Home/>
//       <Footer/>
//       </Routers>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
