import { TextField } from '@mui/material';
import React from 'react';

const Both = ({ title, subTitle, text, desc, handleChange, namedesc, nametitle}) => {

    return (
        <>
            {title !== null &&
                <h3 mt={3} mb={3} style={{
                    margin: "10px 10px 10px 0",
                    display: 'inline'
                }}>
                    {title}
                </h3>}
            <TextField required size="small" name={nametitle} fullWidth={true} value={subTitle} onChange={handleChange} variant="outlined" />


            {text !== null && <h3 mt={3} mb={3} style={{
                margin: "10px 0 10px 0",
            }}>
                {text}
            </h3>}
           <textarea
           required
                id="w3review"
                name={namedesc}
                rows="6"
                maxLength="2000"
                cols="40"
                className="textareaText"
                value={desc}
                onChange={handleChange}
            />
        </>
    );
};

export default Both;