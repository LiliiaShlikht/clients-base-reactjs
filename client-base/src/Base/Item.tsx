export default function Item(Props: any) {

    return (
        <tr>
            <td className="border px-8 py-4">{Props.firstName}</td>
            <td className="border px-8 py-4">{Props.lastName}</td>
            <td className="border px-8 py-4">{Props.phone}</td>
            <td className="border px-8 py-4">{Props.avatarUrl}</td>
            <td className="border px-8 py-4">
                <button 
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                onClick={Props.changeModalState}>
                    Edit
                </button>
            </td>
        </tr>
    )
}
