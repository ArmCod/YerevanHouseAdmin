import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import a11yProps from "../../utils/helpers/allprops";
import TabPanel from "../../utils/helpers/tabpanel";
import TitleText from "../../utils/helpers/titletext";
import { useDispatch, useSelector } from "react-redux";
import { AdvantagesPut, getAdvantagesThunk } from "../../store/actions/advantagesAction";
import ConvertBase64 from "../../utils/helpers/base64";
import axios from "axios";
import { baseUrl, token } from "../../config/config";
import { LandmarkDelete, LandmarkPut, getLandmarkThunk } from '../../store/actions/landmarkAction';
import LandmarkAddModal from './landmarkAddModal';
import DeleteModal from "../../utils/helpers/deletemodal";
import { Link } from "react-router-dom";


const LandmarkComponent = () => {
    const [value, setValue] = useState(0);
    const [image, setImage] = useState()
    const dispatch = useDispatch()
    const landmark = useSelector(state => state.countryReducer.landmark)
    const [openAdd, setOpenAdd] = useState(false)
    const [openDel, setOpenDel] = useState(false)
    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };

    const [data, setData] = useState()

    useEffect(() => {
        dispatch(getLandmarkThunk())
    }, [])
    useEffect(() => {
        setData(landmark)
    }, [landmark]);

    const handleChange = (e, k) => {
        data[k][e.target.name] = e.target.value;
        setData([...data])
    }

    const handleSubmit = async (d, k) => {
        const formData = new FormData()
        if (image) {
            formData.append("id", d.id)
            formData.append("images", image?.files[0])
            setImage(null)
            await axios.post(`${baseUrl}/festival/changeimage`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    }
                })
        }
        dispatch(LandmarkPut(d))
    }

    const handleFile = async (e, k) => {
        const image2 = await ConvertBase64(e);
        data[k].images = image2;
        setData([...data])
        setImage(e.target)
    };


    return (
        <div className="container">
            <Link to="/" style={{ textDecoration: "none", }}><Button color="secondary" variant="contained">Գլխավոր</Button></Link>
            <Box m={3} >
                <h2 mt={3} mb={3}>
                    Տեսարժան վայրեր ֊ կարգավորումներ
                </h2>
                {data && data.map((i, k) => (
                    <div style={{ marginBottom: 60 }} key={i.id}>
                        <Box sx={{ width: "100%", }}>
                            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                <div style={{ display: 'flex' }}>
                                    {k + 1}
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
                            <TabPanel value={value} index={0}>
                                <TitleText title="Վերնագիր" subTitle={i.title_am} handleChange={(e) => handleChange(e, k)}
                                    text="Տեքստ" desc={i.description_am} namedesc='description_am' nametitle='title_am' />
                            </TabPanel>

                            <TabPanel value={value} index={1}>
                                <TitleText title="Վերնագիր" subTitle={i.title_en} handleChange={(e) => handleChange(e, k)}
                                    text="Տեքստ" desc={i.description_en} namedesc='description_en' nametitle='title_en' />
                            </TabPanel>

                            <TabPanel value={value} index={2}>
                                <TitleText title="Վերնագիր" subTitle={i.title_ru} handleChange={(e) => handleChange(e, k)}
                                    text="Տեքստ" desc={i.description_ru} namedesc='description_ru' nametitle='title_ru' />
                            </TabPanel>
                        </Box>
                        <Box>
                            {
                                data && (
                                    <div>
                                        <img src={i.images} alt="image" style={{
                                            width: "500px",
                                            height: "300px"
                                        }} />
                                        <Button color="secondary" variant="contained" component="label" style={{
                                            margin: "0 17px 35px 43px"
                                        }}>
                                            Խմբագրել նկարը
                                            <input type="file" hidden multiple onChange={(e) => handleFile(e, k)} />
                                        </Button>
                                    </div>
                                )
                            }
                        </Box>
                        <div style={{ display: 'flex', gap: 100 }}>
                            <Button color="secondary" variant="contained" onClick={() => handleSubmit(i)}>
                                ՀԱՍՏԱՏԵԼ
                            </Button>
                            <Button color="secondary" variant="contained" onClick={() => setOpenDel(true)}>
                                Ջնջել
                            </Button>
                            <DeleteModal open={openDel} setOpen={setOpenDel} id={i.id} action={LandmarkDelete} />
                        </div>
                    </div>))}
                <Button color="secondary" variant="contained" onClick={() => setOpenAdd(true)}>
                    Ավելացնել
                </Button>
                <LandmarkAddModal openAdd={openAdd} setOpenAdd={setOpenAdd} />

            </Box>
        </div>
    );
};

export default LandmarkComponent;