import React from 'react';

//import css
import './../../css/TableBody.css'

const TableBody = ({ body }) => {
    return ( 

        <tbody>
            { body.map(item => (
                <tr className="body-row" key={item.id}>
                    <th className="body-head" scope="row">{item.id}</th>
                    <td className="body-data">{item.postId}</td>
                    <td className="body-data">{item.name}</td>
                    <td className="body-data">{item.email}</td>
                    <td className="body-data">{item.body}</td>
                    <td className="body-data">{item.body}</td>
                </tr>
            )
            )}
        </tbody>
     );
}
 
export default TableBody;