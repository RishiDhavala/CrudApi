import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const navigate=useNavigate();
  const [patient,setPatient]=useState([]);
  const[showeditmodal,setShowEditModal]=useState([])
const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    
    axios.get('http://localhost:5000/patients')
      .then(response => {
        setPatients(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });


  }, []);

 const handleEdit = async (id) => {
  try {
    console.log('no');
    const response = await fetch(`http://localhost:5000/patients/${id}`);
    
    const data = await response.json();
    console.log(data);
    setPatient(data);
    setModalShow(true);
    navigate(`/edit/${id}`)
  } catch (error) {
    console.error(error);
  }
};

  const handleDelete = id => {
    axios.delete(`http://localhost:5000/patients/${id}`)
      .then(response => {
        setPatients(patients.filter(patient => patient._id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div style={{marginLeft:'33%',marginRight:'33%',padding:'30px',border:'2px solid black',borderRadius:'10px'}}>
      <h2 style={{paddingLeft:'120px',paddingBottom:'30px'}}>List of Patients</h2>
      <ul style={{paddingBottom:'30px'}}>
        {patients.map(patient => (
          <li key={patient._id}>
            <p>Name: {patient.name}</p>
            <p>Contact Details: {patient.contactDetails}</p>
            <p>Address: {patient.address}</p>
            <p>Pincode: {patient.pincode}</p>
            <div className='button' style={{display:'flex',direction:'column',columnGap:"30px"}}>
             <button onClick={() => handleEdit(patient._id)} style={{backgroundColor:'orange',color:'white',marginTop:'16px',padding:'8px 16px 8px 16px',borderRadius:'3px',border:'none',fontSize:'1rem'}}>Edit</button>
            
            <button onClick={() => handleDelete(patient._id)} style={{backgroundColor:'red',color:'white',marginTop:'16px',padding:'8px 16px 8px 16px',borderRadius:'3px',border:'none',fontSize:'1rem'}}>Delete</button>
          
          </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
