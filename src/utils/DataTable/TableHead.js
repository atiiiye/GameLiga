import React from 'react';

//import css
import './../../css/TableHead.css'

//import packages
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const TableHead = ({ headers }) => {
    const [sortedField, setSortedField] = React.useState(null);

    // const { news } = props;

    // let sortable = [...news]

    // sortable.sort((a, b) => {

    //     if (a[sortConfig.key] < b[sortConfig.key]) {
    //         return sortConfig.direction === 'ascending' ? -1 : 1;
    //     }
    //     if (a[sortConfig.key] > b[sortConfig.key]) {
    //         return sortConfig.direction === 'ascending' ? 1 : -1;
    //     }
    //     return 0;
    // });

    // const requestSort = key => {
    //     let direction = 'ascending';
    //     if (sortConfig.key === key && sortConfig.direction === 'ascending') {
    //         direction = 'descending';
    //     }
    //     setSortConfig({ key, direction });
    // }

    const toggle = () => {
        let angel = document.querySelector('.sort-table')
        console.log(angel)
        angel.classList.toggle('descending')
    }

    return (
        <thead>
            { headers.map(header => (
                <tr className="header-row" key={header.id}>
                    <div className="header-box">
                        <th className="header-head" >#</th>
                    </div>
                    <div className="header-box title-box" style={{ width: "10%" }}>
                        <th className="header-head">{header.Title}</th>
                        <ArrowDownwardIcon
                            className="sort-table"
                            onClick={() => setSortedField('Title'), toggle} />
                    </div>
                    <div className="header-box title-box">
                        <th className="header-head">{header.Text}</th>
                        <ArrowDownwardIcon className="sort-table" onClick={() => setSortedField('Text'), toggle} />
                    </div>
                    {/* <div className="header-box" title-box>
                        <th className="header-head" >{header.Image}</th>
                    </div> */}
                    <div className="header-box title-box">
                        <th className="header-head" >{header.Auther}</th>
                        <ArrowDownwardIcon className="sort-table" onClick={() => setSortedField('Auther'), toggle} />
                    </div>
                    <div className="header-box title-box">
                        <th className="header-head" >{header.Date}</th>
                        <ArrowDownwardIcon className="sort-table" onClick={() => setSortedField('Date'), toggle} />
                    </div>
                    <div className="header-box title-box">
                        <th className="header-head" >{header.edit}</th>
                    </div>
                    <div className="header-box title-box">
                        <th className="header-head" >{header.delete}</th>
                    </div>
                </tr>
            ))}
        </thead>
    );
}

export default TableHead;