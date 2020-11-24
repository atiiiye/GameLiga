import React from 'react';

//import css
import './../../css/TableHead.css'

//import packages
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const TableHead = ({ headers }) => {

    return (
        <thead>
            { headers.map(header => (
                <tr className="header-row" key={header.index}>
                    <div className="header-box">
                        <th className="header-head" >#</th>
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.Title}</th>
                        <ArrowDownwardIcon className="sort-table" />
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.Text}</th>
                        <ArrowDownwardIcon className="sort-table" />
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.Image}</th>
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.Auther}</th>
                        <ArrowDownwardIcon className="sort-table" />
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.Date}</th>
                        <ArrowDownwardIcon className="sort-table" />
                    </div>
                </tr>
            ))}
        </thead>
    );
}

export default TableHead;