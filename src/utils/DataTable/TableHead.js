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
                        <th className="header-head" >{header.Title.toUpperCase()}</th>
                        <ArrowDownwardIcon className="sort-table" />
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.Text.toUpperCase()}</th>
                        <ArrowDownwardIcon className="sort-table" />
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.Image.toUpperCase()}</th>
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.Auther.toUpperCase()}</th>
                        <ArrowDownwardIcon className="sort-table" />
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.Date.toUpperCase()}</th>
                        <ArrowDownwardIcon className="sort-table" />
                    </div>
                </tr>
            ))}
        </thead>
    );
}

export default TableHead;