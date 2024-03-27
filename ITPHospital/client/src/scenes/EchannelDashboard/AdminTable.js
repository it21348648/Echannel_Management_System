// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import Navbar from '../../components/AmbsideBar'
// import Footer from '../../components/footer'
// // import AmbSideBar from '../../components/AmbsideBar';
// import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


// export default function VehicleList() {
//   const [ambulances, setAmbulances] = useState([]);
//   const [updateAmb, setUpdateAmb] = useState(false)
//   const [updatebleObj, setUpdatebleObj] = useState({})
//   const [searchInput, setSearchInput] = useState("");
//   const [filteredAmbulances, setFilteredAmbulances] = useState([]);
//   const [VehicleIdentificationNumber, setVehicleIdentificationNumber] = useState("")
//   const [VehicleYear, setVehicleYear] = useState("")
//   const [VehicleMake, setVehicleMake] = useState("")
//   const [VehicleModel, setVehicleModel] = useState("")
//   const [Mileage, setMileage] =useState("")
//   const [ChassisNumber, setChassisNumber ]=useState("")
//   const [EngineNumber, setEngineNumber] =useState("")
//   const [OwnerName, setOwnerName] = useState("")
//   const [OwnerIdentificationNumber, setOwnerIdentificationNumber] = useState("")
//   const [ContactNumber, setContactNumber] =useState("")
//   const [City, setCity] = useState("")
  
 
//   //view
//   useEffect(() => {
//     async function getAmbulanceDetails() {
//       try {
//         const res = await axios.get('http://localhost:3001/ambulancedetails/ambulancedetails');
//         setAmbulances(res.data);
//         console.log(res.data)
//       } catch (error) {
//         alert(error.message);
//       }
//     }
//     getAmbulanceDetails();
//   }, []);

//   //Delete
//   const DeleteAmbulanceDetails = async (VehicleIdentificationNumber) => {
//     if (window.confirm('Are you sure you want to delete this data?')) {
//       try {
//         const res = await axios.delete(`http://localhost:3001/ambulancedetails/delete/${VehicleIdentificationNumber}`, {
//           VehicleIdentificationNumber: VehicleIdentificationNumber
          
//         });
//         console.log(res.data); // log the response data for debugging purposes
//       } catch (error) {
//         console.error(error);
//         alert(error.message);
//       }
//       window.location.reload(false);
//     } else {
//       // handle cancel button clicked
//     }
//   };

//   //Update

//   const UpdateAmbulanceDetails = async () => {
//     // e.preventDefault()

//       //const updateDetails = { VehicleIdentificationNumber, VehicleYear, VehicleMake, VehicleMake, Veh  }
//       console.log(VehicleModel);
//       console.log(City);
//       const req = await fetch(`http://localhost:3001/ambulancedetails/update/${updatebleObj._id}`,{
//         method:"PUT",
//         headers:{"content-type": "application/json"},
//         body:JSON.stringify({ 
//           VehicleYear : VehicleYear,
//           VehicleMake : VehicleMake,
//           VehicleModel : VehicleModel,
//           Mileage : Mileage,
//           ChassisNumber : ChassisNumber,
//           EngineNumber : EngineNumber,
//           VehicleIdentificationNumber : VehicleIdentificationNumber,
//           OwnerName : OwnerName,
//           OwnerIdentificationNumber : OwnerIdentificationNumber,
//           ContactNumber : ContactNumber,
//           City : City 
//         })
//     })
//     const res= req.json()
//     // setUpdateAmb(res.data);
//     // console.log(res.data)
//     alert("updated")
//   }

//   //report

  
//   const PDFReport = ({ headings, ambulances }) => (
//     <Document>
//       <Page size="A4" style={{backgroundColor: '#ffffff',padding: '40px'}}>
//         <View style={{fontSize: '14px',fontWeight: 'bold',width: '20%',textAlign: 'left',borderRightWidth: '1px',borderRightColor: '#cccccc',paddingRight: '5px'}}>
//           {headings.map((heading) => (
//             <Text key={heading} style={{ flexDirection: 'row',marginBottom: '5px'}}>
//               {heading}
//             </Text>
//           ))}
//         </View>
//         {ambulances.map((item) => (
//           <View key={item._id} style={{flexDirection: 'row',borderBottomWidth: '1px',borderBottomColor: '#cccccc',marginBottom: '10px'}}>
//             {headings.map((heading) => (
//               <Text key={`${item._id}${heading}`} style={{ fontSize: '12px',width: '20%',textAlign: 'left',borderRightWidth: '1px',borderRightColor: '#cccccc',paddingRight: '5px'}}>
//                 {item[heading]}
//               </Text>
//             ))}
//           </View>
//         ))}
//       </Page>
//     </Document>
//   );
  
  
//     const headings = [
//       'ChassisNumber',
//       'City',
//       'ContactNumber',
//       'EngineNumber',
//       'Mileage',
//       'OwnerIdentificationNumber',
//       'OwnerName',
//       'VehicleIdentificationNumber',
//       'VehicleMake',
//       'VehicleModel',
//       'VehicleYear',
//     ];
  
//     const reportData = ambulances.map((item) => ({
//       ChassisNumber: item.ChassisNumber,
//       City: item.City,
//       ContactNumber: item.ContactNumber,
//       EngineNumber: item.EngineNumber,
//       Mileage: item.Mileage,
//       OwnerIdentificationNumber: item.OwnerIdentificationNumber,
//       OwnerName: item.OwnerName,
//       VehicleIdentificationNumber: item.VehicleIdentificationNumber,
//       VehicleMake: item.VehicleMake,
//       VehicleModel: item.VehicleModel,
//       VehicleYear: item.VehicleYear,
//       _v: item._v,
//       _id: item._id,
//     }));
  
//     const report = <PDFReport headings={headings} ambulances={reportData} />;
  


//     //searchbar
//     // const handleChange = (e) => {
//     //   e.preventDefault();
//     //   const input = e.target.value;
//     //   setSearchInput(input);
//     //   setFilteredAmbulances(
//     //     ambulances.filter((ambulance) =>
//     //       ambulance.VehicleIdentificationNumber.match(input)
//     //     )
//     //   );
//     // };
    
//     // const displayedAmbulances = searchInput.length > 0 ? filteredAmbulances : ambulances;

//     const handleChange = (e) => {
//       e.preventDefault();
//       const input = e.target.value;
//       setSearchInput(input);
//       setFilteredAmbulances(
//         ambulances.filter((ambulance) => {
//           // Modify the condition to search all categories
//           return Object.values(ambulance).some((value) =>
//             String(value).toLowerCase().includes(input.toLowerCase())
//           );
//         })
//       );
//     };
    
//     const displayedAmbulances = searchInput.length > 0 ? filteredAmbulances : ambulances;

//   return (
//     <>
//     <Navbar></Navbar>
    
//     {
//       updateAmb &&

//       <div>
//         <div style={{width: '5px', marginLeft:'40px' ,float:'left',marginTop:'8%'}}>
//             <img src='/assets/img/ambulance/log2.png' alt='amb' />
//         </div>
//       <div class="card" style={{width:'55%', float:'right', marginRight:'150px', backgroundColor:'white',marginTop:'100px'}}>
//       <div class="card-body" >
//       <form className="px-md-2">
//       <div class="form-row">
//       <div className="form-group col-md-3">
//           <label className="form-label" htmlFor="form3Example1q">Vehicle identification number</label>
//           <input type="text" id="form3Example1q" className="form-control" value={VehicleIdentificationNumber} data-ms-editor="true" autocomplete="off"
//             onChange={(e)=>{
//               // setUpdatebleObj({
//               //   ...updatebleObj,
//               //   VehicleIdentificationNumber: e.target.value
//               // }) 
//               setVehicleIdentificationNumber(e.target.value)
//           }} /> 
                            
//       </div>  

//       <div className="form-group col-md-3">
//           <label className="form-label" htmlFor="form3Example1q">Vehicle year </label>

//          <input type="text" id="form3Example1q" className="form-control"  value={VehicleYear} 
//          onChange={(e) => {
//           // setUpdatebleObj({
//           //   ...updatebleObj,
//           //   VehicleYear: e.target.value
//           // })
//           setVehicleYear(e.target.value)
//          } }/>
       
//       </div>

//       <div className="form-group col-md-3">
//           <label className="form-label" htmlFor="form3Example1q">Vehicle make</label>
//           <input type="text" id="form3Example1q" className="form-control" value={VehicleMake} 
//           onChange={(e)=>{
//             // setUpdatebleObj({
//             //   ...updatebleObj,
//             //   VehicleMake: e.target.value
//             // })
//             setVehicleMake(e.target.value)
//          }}/>
                                     
//       </div>

//       <div className="form-group col-md-3">
//           <label className="form-label" htmlFor="form3Example1q">Vehicle model</label>
//           <input type="text" id="form3Example1q" className="form-control" value={VehicleModel} 
//            onChange={(e)=>{
//             // setUpdatebleObj({
//             //   ...updatebleObj,
//             //   VehicleModel: e.target.value
//             // })
//             setVehicleModel(e.target.value) 
//          }}/>                           
//       </div></div>
//       <div class="form-row">
//       <div className="form-group col-md-4">
//           <label className="form-label" htmlFor="form3Example1q">Mileage</label>
//           <input type="text" id="form3Example1q" className="form-control" value={Mileage} onChange={(e)=>{
//             //  setUpdatebleObj({
//             //   ...updatebleObj,
//             //   Mileage: e.target.value
//             // }) 
//             setMileage(e.target.value)
//          }}/> 
                                     
//       </div>

//       <div className="form-group col-md-4">
//           <label className="form-label" htmlFor="form3Example1q">Chassis Number</label>
//           <input type="text" id="form3Example1q" className="form-control" value={ChassisNumber}
//            onChange={(e)=>{
//             // setUpdatebleObj({
//             //   ...updatebleObj,
//             //   ChassisNumber: e.target.value
//             // }) 
//             setChassisNumber(e.target.value)
//          }}/>  
                                    
//       </div>

//       <div className="form-group col-md-4">
//           <label className="form-label" htmlFor="form3Example1q">Engine number</label>
//           <input type="text" id="form3Example1q" className="form-control" value={EngineNumber}  
//            onChange={(e)=>{
//             // setUpdatebleObj({
//             //   ...updatebleObj,
//             //   EngineNumber: e.target.value
//             // })
//             setEngineNumber(e.target.value) 
//          }}/>  
                                      
//       </div></div>
//       <div class="form-row">
//       <div className="form-group col-md-6">
//           <label className="form-label" htmlFor="form3Example1q">Owner’s name</label>
//           <input type="text" id="form3Example1q" className="form-control" value={OwnerName} 
//            onChange={(e)=>{
//             // setUpdatebleObj({
//             //   ...updatebleObj,
//             //   OwnerName: e.target.value
//             // })
//             setOwnerName(e.target.value)
//          }}/> 
                                      
//       </div>

//       <div className="form-group col-md-6">
//           <label className="form-label" htmlFor="form3Example1q">Owner’s Identification number</label>
//           <input type="text" id="form3Example1q" className="form-control" value={OwnerIdentificationNumber} 
//            onChange={(e)=>{
//             // setUpdatebleObj({
//             //   ...updatebleObj,
//             //   OwnerIdentificationNumber: e.target.value
//             // })
//             setOwnerIdentificationNumber(e.target.value)
//          }}/> 
                                       
//       </div></div>

//       <div class="form-row">
//       <div className="form-group col-md-6">
//           <label className="form-label" htmlFor="form3Example1q">Contact number</label>
//           <input type="text" id="form3Example1q" className="form-control" value={ContactNumber}
//            onChange={(e)=>{
//             // setUpdatebleObj({
//             //   ...updatebleObj,
//             //   ContactNumber: e.target.value
//             // })
//             setContactNumber(e.target.value)
//          }}/> 
                                     
//       </div>

//       <div className="form-group col-md-6">
//           <label className="form-label" htmlFor="form3Example1q">City</label>
//           <input type="text" id="form3Example1q" className="form-control" value={City}  
//           onChange={(e)=>{
//             // setUpdatebleObj({
//             //   ...updatebleObj,
//             //   City: e.target.value
//             // }) 
//             setCity(e.target.value)
//          }}/> 
                                        
//       </div> </div>  
      
//       <br></br><br></br>

//       <div className="d-flex justify-content-center" >
//           <button onClick={() => {UpdateAmbulanceDetails()}}>UPDATE</button>
//       </div>
//       <button onClick={() => {setUpdateAmb(false)}} >Back</button>
//   </form></div></div></div>
//     }

//     {
//       !updateAmb &&
      
//     <div  >

// <div style={{float:'left'}}><AmbSideBar></AmbSideBar></div>

//       <div class="card" style={{width:'70%',height:'625px',marginRight:'130px' ,backgroundColor:'white', float:'right'}} >
//         <div class="card-body">
//       <h1 style={{textAlign:'center'}}>Ambulance Details List</h1>
//       <br></br><br></br>

//         <input
//         type="text"
//         placeholder="Search by vehicle identification number"
//         onChange={handleChange}
//         value={searchInput} style={{width:'500px', marginLeft:'250px'}} />

//       <table className="table table-bordered" style={{width:'90%', alignItems:'center', margin:'auto',marginTop:'30px' }}>
//         <thead>
//           <tr style={{backgroundColor:'#e6f7ff'}}>
//             <th scope="col">ID</th>
//             <th scope="col">Vehicle identification number</th>
//             <th scope="col">Vehicle year</th>
//             <th scope="col">Vehicle make</th>
//             <th scope="col">Vehicle model</th>
//             <th scope="col">Mileage</th>
//             <th scope="col">Chassis Number</th>
//             <th scope="col">Engine number</th>
//             <th scope="col">Owner’s name</th>
//             <th scope="col">Owner’s Identification number</th>
//             <th scope="col">Contact number</th>
//             <th scope="col">City</th>
//             <th scope="col"></th>
//             <th scope="col"></th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {displayedAmbulances.map((ambulance, index) => {
//             return (
//             <tr key={index}>
//               <td>{index}</td>
//               <td>{ambulance.VehicleIdentificationNumber}</td>
//               <td>{ambulance.VehicleYear}</td>
//               <td>{ambulance.VehicleMake}</td>
//               <td>{ambulance.VehicleModel}</td>
//               <td>{ambulance.Mileage}</td>
//               <td>{ambulance.ChassisNumber}</td>
//               <td>{ambulance.EngineNumber}</td>
//               <td>{ambulance.OwnerName}</td>
//               <td>{ambulance.OwnerIdentificationNumber}</td>
//               <td>{ambulance.ContactNumber}</td>
//               <td>{ambulance.City}</td>
//               <td>
//                 <a class="fa fa-trash" aria-hidden="true" onClick={() => DeleteAmbulanceDetails(ambulance.VehicleIdentificationNumber)}></a>
//               </td>
//               <td>
//                 <a class="fa fa-edit" aria-hidden="true" onClick={() => {setUpdatebleObj(ambulance); setVehicleIdentificationNumber(ambulance.VehicleIdentificationNumber); setVehicleYear(ambulance.VehicleYear); setVehicleMake(ambulance.VehicleMake);setVehicleModel(ambulance.VehicleModel);setMileage(ambulance.Mileage);setChassisNumber(ambulance.ChassisNumber);setEngineNumber(ambulance.EngineNumber);setOwnerName(ambulance.OwnerName);setOwnerIdentificationNumber(ambulance.OwnerIdentificationNumber);setContactNumber(ambulance.ContactNumber);setCity(ambulance.City); setUpdateAmb(true)}}></a>
//               </td>
//             </tr>)
//           })}
//         </tbody>
//       </table>

//       <PDFDownloadLink document={report} fileName="Registered_Ambulance_Detail.pdf">
//       {({ blob, url, loading, error }) =>
//         loading ? 'Loading document...' : 'Download List!'
//       }
//     </PDFDownloadLink>
  
//       </div></div>
//     </div>
//     }
// </>
// );
// }