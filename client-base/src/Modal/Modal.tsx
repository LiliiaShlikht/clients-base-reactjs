import './Modal.css';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import IClient from '../interface';

type Inputs = {
    register: string,
    handleSubmit: string
}

export default function Modal(Props: any) {
    let data = Props.modalData;
    const {register, handleSubmit} = useForm<Inputs>();
    const onSubmit = (data: IClient) => console.log(data);

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>First Name: <input name="firstName" ref={register} placeholder={data.firstName}/></p>
                        <p>Last Name: <input name="lastName" ref={register} placeholder={data.lastName}/></p>
                        <p>Phone: <input name="phone" type="number" ref={register} placeholder={data.phone}/></p>
                        <p>Avatar: <textarea name="avatarUrl" ref={register} placeholder={data.avatarUrl}/></p>
                        <div className='buttonPanel'>
                            <input 
                                type="submit" 
                                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-green-500 rounded"/>
                            <button 
                                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-red-500 rounded"
                                onClick={Props.changeModalState}>
                                Cancel
                            </button>
                        </div>
                    </form> 
                </div>
            </div>
            )}
        </Fragment>
    )
}