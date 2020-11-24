import React from 'react';

//import css
import './../css/PageTitle.css'

const PageTitle = ({ title }) => {
    return (
        <div className="title">
            <h2 className="h1">{title}</h2>
        </div>
    );
}

export default PageTitle;