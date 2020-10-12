import React, { Component } from 'react';

//import css
import './../css/SearchBox.css'
import './../css/mediaSearchBox.css'

//import bootstrap
import { Form } from "react-bootstrap";

class SearchBox extends Component {
    state = {}

    render() {
        const { value, onChange } = this.props;
        return (
            <Form.Control
                className="search-box"
                placeholder="search..."
                type="text"
                name="query"
                value={value}
                onChange={e => onChange(e.target.value)}
            >
            </Form.Control>
        );
    }
}

export default SearchBox;