import './Modal.css';
import {Fragment} from 'react';


export default function Modal(Props: any) {
    // const [modalState, setModalState] = useState({
    //         isOpen: false
    // })

    // function changeModalState() {
    //     let newState = !modalState.isOpen;
    //     setModalState({isOpen: newState});
    // }

    return (
        <Fragment>
            <button 
                className="addButton bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                onClick={Props.changeModalState}>
                Add new client
            </button>

            {Props.modalState.isOpen && (
                <div className='modal'>
                <div className='modal-body'>
                    <p>First Name</p>
                    <p>Last Name</p>
                    <p>Phone</p>
                    <p>Avatar</p>
                    <div className='buttonPanel'>
                        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-green-500 rounded">Save</button>
                        <button 
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-red-500 rounded"
                            onClick={Props.changeModalState}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>)}
        </Fragment>
    )
}