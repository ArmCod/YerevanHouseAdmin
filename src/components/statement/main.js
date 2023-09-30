import { TextField } from "@mui/material";
import { memo, useEffect, useMemo, useState } from "react";


const Main = ({ table, data, handleChange, type }) => {

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    flexWrap: "wrap",
                    maxWidth: 500
                }}
            >

                <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>{table === 'land' || table === 'commerical' ? 'Մակերես' : 'Բնակելի մակերես'}</h5>
                    <TextField name="area" type={'number'} inputProps={{ style: { padding: "10px 10px" } }} required value={data.area} onChange={handleChange} />
                </div>
                {table !== "flat" && table !== 'land' && <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Ընդհանուր մակերես</h5>
                    <TextField name="lead_area" inputProps={{ style: { padding: "10px 10px" } }} type={'number'} required={table !== 'commerical'} value={data.lead_area} onChange={handleChange} />
                </div>}
                {table !== 'land' && <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Սենյակներ</h5>
                    <TextField name="rooms" inputProps={{ style: { padding: "10px 10px" } }} type={'number'} required value={data?.rooms} onChange={handleChange} />
                </div>}
                {table !== 'land' && <div
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
                    {(table === 'flat' || table === 'commerical') && <div>
                        <h5 style={{ margin: '5px 0' }}>Շենք</h5>
                        <TextField inputProps={{ style: { padding: "10px 10px" } }}
                            name="flat_floor"
                            type={'number'}
                            value={data?.flat_floor}

                            onChange={handleChange}
                        />
                    </div>}
                </div>}
                {table !== 'land' && <div
                    style={{
                        width: "250px",
                        height: "70px",
                    }}
                >
                    <h5 style={{ margin: '5px 0' }}>Սանհանգույցներ</h5>
                    <TextField
                        type={'number'}
                        name="bathroom"
                        required
                        value={data.bathroom}
                        onChange={handleChange}
                        inputProps={{ style: { padding: "10px 10px" } }}
                    />
                </div>}
                {/* <div
                    style={{
                        width: "250px",
                        height: "200px",
                    }}
                >
                    <h3>Գին</h3>
                    <TextField
                        name="price"

                        type={'number'}
                        value={data.price}
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
                    <TextField name="new_inner" type={'number'} inputProps={{ style: { padding: "10px 10px" } }} required value={data.new_inner} onChange={handleChange} />
                </div>}
                {/* <div
                    style={{
                        width: "250px",
                        height: "200px",
                    }}
                >
                    <h3>Զուգարան</h3>
                    <TextField
                        name="tualet"
                        type={'number'}
                        value={data.tualet}
                        onChange={handleChange}
                    />
                </div> */}
                {/* {table !== 'commerical' && table !== 'land' && <div
                    style={{
                        width: "250px",
                        height: "200px",
                    }}
                >
                    <h3>Բալկոն</h3>
                    <TextField name="balcon" type={'number'} value={data.balcon} onChange={handleChange} />
                </div>} */}
                {table !== 'commerical' && table !== 'land' && type !== 'Sale' && <>
                    <div
                        style={{
                            width: "250px",
                            height: "70px",
                        }}
                    >
                        <h5 style={{ margin: '5px 0' }}>Մեկ մահճակալ</h5>
                        <TextField name="one_bed" inputProps={{ style: { padding: "10px 10px" } }} type={'number'} required value={data.one_bed} onChange={handleChange} />
                    </div>
                    <div
                        style={{
                            width: "250px",
                            height: "70px",
                        }}
                    >
                        <h5 style={{ margin: '5px 0' }}>Երկու մահճակալ</h5>
                        <TextField name="two_bed" inputProps={{ style: { padding: "10px 10px" } }} type={'number'} required value={data.two_bed} onChange={handleChange} />
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

                {/* <div
                    style={{
                        width: "250px",
                        height: "130px",
                    }}
                >
                    <h3>Տեսնված</h3>
                    <TextField name="viewed" type={'number'} value={data.viewed} onChange={handleChange} />
                </div> */}
            </div>
        </>
    );
}

export default Main;
