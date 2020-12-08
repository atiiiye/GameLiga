import React, { useEffect } from 'react';

//import css
import './../../css/TableHead.css'

//import packages
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const TableHead = ({ headers, sortBy, body }) => {
    const [angleState, setAngleState] = React.useState([]);


    const toggle = () => {
        let tHeaders = document.querySelectorAll('th.header-head')
        tHeaders.forEach(tHeader => tHeader.addEventListener('click', () => {
            if (tHeader.classList.contains('descending')) {

                tHeader.classList.remove('descending')
                tHeader.classList.add('ascending')
            } else if (tHeader.classList.contains('ascending')) {

                tHeader.classList.remove('ascending')
                tHeader.classList.add('descending')
            } else {
                tHeader.classList.add('ascending')
            }

            console.log(tHeader);
        }))
    }

    // useEffect(() => {
    //     setAngleState(toggle)
    //     iterator()
    // }, [])
    // const iterator = () => {
    //     let items = body.map(item => console.log(item))
    // }

    return (
        <thead>
            { headers.map(header => (
                <tr className="header-row" key={header.id}>
                    <th className="header-head" >#</th>

                    <th className="header-head title" id="1" onClick={() => sortBy(header.Title), toggle}>{header.Title}</th>

                    <th className="header-head text" id="2" onClick={() => sortBy(header.Text), toggle}>{header.Text}</th>

                    <th className="header-head" id="3" onClick={() => sortBy(header.Image), toggle}>{header.Image}</th>

                    <th className="header-head auther" id="4" onClick={() => sortBy(header.Auther), toggle}>{header.Auther}</th>

                    <th className="header-head date" id="5" onClick={() => sortBy(header.Date), toggle}>{header.Date}</th>

                    <th className="header-head edit" id="6" >{header.edit}</th>

                    <th className="header-head delete" id="7" >{header.delete}</th>
                </tr>
            ))}
        </thead>
    );
}

export default TableHead;