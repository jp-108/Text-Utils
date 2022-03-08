import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert'
import React, {useState} from 'react'
import{
   BrowserRouter as Router,
  Routes,
   Route,
   Link
} from "react-router-dom";

function App() {
   const [mode, setMode] = useState('dark');
   const [alert, setAlert] = useState(null);
   const showAlert= (message, type) =>{
      setAlert({
         msg: message,
         type: type
      })
      setTimeout(() =>{
         setAlert(null)
      } ,3000);

   }
   const toggleMode = () => {
      if(mode === 'light'){
         setMode('dark'); 
         document.body.style.backgroundColor = 'black';
         showAlert("Dark Mode has enabled", "success");
      }
      else{
         setMode ('light');    
         document.body.style.backgroundColor = 'White';   
         showAlert("Dark Mode has enabled", "success");  
      }

   }
return (
  <>
  <Router>

        <Navbar title="WebJP" mode={mode} toggleMode ={toggleMode}/>
        <Alert alert={alert}/>
           
              
    
        <div className="container my-3">
     <Routes>

        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode}/>}/>
        <Route exact path="/about" element={<About/>}/>
     </Routes>
        </div>
    </Router>
</> 
   );
}


export default App;
