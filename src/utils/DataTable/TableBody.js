import React from 'react';

//import css
import './../../css/TableBody.css'

const TableBody = ({ body }) => {
    return ( 

        <tbody>
            {body.map(item => (
                <tr className="body-row" key={item.id}>
                    <th className="body-head" scope="row">{item.id}</th>
                    <td className="body-data">{item.Title}</td>
                    <td className="body-data">{item.Text}</td>
                    <td className="body-data">{item.Image}</td>
                    <td className="body-data">{item.Auther}</td>
                    <td className="body-data">{item.Date}</td>
                </tr>
            )
            )}
        </tbody>
     );
}
 
export default TableBody;