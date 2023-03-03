import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


const PatientForm = () => {
  const [name, setName] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const navigate=useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    const patient = {
      name: name,
      contactDetails: contactDetails,
      address: address,
      pincode: pincode
    };

    axios.post('http://localhost:5000/patients', patient)
      .then(response => {
        console.log(response);
        setName('');
        setContactDetails('');
        setAddress('');
        setPincode('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  

  return (

    <form onSubmit={handleSubmit}>
      <h2>Create a new patient:</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Contact Details:
        <input type="text" value={contactDetails} onChange={event => setContactDetails(event.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={event => setAddress(event.target.value)} />
      </label>
      <br />
      <label>
        Pincode:
        <input type="text" value={pincode} onChange={event => setPincode(event.target.value)} />
      </label>
      <br />
      <div className='button' style={{display:'flex',direction:'column',columnGap:"30px"}}>

      <button type="submit">Submit</button>
      <button onClick={()=>navigate("/list")} style={{backgroundColor:'green',color:'white',marginTop:'16px',padding:'8px 16px 8px 16px',borderRadius:'3px',border:'none',fontSize:'1rem'}}> Get List</button>
      </div>
    </form>
   
  );
};


export default PatientForm;
