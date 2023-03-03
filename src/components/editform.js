import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import apiRequest from "../utils/axios";

const PatientEdit = () => {
  const { id } = useParams();
const navigate=useNavigate();
  const [patient, setPatient] = useState({
    name: "",
    contactDetails: "",
    address: "",
    pincode: "",
  });

  useEffect(() => {
    if (id === undefined) return;
    const fetchData = async () => {
      try {
        // console.log({ id });
        const result = await apiRequest.patients.get(id)
        console.log(result.data)
        setPatient(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await apiRequest.patients.put(id,patient)
    console.log(patient.name)
    // Redirect to patient list page after editing the patient
   navigate('/list')
  };

  return (
    <div>
      <h2>Edit Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={patient.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Details:</label>
          <input
            type="text"
            name="contactDetails"
            value={patient.contactDetails}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={patient.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={patient.pincode}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default PatientEdit;
