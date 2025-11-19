import React from "react";


interface SubsTableItemTypes {
  mongoId: string;
  email: string;
  date: string;
  deleteEmail: (id: string) => void;
}

const SubsTableItem = ({email,mongoId,date,deleteEmail}:SubsTableItemTypes) =>{

    const emailDate = new Date(date)

    return (
        <tr className="bg-white border-b text-left">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                {
                    email?email:"No Email"
                }
            </th>
            <td className="px-6 py-4 hidden sm:block">
                {emailDate.toDateString()}
            </td>
            <td className="px-6 py-4" onClick={()=>deleteEmail(mongoId)}>
                x
            </td>

        </tr>
    )
}

export default SubsTableItem