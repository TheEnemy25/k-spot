import { useEffect } from 'react';
import './App.css';
import axios, { AxiosResponse } from 'axios';
import { urlCinema } from './endpoints';

function App() {

  useEffect(() => {
    axios.get(urlCinema)
      .then((response: AxiosResponse<any>) => {
      console.log(response.data);
    })
  }, [])

  return (
    <>
    <div>
      <h1>Haik pidor</h1>
    </div>
    </>
  );
}

export default App;
