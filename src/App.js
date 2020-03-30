import React, { useState, useEffect } from 'react';
import { getCity, getCityData } from './secret/secrets';
import Input from './Components/Input/input';
import MainCard from './Components/Card/card';
import './App.css';

const App = () => {
  const [searchVal, setSearchVal] = useState('');
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getCity(city).then(data => {
      getCityData(data.Key).then(res => {
        setWeather(res);
      })
    }).catch(err => console.log(err));
  }, [city])

  const onSubmit = e => {
    e.preventDefault();
    setCity(searchVal);
    setSearchVal('');
  }

  const setVal = e => {
    setSearchVal(e);
  }

  return (
    <div className="App">
      <h1 className='mainHeader'>Check the weather</h1>
      <Input setVal={setVal} onSubmit={onSubmit} searchVal={searchVal} />
      <MainCard {...weather} title={city} weather={weather} />
    </div>
  );
}

export default App;
