import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForms from "./Components/TextForms";
import Alert from "./Components/Alert";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert ,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg :message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500 )
  }


  //Setting Theme :DarkMode Or Light  Mode
  const [mode ,setMode]=useState('light');
const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-secondary')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-warning')
}

   const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
     
      setMode('dark');
      document.body.style.backgroundColor='black';
      // document.body.style.color='white';
      showAlert(`${cls} mode has been enabled` ,"success")
    }
   else{
      setMode('light');
      document.body.style.backgroundColor='white';
      // document.body.style.color='black';
      showAlert(`${cls} mode has been enabled`,"success")
    }
   }

   return (
    <>
     {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" about="AboutTextUtils"  /> */}
      
    <Router>
     
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
      {/* <TextForms heading="Enter text to analyse" showAlert={showAlert} mode={mode} /> */}
          {/* users--->Component 1
          // /users/home---> ----> Component2 if you use exact keyword with path else u will reach to component1 only as it will match with the first one  */}
         
          <Route exact path="/Home" element={<TextForms heading="Try TextUtils - Word Counter ,Character Counter ,Remove Extra Spaces" showAlert={showAlert} mode={mode} />}/>
          
          <Route exact path="/about" element={<About mode={mode} />} />
     
           </Routes>
      </div>
  </Router>
    </>
  );
}

export default App;
