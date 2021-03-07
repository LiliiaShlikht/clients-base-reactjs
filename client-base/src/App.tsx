import React, { useState } from 'react';
import './App.css';
import List from './Base/List';
import Modal from './Modal/Modal';

function App() {
  const [clients, setClients] = useState([
    {id: 1, firstName: 'One', lastName: 'Onest', phone: '1111', avatarUrl: 'urlOne'},
    {id: 2, firstName: 'Two', lastName: 'Twoest', phone: '2222', avatarUrl: 'urlTwo'},
    {id: 3, firstName: 'Three', lastName: 'Threest', phone: '3333', avatarUrl: 'urlThree'}
  ])

  const [modalState, setModalState] = useState({
    isOpen: false
  })

  function changeModalState() {
    let newState = !modalState.isOpen;
    setModalState({isOpen: newState});
  }

  return (
    <div className='main'>
      <h1>Client base</h1>
      <Modal 
        changeModalState={changeModalState} 
        modalState={modalState}>
      </Modal>
      <List 
        clients={clients} 
        changeModalState={changeModalState} 
        modalState={modalState}> 
      </List>
    </div>
  );
}

export default App;
