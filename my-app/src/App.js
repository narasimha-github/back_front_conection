import {useState,useEffect} from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const getData = async() => {
     const response = await Axios.get('http://localhost:4000/getDeta')
     setCount(response.data)
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <div className="App">
      <h1>{count}</h1>
    </div>
  );
}

export default App;
