import React from 'react';
import logo from './logo.svg';
import './App.css';

const fio = {

  name: "Yehor",
  surname: "Maymeskule",
  patronymic: "Olegovich"
}

function App() {
  return (
    <div className = "wrapper">
      <div className = "info-container">
        <p className = "info">Name: {fio.name}</p>
        <p className = "info">Surname: {fio.surname}</p>
        <p className = "info">Patronymic: {fio.patronymic}</p>
      </div>
    </div>
  );
}

export default App;
