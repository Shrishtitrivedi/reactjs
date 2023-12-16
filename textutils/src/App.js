import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react' ;
function App(){
  const[mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#042743';
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
    }
  }
  return(
    <>
    <Navbar  title="Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert="This is alert" />
    <div className="container my-3">
       <TextForm heading="Enter the text to analyze" mode={mode} />
       </div>
   
</>
  );
}
export default App;


