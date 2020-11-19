import React from 'react';



const TableBody = ({ body }) => {
    return ( 

        <tbody>
            {body.map(item => (
                <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.Title}</td>
                    <td>{item.Text}</td>
                    <td>{item.Image}</td>
                    <td>{item.Auther}</td>
                    <td>{item.Date}</td>
                </tr>
            )
            )}
        </tbody>
     );
}
 
export default TableBody;