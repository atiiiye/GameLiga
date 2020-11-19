import React from 'react';

//import bootstrap

const TableHead = ({ headers }) => {

    const stylesThead = {
        color: "#fff",
        fontWeight: "bold",
        // display: "flex",
        // flexDirection:"row",
        // justifyContent:"flex-start"
    }

    return (
        <thead>
            {headers.map(header => (
                <tr key={header.id}>
                    <th style={stylesThead} >{header.id}</th>
                    <th style={stylesThead} >{header.Title}</th>
                    <th style={stylesThead} >{header.Text}</th>
                    <th style={stylesThead} >{header.Image}</th>
                    <th style={stylesThead} >{header.Auther}</th>
                    <th style={stylesThead} >{header.Date}</th>
                </tr>
            ))}
        </thead>
    );
}

export default TableHead;