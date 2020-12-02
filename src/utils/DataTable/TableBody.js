import React, { useEffect, useState } from 'react';

//import css
import './../../css/TableBody.css';

//import icons
import EditIcon from '@material-ui/icons/Edit';


const TableBody = ({ body }) => {
    // console.log('body :', body)

    const [contents, setContents] = useState([])

    // useEffect(() => {
    //     setContents([body])
    // }, [contents, body])

    const onDeleteNews = (item) => {

        if (window.confirm("Are you sure to delete ?")) {

            // console.log(item)

            // const list = contents.slice();
            // // Check to see if item passed in matches item in array
            // list.some((el, i) => {
            //     console.log('el', el)
            //     console.log('i', i)

            //     if (el === item) {
            //         // If item matches, remove it from array
            //         list.splice(i, 1);
            //         return true;
            //     }
            // });
            // setContents(list)
        }
    }


    const onEditNews = (item) => {
        console.log(item)
    }

    return (

        <tbody>
            { body.map(item => (
                <tr className="body-row" key={item.id}>
                    <th className="body-head" scope="row">{item.id}</th>
                    <td className="body-data" style={{ width: "10%" }}>{item.name}</td>
                    <td className="body-data">{item.body}</td>
                    {/* <td className="body-data">{item.postId}</td> */}
                    <td className="body-data">{item.email}</td>
                    <td className="body-data">{"2020/10/10"}</td>
                    <td className="body-data"><EditIcon className="edit-icon" onClick={() => onEditNews(item)} /></td>
                    <td className="body-data"><i className="material-icons" onClick={() => onDeleteNews(item)}>&#xe872;</i></td>
                </tr>
            )
            )}
        </tbody>
    );
}

export default TableBody;