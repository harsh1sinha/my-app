
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light'); //shows darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=> {
      setAlert({ 
        msg: message,
        type : type
      })
      setTimeout(() => {
         setAlert(null);
      }, 2000);
        
  }
  const toggleMode=()=>{
      if (mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='#042743';    
        showAlert("dark mode has been enabled", "success");
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode has been enabled", "success");
      }
  }
  return (
    <>
    {/* <Navbar title= "harsh sinha" abouttext="About me"/> */}
    {/* <Navbar/> */}
    <Navbar title= "Text Analyser" heading="hello" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container  my-4"> {/*my-3 gives margin distange in y axis*/}
    <Textform showAlert={showAlert} heading="Enter Text To Analyse" mode={mode}/>
    <div className="container  my-5">
    <About mode={mode}/> 
    </div>
     
    </div>
    
    </>
  );
}

export default App;
