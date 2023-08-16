
import React,{ useState } from "react";
import './../styles/App.css';

const App = () => {
  const [close,setClose]=useState(true);
  const [show , setShow]=useState(false);
  const handleShow = ()=>{
    setShow(true);
    setClose(true);
  }
  const handleClose= ()=>{
    setClose(false);
    setShow(true);

  }
  return (
    <div>
        <button onClick={handleShow}>Show</button>
        {close===true && show===true && <div className="model-overlay">
          <button className="model-close"onClick={handleClose}>Close</button>
          <p className="model-p">This is the content of the modal</p>
          </div>}
    </div>
  )
}

export default App
