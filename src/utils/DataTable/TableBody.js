import React, { useEffect, useState } from 'react';

//import css
import './../../css/TableBody.css';

//import icons
import EditIcon from '@material-ui/icons/Edit';


const TableBody = ({ body, onDeleteNews, onEditNews }) => {
    // console.log('body TableBody:', body)

    return (

        <tbody>
            { body.map(item => (
                <tr className="body-row" key={item.id}>
                    <th className="body-head" id="0" scope="row">{item.id}</th>
                    <td className="body-data" id="1" >{item.name}</td>
                    <td className="body-data" id="2">{item.body}</td>
                    {/* <td className="body-data" id="3">{item.postId}</td> */}
                    <td className="body-data" id="4">{item.email}</td>
                    <td className="body-data" id="5">{"2020/10/10"}</td>
                    <td className="body-data" id="6"><EditIcon className="edit-icon" onClick={() => onEditNews(item)} /></td>
                    <td className="body-data" id="7"><i className="material-icons" onClick={() => onDeleteNews(item)}>&#xe872;</i></td>
                </tr>
            )
            )}
        </tbody>
    );
}

export default TableBody;