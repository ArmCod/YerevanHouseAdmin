import { TextField } from '@mui/material';
import React from 'react';

const OnlyTitle = ({ title, subTitle, handleChange, nametitle, type }) => {


    return (
        <>
            {title !== null &&
                <h3 mt={3} mb={3} style={{
                    margin: "10px 10px 10px 0",
                    display: 'inline'
                }}>
                    {title}
                </h3>}
            <TextField size="small" type={type ? type : 'text'} required name={nametitle} fullWidth={true} value={subTitle} onChange={handleChange} variant="outlined" />



        </>
    );
};

export default OnlyTitle;