import React from 'react';

//import bootstrap
import { Table } from 'reactstrap';

const TableHeader = () => {
    return ( 
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
        </thead>
     );
}
 
export default TableHeader;