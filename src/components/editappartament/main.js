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
                <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Բնակելի մակերես</h5>
                    <TextField inputProps={{ style: { padding: "10px 10px" } }} name="area" type={'number'} value={data?.area} onChange={handleChange} required />
                </div>
                <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Սենյակներ</h5>
                    <TextField inputProps={{ style: { padding: "10px 10px" } }} name="rooms" type={'number'} required value={data?.rooms} onChange={handleChange} />
                </div>
                <div
                    style={{
                        width: "460px",
                        height: "70px",
                        display: "flex",
                        gap: 30,
                    }}
                >
                    <div>
                        <h5 style={{ margin: '5px 0' }}>Հարկ</h5>
                        <TextField inputProps={{ style: { padding: "10px 10px" } }}
                            name="current_floor"
                            type={'number'}
                            value={data?.current_floor}

                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <h5 style={{ margin: '5px 0' }}>Շենք</h5>
                        <TextField inputProps={{ style: { padding: "10px 10px" } }}
                            name="flat_floor"
                            type={'number'}
                            value={data?.flat_floor}

                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Սանհանգույցներ</h5>
                    <TextField inputProps={{ style: { padding: "10px 10px" } }}
                        type={'number'}
                        name="bathroom"
                        value={data?.bathroom}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Գին</h5>
                    <TextField inputProps={{ style: { padding: "10px 10px" } }}
                        name="price"
                        type={'number'}
                        value={data?.price}



                        onChange={handleChange}
                    />
                </div> */}
                {table !== 'land' && type !== 'Sale' && <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Կանխավճար</h5>
                    <TextField inputProps={{ style: { padding: "10px 10px" } }} name="advance" type={'number'} required value={data?.advance} onChange={handleChange} />
                </div>}

                {/* <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Զուգարան</h5>
                    <TextField inputProps={{ style: { padding: "10px 10px" } }}
                        name="tualet"
                        type={'number'}
                        value={data?.tualet}

                        onChange={handleChange}
                        required
                    />
                </div> */}

                {/* {table !== 'commerical' && table !== 'land' && <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Բալկոն</h5>
                    <TextField inputProps={{ style: { padding: "10px 10px" } }} name="balcon" type={'number'} value={data?.balcon} onChange={handleChange} required />
                </div>} */}
                {table !== 'commerical' && table !== 'land' && type !== "Sale" && <>
                    <div
                        style={{
                            width: "250px",
                            height: "70px",
                        }}
                    >
                        <h5 style={{ margin: '5px 0' }}>Մեկ մահճակալ</h5>
                        <TextField inputProps={{ style: { padding: "10px 10px" } }} name="one_bed" type={'number'} value={data?.one_bed} onChange={handleChange} required />
                    </div>
                    <div
                        style={{
                            width: "250px",
                            height: "70px",
                        }}
                    >
                        <h5 style={{ margin: '5px 0' }}>Երկու մահճակալ</h5>
                        <TextField inputProps={{ style: { padding: "10px 10px" } }} name="two_bed" type={'number'} value={data?.two_bed} onChange={handleChange} required />
                    </div>
                    <div
                        style={{
                            width: "250px",
                            height: "70px",
                        }}
                    >
                        <h5 style={{ margin: '5px 0' }}>Անձանց քանակ</h5>
                        <TextField inputProps={{ style: { padding: "10px 10px" } }} name="peoples" type={'number'} value={data?.peoples} onChange={handleChange} required />
                    </div>
                    <div
                        style={{
                            width: "250px",
                            height: "70px",
                        }}
                    >
                        <h5 style={{ margin: '5px 0' }}>Լրացուցիչ մահճակալ</h5>
                        <TextField inputProps={{ style: { padding: "10px 10px" } }} name="bed" type={'number'} value={data?.bed} onChange={handleChange} required />
                    </div>
                </>}
                {table !== "flat" && table !== 'commercial' && <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Ընդհանուր մակերես</h5>
                    <TextField inputProps={{ style: { padding: "10px 10px" } }} name="lead_area" type={'number'} required value={data?.lead_area} onChange={handleChange} />
                </div>}

                {/* <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Տեսնված</h5>
                    <TextField inputProps={{ style: { padding: "10px 10px" } }} name="viewed" type={'number'} value={data?.viewed} onChange={handleChange} />
                </div> */}
            </div>
        </>
    );
}

export default Main;