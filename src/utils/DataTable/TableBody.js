import React, { useEffect, useState } from 'react';

//import css
import './../../css/TableBody.css';

//import icons
import EditIcon from '@material-ui/icons/Edit';


const TableBody = ({ body }) => {

    const [contents, setContents] = useState([body])
    // setContents([body])

    const onDeleteNews = (item) => {
        

        if (window.confirm("Are you sure to delete ?")) {

            console.log(item)

            setContents(prevState => { prevState.filter(data => data.id !== item.id) })

            { console.log("contents is :", contents) }
        }

        // console.log("filtered :", filtered)
        // (filtered)
        // body = [filtered]

    }

    // console.log(contents)
    // useEffect(() => {
    // }, [])


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