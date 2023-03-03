import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientForm from "./components/form";
import PatientList from "./components/list";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/patients")
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PatientForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Patients;
