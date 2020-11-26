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

    return (
        <thead>
            { headers.map(header => (
                <tr className="header-row" key={header.id}>
                    <div className="header-box">
                        <th className="header-head" >#</th>
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.Title}</th>
                        <ArrowDownwardIcon className="sort-table" onClick={() => setSortedField('Title')} />
                    </div>
                    <div className="header-box">
                        <th className="header-head">{header.Text}</th>
                        <ArrowDownwardIcon className="sort-table" onClick={() => setSortedField('Text')} />
                    </div>
                    {/* <div className="header-box">
                        <th className="header-head" >{header.Image}</th>
                    </div> */}
                    <div className="header-box">
                        <th className="header-head" >{header.Auther}</th>
                        <ArrowDownwardIcon className="sort-table" onClick={() => setSortedField('Auther')} />
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.Date}</th>
                        <ArrowDownwardIcon className="sort-table" onClick={() => setSortedField('Date')} />
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.edit}</th>
                    </div>
                    <div className="header-box">
                        <th className="header-head" >{header.delete}</th>
                    </div>
                </tr>
            ))}
        </thead>
    );
}

export default TableHead;