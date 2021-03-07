import React, { useState } from 'react';
import './App.css';
import List from './Base/List';
import IClient from './interface';

function App() {
  const [clients, setClients] = useState([
    {id: 1, firstName: 'One', lastName: 'Onest', phone: '1111', avatarUrl: 'urlOne'},
    {id: 2, firstName: 'Two', lastName: 'Twoest', phone: '2222', avatarUrl: 'urlTwo'},
    {id: 3, firstName: 'Three', lastName: 'Threest', phone: '3333', avatarUrl: 'urlThree'}
  ])

  return (
    <div className='main'>
      <h1>Client base</h1>
      <List clients={clients}></List>
    </div>
  );
}

export default App;
