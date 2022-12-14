import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('');
  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
        console.log(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const newAPIGet=()=>{
    return "newapi"
  }

  return (
    <div className="app">
      <button className="card" onClick={fetchAdvice}  >
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME NEW Message!</span>
        </button>
      </button>
    </div>
  );
}

export default App;
