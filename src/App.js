import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Regarding from './components/Regarding';
import Alert from './components/Alert';
function App() 
{
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

const showAlert=(message, type)=>{
       setAlert({
        msg: message,
        type: type
       })
       setTimeout(()=>{
        setAlert(null);
       }, 3000);
}
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#454545'
      showAlert("Dark mode is Enable", "Success");
      document.title='textutils-darkMode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is Enable", "Success");
      document.title='textutils-lightMode'


    }
  }
  const redMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'red'
      showAlert("red mode is Enable", "Success");
      document.title='textutils-redMode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is Enable", "Success");
      document.title='textutils-lightMode'


    }
  }

  const greenMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'green'
      showAlert("green mode is Enable", "Success");
      document.title='textutils-greenMode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is Enable", "Success");
      document.title='textutils-lightMode'
    }
    
  }
  return (
    <>
    <BrowserRouter>
<Navbar title= "learning Academy" aboutText= "about us" mode={mode} toggleMode={toggleMode} greenMode={greenMode} redMode={redMode}/>
<Alert alert={alert}/>
<div className="container my-3s">
    <Routes>
    <Route path="/" element = {<TextForm  showAlert={showAlert} heading="Enter the text" mode={mode}/>} />
    <Route path="/about" element={<Regarding/>}/>

    </Routes>
      </div>
    </BrowserRouter>
    </>
         );
}

export default App;
