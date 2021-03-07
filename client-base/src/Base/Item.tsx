import IClient from '../interface';

export default function Item(Props: any) {

    return (
        <tr>
            <td className="border px-8 py-4">{Props.firstName}</td>
            <td className="border px-8 py-4">{Props.lastName}</td>
            <td className="border px-8 py-4">{Props.phone}</td>
            <td className="border px-8 py-4">{Props.avatarUrl}</td>
            <td className="border px-8 py-4">Edit</td>
        </tr>
    )
}
