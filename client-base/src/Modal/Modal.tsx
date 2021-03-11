import "./Modal.css";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import IClient from "../interface";
import { gql, GraphQLClient } from "graphql-request";

type Inputs = {
  register: string;
  handleSubmit: string;
};

export default function Modal(Props: any) {
  let data = Props.modalData;
  const { register, handleSubmit } = useForm<Inputs>();
  const endpoint = "https://test-task.expane.pro/api/graphql";

  const graphQLClient = new GraphQLClient(endpoint);
  const ADD_CLIENT_MUTATION = gql`
    mutation AddClient(
      $firstName: String!
      $lastName: String!
      $phone: String!
      $avatarUrl: String!
    ) {
      addClient(
        firstName: $firstName
        lastName: $lastName
        phone: $phone
        avatarUrl: $avatarUrl
      ) {
        id
      }
    }
  `;
  const EDIT_CLIENT_MUTATION = gql`
    mutation UpdateClient(
      $id: ID!
      $firstName: String!
      $lastName: String!
      $phone: String!
      $avatarUrl: String!
    ) {
      updateClient(
        id: $id
        firstName: $firstName
        lastName: $lastName
        phone: $phone
        avatarUrl: $avatarUrl
      ) {
        id
      }
    }
  `;

  const onSubmit = (client: IClient) => {
    if (data.id) {
      console.log("Edit");
      graphQLClient.request(EDIT_CLIENT_MUTATION, { ...client, id: data.id });
    } else {
      console.log("ADD");
      graphQLClient.request(ADD_CLIENT_MUTATION, client);
    }
    Props.changeModalState(client);
  };

  return (
    <Fragment>
      <button
        className="addButton bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={Props.changeModalState}
      >
        Add new client
      </button>

      {Props.modalState.isOpen && (
        <div className="modal">
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <p>
                First Name:{" "}
                <input
                  name="firstName"
                  type="text"
                  ref={register}
                  defaultValue={data.firstName}
                />
              </p>
              <p>
                Last Name:{" "}
                <input
                  name="lastName"
                  type="text"
                  ref={register}
                  defaultValue={data.lastName}
                />
              </p>
              <p>
                Phone:{" "}
                <input
                  name="phone"
                  type="number"
                  ref={register}
                  defaultValue={data.phone}
                />
              </p>
              <p>
                Avatar:{" "}
                <textarea
                  name="avatarUrl"
                  ref={register}
                  defaultValue={data.avatarUrl}
                />
              </p>
              <div className="buttonPanel">
                <input
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-green-500 rounded"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-red-500 rounded"
                  onClick={Props.changeModalState}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
}
