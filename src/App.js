
import { useState } from 'react';
import './App.css';
import Output from './components/Output';


function App() {
  const baseUrl = "http://localhost:7070";
  const [url, setUrl] = useState(null);
  const [id, setId] = useState(null);
  
  return (
    <>
    <div className="container">
    <button className='btn' onClick={()=> {setUrl(`${baseUrl}/data`); setId(1)}}>get data</button>
    <button className='btn' onClick={()=> {setUrl(`${baseUrl}/error`);setId(2)}}>get error</button>
    <button className='btn' onClick={()=> {setUrl(`${baseUrl}/loading`);setId(3)}}>get loading</button>
    <p className='output-header'>Полученные данные:</p>
    <Output url={url} id={id}/>
    </div>    
    </>
    );
  }
  
  export default App;
  