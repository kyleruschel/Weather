import React from 'react';
import { Form } from 'react-bootstrap';
import './input.css';

const Input = ({ onSubmit, setVal, searchVal }) => {
    return (
        <div className='inputRootContainer'>
            <Form onSubmit={onSubmit}>
                <Form.Control
                    type="text"
                    placeholder="Search city"
                    className="mb-3"
                    onChange={e => setVal(e.target.value)}
                    value={searchVal} />
            </Form>
        </div>
    )
}

export default Input;