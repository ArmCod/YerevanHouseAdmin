import React from 'react';

const OnlyText = ({text, desc, handleChange, namedesc}) => {

    return (
        <>


            {text !== null && <h3 mt={3} mb={3} style={{
                margin: "10px 0 10px 0",
            }}>
                {text}
            </h3>}
             <textarea
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

export default OnlyText;