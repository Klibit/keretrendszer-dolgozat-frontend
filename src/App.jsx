
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootsrtap/dist/js/bootsrtap.bundle';
import './App.css';
import MonitorCard from './components/MonitorCard';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const backend_url = "http://localhost:8000/api/monitors";
  const [monitors, setmonitors] = useState([]);

  useEffect(() =>{
    readMonitors();
  }, []);

  const readMonitors = async () => {
    const response = await fetch(backend_url);
    const data = await response.json();
    setmonitors(data);

  }

  return (

    <main className='container'>
      <div className='row row-cols-lg-2 row-cols-1'>
        {monitors.map(monitor => <MonitorCard monitor = {monitor} key={monitor.id} />)}
      </div>
    </main>
  )
}

export default App
