
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootsrtap/dist/js/bootsrtap.bundle';
import './App.css';
import MonitorCard from './components/MonitorCard';
import { useState } from 'react';
import { useEffect } from 'react';
import MonitorForm from './components/MonitorForm';


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

  const createMonitor = async (monitor) => {
    const response = await fetch(backend_url, {
      method: "POST",
      body: JSON.stringify(monitor),
      headers: {
        "Content-Type": "application6json",
        Accept: "applicatoion/json"
      }
    }
  )
  const data = await response.json();
  console.log(data);
  if(response.ok){
    readMonitors();
    return true;
  }else {
    alert(data.message)
    return false;
  }

};

  return (

    <main className='container'>
      <section>
        <h2>Monitor felvétele</h2>
        <MonitorForm onSubmit={createMonitor}/>
      </section>
      <section>
      <h2>Monitorok</h2>
      <div className='row row-cols-lg-2 row-cols-1'>
        {monitors.map(monitor => <MonitorCard monitor = {monitor} key={monitor.id} />)}
      </div>
      </section>


    </main>
  )
}

export default App
