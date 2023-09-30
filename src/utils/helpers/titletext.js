import { TextField } from '@mui/material';
import React from 'react';

const TitleText = ({ title, subTitle, text, desc, handleChange, namedesc, nametitle }) => {

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {title !== null &&
                    <h3 mt={3} mb={3} style={{
                        margin: "10px 10px 10px 0",
                        display: 'inline'
                    }}>
                        {title}
                    </h3>}
                {subTitle !== undefined && <TextField size="small" sx={{ width: 500 }} name={nametitle} value={subTitle} onChange={handleChange} variant="outlined" />}
            </div>

            {text !== null && <h3 mt={3} mb={3} style={{
                margin: "10px 0 10px 0",
            }}>
                {text}
            </h3>}
            {desc !== undefined && <textarea
                id="w3review"
                name={namedesc}
                rows="6"
                maxLength="2000"
                cols="40"
                className="textareaText"
                value={desc}
                onChange={handleChange}
            />}
        </>
    );
};

export default TitleText;