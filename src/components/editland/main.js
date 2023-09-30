import { TextField } from "@mui/material";
import { memo, useEffect, useMemo, useState } from "react";


const Main = ({ table, data, handleChange, type }) => {



    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: 'column',
                    maxWidth: 500
                }}
            >

                {/* <div
                    style={{
                        width: "250px",
                        height: "130px",
                    }}
                >
                    <h3>Գին</h3>
                    <TextField
                        name="price"
                        type={'number'}
                        value={data?.price}


                        onChange={handleChange}
                    />
                </div> */}

                {/* <div
                    style={{
                        width: "250px",
                        height: "130px",
                    }}
                >
                    <h3>Զուգարան</h3>
                    <TextField
                        name="tualet"
                        type={'number'}
                        value={data?.tualet}

                        onChange={handleChange}
                        required
                    />
                </div> */}
                <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Մակերես</h5>
                    <TextField name="area" inputProps={{ style: { padding: "10px 10px" } }} type={'number'} value={data?.area} onChange={handleChange} required />
                </div>
                {/* {table !== 'commerical' && table !== 'land' && <div
                    style={{
                        width: "250px",
                        height: "130px",
                    }}
                >
                    <h3>Բալկոն</h3>
                    <TextField name="balcon" type={'number'} value={data?.balcon} onChange={handleChange} required />
                </div>} */}

                {/* 
                <div
                    style={{
                        width: "250px",
                        height: "130px",
                    }}
                >
                    <h3>Տեսնված</h3>
                    <TextField name="viewed" type={'number'} value={data?.viewed} onChange={handleChange} />
                </div> */}
            </div>
        </>
    );
}

export default Main;