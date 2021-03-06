import { useState } from "react";
import "./App.css";
import List from "./Base/List";
import Modal from "./Modal/Modal";
import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "https://test-task.expane.pro/api/graphql";

function App() {
  const { status, data } = useQuery("clients", async () => {
    const data = (
      await request(
        endpoint,
        gql`
          {
            getClients {
              id
              firstName
              lastName
              phone
              avatarUrl
            }
          }
        `
      )
    ).getClients;
    return data;
  });

  const [modalState, setModalState] = useState({ isOpen: false });
  const [modalData, setModalData] = useState([]);

  function changeModalState(data: any) {
    setModalData(data);
    const newState = !modalState.isOpen;
    setModalState({ isOpen: newState });
  }

  return (
    <div>
      {status === "loading" ? (
        "Loading..."
      ) : (
        <>
          <div className="main">
            <h1 className="header">Client base</h1>
            <Modal
              data={data}
              changeModalState={changeModalState}
              modalState={modalState}
              modalData={modalData}
            ></Modal>
            <List
              data={data}
              changeModalState={changeModalState}
              modalState={modalState}
            ></List>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
