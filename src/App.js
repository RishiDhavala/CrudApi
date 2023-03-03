import Patients from './patient';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import PatientForm from './components/form';
import PatientList from './components/list';
import PatientEdit from './components/editform';

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PatientForm/>} />
          <Route exact path="/list" element={<PatientList/>}/>
          <Route exact path='/edit/:id' element={<PatientEdit/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

