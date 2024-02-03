// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/about'); // Update the URL
      setData(response.data.message);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default App;
