import React from 'react';

//import css
import './../../css/TableBody.css';

import EditIcon from '@material-ui/icons/Edit';


const TableBody = ({ body }) => {
    // { console.log(body) }

    return (

        <tbody>
            { body.map(item => (
                <tr className="body-row" key={item.id}>
                    <th className="body-head" scope="row">{item.id}</th>
                    {/* <td className="body-data">{item.postId}</td> */}
                    <td className="body-data">{item.name}</td>
                    <td className="body-data">{item.body}</td>
                    <td className="body-data">{item.email}</td>
                    <td className="body-data">{"2020/10/10"}</td>
                    <td className="body-data"><EditIcon className="edit-icon" /></td>
                    <td className="body-data"><i className="material-icons">&#xe872;</i></td>
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;