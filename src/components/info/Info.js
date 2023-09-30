import { Box, Button, Tab, Tabs, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getInfoThunk, InfoPut } from "../../store/actions/infoAction";
import a11yProps from "../../utils/helpers/allprops";
import TabPanel from "../../utils/helpers/tabpanel";
import "./info.css";

const InfoComponent = () => {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const info = useSelector((state) => state.infoReducer.info[0]);
    const [data, setData] = useState();

    const handleChange = (e) => {
        data[e.target.name] = e.target.value;
        setData(data);
    };

    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };


    useEffect(() => {
        dispatch(getInfoThunk());
    }, []);
    useEffect(() => {
        setData(info)
    }, [info])

    const handleEdit = () => {
        dispatch(InfoPut(data))
    }

    return (
        <div className="container">
            <Link to="/" style={{ textDecoration: "none" }}><Button color="secondary" variant="contained">Գլխավոր</Button></Link>
            <Box m={3} >
                <h2 mt={3} mb={3}>
                    Կոնտակտային տվյալներ ֊ կարգավորումներ
                </h2>
                {data && (
                    <Box sx={{ width: "100%" }} className="infoBox">
                        <div>
                            <h4>Վաճառքի Էլ․ հասցե</h4>
                            <TextField
                                id="standard-basic"
                                label="Էլ․ հասցե"
                                name="sale_email"
                                defaultValue={data.sale_email}
                                onChange={handleChange}
                                variant="standard"
                            />
                        </div>
                        <div>
                            <h4>Վարձակալության Էլ․ հասցե</h4>
                            <TextField
                                id="standard-basic"
                                label="Էլ․ հասցե"
                                name="rent_email"
                                defaultValue={data.rent_email}
                                onChange={handleChange}
                                variant="standard"
                            />
                        </div>
                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <div style={{ display: 'flex' }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange2}
                                    aria-label="basic tabs example"
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                >

                                    <Tab label="Arm" {...a11yProps(0)} />
                                    <Tab label="En" {...a11yProps(1)} />
                                    <Tab label="Ru" {...a11yProps(2)} />
                                </Tabs>
                            </div>
                        </Box>
                        <hr className="hr" />

                        <TabPanel value={value} index={0}>
                            <h4>Հասցե հայերեն</h4>
                            <TextField
                                id="standard-basic"
                                label="Հասցե հայերեն"
                                onChange={handleChange}
                                name="address_am"
                                variant="standard"
                                defaultValue={data.address_am}
                            />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <h4>Հասցե անգլերեն</h4>
                            <TextField
                                id="standard-basic"
                                label="Հասցե անգլերեն"
                                onChange={handleChange}
                                name="address_en"
                                variant="standard"
                                defaultValue={data.address_en}
                            />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <h4>Հասցե ռուսերեն</h4>
                            <TextField
                                id="standard-basic"
                                label="Հասցե ռուսերեն"
                                onChange={handleChange}
                                name="address_ru"
                                variant="standard"
                                defaultValue={data.address_ru}
                            />
                        </TabPanel>
                        <hr className="hr" />
                        <div>
                            <h4>Վաճառքի բաժին</h4>
                            <TextField
                                id="standard-basic"
                                label="Վաճառքի բաժին"
                                name="vatarqi_bazhin"
                                onChange={handleChange}
                                variant="standard"
                                defaultValue={data.vatarqi_bazhin}
                            />
                        </div>
                        <hr className="hr" />
                        <div>
                            <h4>Վարձակալության բաժին</h4>
                            <TextField
                                id="standard-basic"
                                label="Վարձակալության բաժին"
                                onChange={handleChange}
                                name="vardzakalutyan_bazhin"
                                variant="standard"
                                defaultValue={data.vardzakalutyan_bazhin}
                            />
                        </div>
                        <hr className="hr" />
                        <div>
                            <h4>Facebook</h4>
                            <TextField
                                id="standard-basic"
                                label="facebook"
                                name="facebook"
                                onChange={handleChange}
                                variant="standard"
                                defaultValue={data.facebook}
                            />
                        </div>

                        <hr className="hr" />

                        <div>
                            <h4>Instagram</h4>
                            <TextField
                                id="standard-basic"
                                label="instagram"
                                name="instagram"
                                onChange={handleChange}
                                variant="standard"
                                defaultValue={data.instagram}
                            />
                        </div>

                        <hr className="hr" />
                        <div>
                            <Button variant="contained" onClick={handleEdit} color="secondary">
                                ՀԱՍՏԱՏԵԼ
                            </Button>
                        </div>
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default InfoComponent;
