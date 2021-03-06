import React, { Component } from 'react';
import { useSelector } from 'react-redux';

import Routes from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  console.log('+++++++++++++signed++++++++++++++');
  console.log(signed);
  console.log('--------------signed-------------');

  //const Routes = createRouter(signed);

  return (
      <Routes signed={signed} />
    );
}