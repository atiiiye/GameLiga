import React from 'react';

//import css
import './../../css/TableBody.css';


const TableBody = ({ body }) => {
    // { console.log(body) }

    return (

        <tbody>
            { body.map(item => (
                <tr className="body-row" key={item.index}>
                    <th className="body-head" scope="row">{item.id}</th>
                    <td className="body-data">{item.postId}</td>
                    <td className="body-data">{item.name}</td>
                    <td className="body-data">{item.id}</td>
                    <td className="body-data">{item.email}</td>
                    <td className="body-data">{item.body}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;