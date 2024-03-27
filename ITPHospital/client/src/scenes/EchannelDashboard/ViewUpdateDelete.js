import React,{useState,useEffect} from 'react'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import axios from 'axios'
import jsPDF from "jspdf";
import "jspdf-autotable";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


export default function ViewUpdateDelete() {

  const [patientList, setPatientList] = useState([])
  const [updatePatientDetails, setUpdatePatientDetails] = useState(false)
  const [updatebleObj, setUpdatebleObj] = useState({})
  const [searchInput, setSearchInput] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);

  const [PatientName,setPatientName] = useState("")
  const [PatientPhoneNumber,setPatientPhoneNumber] = useState("")
  const [DoctorName,setDoctorName] = useState("")
  const [AppointmentType,setAppointmentType] = useState("")
  const [Date_Time,setDate_Time] = useState("")
  const [Reason,setReason] = useState("")

  //view
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


  //Delete
  const DeleteAppointment = async (ChannelID) => {
  
    if (window.confirm('Are you sure you want to delete this data?')) {
      try {
        const res = await axios.delete(`http://localhost:3001/Echannel/delete/${ChannelID}` );
          // ChannelID: ChannelID
          
        // });
        console.log(res.data); // log the response data for debugging purposes
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
      window.location.reload(false);
    } else {
      // handle cancel button clicked
    }
  };


    //Update

  const UpdateAppointment = async () => {
   
      console.log(updatebleObj._id);
      const req = await fetch(`http://localhost:3001/Echannel/update/${updatebleObj._id}`,{
        method:"PUT",
        headers:{"content-type": "application/json"},
        body:JSON.stringify({ 
          PatientName : PatientName,
          PatientPhoneNumber : PatientPhoneNumber,
          DoctorName : DoctorName,
          AppointmentType : AppointmentType,
          Date_Time : Date_Time,
          Reason : Reason
        })
    })
    const res= req.json()
    alert("updated")
  };

  const headings = [
    
    'PatientName',
    'PatientPhoneNumber',
    'DoctorName',
    'AppointmentType',
    'Date_Time',
    'Reason',
    
  ];

  const reportData = patientList.map((item) => ({
    PatientName: item.PatientName,
    PatientPhoneNumber: item.PatientPhoneNumber,
    DoctorName: item.DoctorName,
    AppointmentType: item.AppointmentType,
    Date_Time: item.Date_Time,
    Reason: item.Reason,
    _v: item._v,
    _id: item._id,
  }));

  //report
  const PDFReport = ({ headings, patientList }) => (
    <Document>
      <Page size="A4" style={{backgroundColor: '#ffffff',padding: '40px'}}>
        <View style={{fontSize: '14px',fontWeight: 'bold',width: '20%',textAlign: 'left',borderRightWidth: '1px',borderRightColor: '#cccccc',paddingRight: '5px'}}>
          {headings.map((heading) => (
            <Text key={heading} style={{ flexDirection: 'row',marginBottom: '5px'}}>
              {heading}
            </Text>
          ))}
        </View>
        {patientList.map((item) => (
          <View key={item._id} style={{flexDirection: 'row',borderBottomWidth: '1px',borderBottomColor: '#cccccc',marginBottom: '10px'}}>
            {headings.map((heading) => (
              <Text key={`${item._id}${heading}`} style={{ fontSize: '12px',width: '20%',textAlign: 'left',borderRightWidth: '1px',borderRightColor: '#cccccc',paddingRight: '5px'}}>
                {item[heading]}
              </Text>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );

  const report = <PDFReport headings={headings} patientList={reportData} />;
  //Saearch
  const handleChange = (e) => {
    e.preventDefault();
    const input = e.target.value;
    setSearchInput(input);
    setFilteredPatients(
      patientList.filter((obj) => {
        // Modify the condition to search all categories
        return Object.values(obj).some((value) =>
          String(value).toLowerCase().includes(input.toLowerCase())
        );
      })
    );
  };

      
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const input = e.target.value;
  //   setSearchInput(input);
  //   setFilteredPatients(
  //     patientList.filter((obj) => 
  //       obj.DoctorName.match(input)
  //       // Modify the condition to search all categories
        
          
  //       )
  //   );
  // };

  
  const displayedpations = searchInput.length > 0 ? filteredPatients : patientList;



  return (
    <>

    {
      updatePatientDetails &&

      <div>
        <div className='form-group'>
    <form>

    
      <div  className='formTextMargin'>
    <label className='formText' htmlFor="formGroupExampleInput2">Patient Name</label>
    </div>
    <br/>
    
    <input type="text" class="fillingText" id="formGroupExampleInput2" placeholder="Enter name" value={PatientName} data-ms-editor="true" autoComplete="off"
    onChange={(e)=>{
      setPatientName(e.target.value)
    }}></input>


<div  className='formTextMargin'>
    <label className='formText' htmlFor="formGroupExampleInput2">Patient phone number</label>
    </div>
    <br/>

    <input type="text" class="fillingText" id="formGroupExampleInput2" placeholder="Phone number" value={PatientPhoneNumber}
    onChange={(e)=>{setPatientPhoneNumber(e.target.value)}}></input>


<div>
    <div  className='formTextMargin'>
    <label className='formText' htmlFor="formGroupExampleInput2">Doctor Name</label>
    </div>
    <br/>
    {/* <div className='formFillmargin'> */}

    <select className='fillingText' id="formGroupExampleInput2" value={DoctorName} onChange ={(e)=>{setDoctorName(e.target.value)}}>
      {/* <option><div> <input type="text" /> </div> </option>   */}
      <option value="dr aditya" >Dr. Senarathna</option>
      <option value="dr aditya" >Dr. muhandan</option>
      <option value="dr aditya" >Dr. Harischandra</option>
      <option value="dr aditya" >Dr. Hewage</option>
      <option value="dr aditya" >Dr. Sanath</option>
    </select>
    </div>


    <div className='formTextMargin'>
  <label className='formText' htmlFor="inlineRadio1">Appointment type</label>
  </div>

  <div className='radiobtn'>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={AppointmentType}
  onChange={(e)=>{setAppointmentType(e.target.value)}} required/>

  <label class="radiotextColor" for="inlineRadio1">Physical</label>
</div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={AppointmentType}
      onChange={(e)=>{setAppointmentType(e.target.value)}}required/>

      <label class="radiotextColor" for="inlineRadio2">Virtual</label>
    </div>
  </div>


  <div>
    <div className='formTextMargin'>
    <label className='formText' htmlFor="formGroupExampleInput2">Date & Time</label>
    </div>
    <br/>
    <select className='fillingText' id="formGroupExampleInput2" value={Date_Time} onChange={(e)=>{setDate_Time(e.target.value)}} required>
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
    <label className='formText' htmlFor="formGroupExampleInput2">Reason for consultation</label>
    <br/>
    {/* <div className='formFillmargin'> */}
    <textarea class="descriptionbox" rows="3" id="formGroupExampleInput2" value={Reason} onChange={(e)=>{setReason(e.target.value)}} required></textarea>
    {/* </div> */}
  </div>


  <div style={{ textAlign: "center" }}>
      <button className='btnsubmit' type='submit' onClick={() => {UpdateAppointment()}}>Save Changes</button>
      </div>

      <div style={{ textAlign: "center" }}>
      <button className='btnsubmit' onClick={() => {setUpdatePatientDetails(false)}}>Back</button>
      </div>
      </form>
      </div>

    </div>

    }

    {
      !updatePatientDetails &&

    


    <div>

  <Navbar/>
  <hr style={{height:'130px'}}></hr>

  <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={searchInput} style={{width:'500px', marginLeft:'100px'}} />

<PDFDownloadLink document={report} fileName="E_Channel_Patient_List.pdf">
    <button style={{background:'#3fbbc0', color:'black', marginLeft:'300px'}}> Report  {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download List!'
      }</button>
    </PDFDownloadLink>
    <br/><br/>

      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Patient phone<br/> number</th>
      <th scope="col">Doctor name</th>
      <th scope="col">Type</th>
      <th scope="col">Date & Time</th>
      <th scope="col">Reason</th>
      <th scope="col">Update & Delete</th>
    </tr>
  </thead>
  <tbody>
    
  {displayedpations.map((obj, index) => {
    return(
    <tr key={index}>
     
      <th scope="row">{ index + 1 }</th>
      <td>{obj.PatientName}</td>
      <td>{obj.PatientPhoneNumber}</td>
      <td>{obj.DoctorName}</td>
      <td>{obj.AppointmentType}</td>
      <td>{obj.Date_Time}</td>
      <td>{obj.Reason}</td>
      <td>
        <button type='submit' variant = 'warning' onClick={() => DeleteAppointment(obj._id)}>Delete</button>
        <button type='submit' onClick={() => {setUpdatebleObj(obj); setPatientName(obj.PatientName);setPatientPhoneNumber(obj.PatientPhoneNumber);setDoctorName(obj.DoctorName);setAppointmentType(obj.AppointmentType);setDate_Time(obj.Date_Time);setReason(obj.Reason);setUpdatePatientDetails(true)}}>update</button>
      </td>

    </tr>)
})}
    
  </tbody>
</table>

<button type="button" class="btn btn-outline-info" style={{marginLeft:"1200px"}} onClick= {()=>window.location.href="/EchannelDashboard/UpdateDateTime"}>Add Appointment time</button>

{/* <PDFDownloadLink document={report} fileName="E_Channel_Patient_List.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download List!'
      }
    </PDFDownloadLink> */}

<Footer/>
    </div>
}
    </>
  )
  
}

