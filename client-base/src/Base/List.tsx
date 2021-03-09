import Item from './Item';
import IClient from '../interface';

export default function List(Props: any) {
    //let clients: IClient[] = Props.clients;
    let data: IClient[] = Props.data;

    return (
        <table className="shadow-lg bg-white">
            <thead>
                <tr>
                    <th className="bg-blue-100 border text-left px-8 py-4">First Name</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">Last Name</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">Phone</th>
                    <th className="bg-blue-100 border text-left px-8 py-4">Avatar</th>
                    <th className="bg-green-100 border text-left px-8 py-4">Editing</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data: IClient, index: number) => {
                    return (
                        <Item
                            key={index}
                            id={data.id}
                            firstName={data.firstName}
                            lastName={data.lastName}
                            phone={data.phone}
                            avatarUrl={data.avatarUrl}
                            changeModalState={Props.changeModalState}>
                        </Item>
                    )
                })}
            </tbody>   
        </table>
    )
}
