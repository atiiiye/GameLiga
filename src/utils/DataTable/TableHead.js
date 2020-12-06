import React, { useEffect } from 'react';

//import css
import './../../css/TableHead.css'

//import packages
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const TableHead = ({ headers, sortBy }) => {
    const [angleState, setAngleState] = React.useState([]);


    const toggle = () => {
        let angles = document.querySelectorAll('.sort-table')
        angles.forEach(angle => angle.addEventListener('click', () => {
            angle.classList.toggle('descending')
            
            console.log(angle);
        }))
    }

    // useEffect(() => {
    //     setAngleState(toggle)

    // }, [angleState])

    return (
        <thead>
            { headers.map(header => (
                <tr className="header-row" key={header.id}>
                    <div className="header-box" id={0}>
                        <th className="header-head" >#</th>
                    </div>
                    <div className="header-box title-box" id={1} onClick={() => sortBy(header.Title), toggle}>
                        <th className="header-head">{header.Title}</th>
                        <ArrowDownwardIcon
                            focusable="true"
                            className="sort-table"
                            />
                    </div>
                    <div className="header-box title-box" id={2} onClick={() => sortBy(header.Text), toggle}>
                        <th className="header-head">{header.Text}</th>
                        <ArrowDownwardIcon
                            focusable="true"
                            className="sort-table"
                            />
                    </div>
                    {/* <div className="header-box title-box" id={3}>
                        <th className="header-head" >{header.Image}</th>
                    </div> */}
                    <div className="header-box title-box" id={4} onClick={() => sortBy(header.Auther), toggle}>
                        <th className="header-head" >{header.Auther}</th>
                        <ArrowDownwardIcon
                            focusable="true"
                            className="sort-table"
                            />
                    </div>
                    <div className="header-box title-box" id={5} onClick={() => sortBy(header.Date), toggle}>
                        <th className="header-head" >{header.Date}</th>
                        <ArrowDownwardIcon
                            focusable="true"
                            className="sort-table"
                            />
                    </div>
                    <div className="header-box title-box" id={6}>
                        <th className="header-head" >{header.edit}</th>
                    </div>
                    <div className="header-box title-box" id={7}>
                        <th className="header-head" >{header.delete}</th>
                    </div>
                </tr>
            ))}
        </thead>
    );
}

export default TableHead;