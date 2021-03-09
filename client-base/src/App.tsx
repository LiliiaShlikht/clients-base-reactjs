import React, { useState } from 'react';
import './App.css';
import List from './Base/List';
import Modal from './Modal/Modal';
import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "https://test-task.expane.pro/api/graphql";

function App() {
  const { status, data, error, isFetching } = useQuery("clients", async () => {
    const data = (await request(
      endpoint,
      gql`{
          getClients {
            id
            firstName
            lastName
            phone
            avatarUrl
          }
        }
      `
    )).getClients; 
    return data;
  });

////////////////////
  // const [clients, setClients] = useState([
  //   {id: 1, firstName: 'One', lastName: 'Onest', phone: '1111', avatarUrl: 'urlOne'},
  //   {id: 2, firstName: 'Two', lastName: 'Twoest', phone: '2222', avatarUrl: 'urlTwo'},
  //   {id: 3, firstName: 'Three', lastName: 'Threest', phone: '3333', avatarUrl: 'urlThree'}
  // ])

  const [modalState, setModalState] = useState({isOpen: false});
  const [modalData, setModalData] = useState([]);

  function changeModalState(data: any) {
    setModalData(data)
    let newState = !modalState.isOpen;
    setModalState({isOpen: newState});
  }

  return (
    <div>
      {status === "loading" ? (
        "Loading..."
      ) : (
        <>
        <div className='main'>
          <h1>Client base</h1>
          <Modal 
            data={data}
            //clients={clients} 
            changeModalState={changeModalState} 
            modalState={modalState}
            modalData={modalData}>
          </Modal>
          <List 
            data={data}
            //clients={clients} 
            changeModalState={changeModalState} 
            modalState={modalState}> 
          </List>
        </div>
      </>
      )}
    </div>
  );
}

export default App;
