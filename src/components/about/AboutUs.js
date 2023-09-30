import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import "./aboutUs.css";
import { baseUrl, token } from "../../config/config";
import axios from "axios";
import a11yProps from "../../utils/helpers/allprops";
import TabPanel from "../../utils/helpers/tabpanel";
import TitleText from "../../utils/helpers/titletext";
import { useDispatch, useSelector } from "react-redux";
import { AboutPut, getAboutUsThunk } from "../../store/actions/aboutUsAction";
import ConvertBase64 from "../../utils/helpers/base64";

const AboutUs = () => {
    const [value, setValue] = useState(0);
    const [image, setImage] = useState()
    const dispatch = useDispatch()
    const aboutUs = useSelector(state => state.aboutUsReducer.aboutUs[0])
    const [data, setData] = useState()

    useEffect(() => {
        dispatch(getAboutUsThunk())
    }, [])
    useEffect(() => {
        setData(aboutUs)
    }, [aboutUs]);

    const handleChange = (e) => {
        data[e.target.name] = e.target.value;
        setData({ ...data })

    }

    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubmit = async (d) => {
        const formData = new FormData()
        if (image) {
            formData.append("images", image?.files[0])
            await axios.post(`${baseUrl}/about/changeimage?id=${d.id}`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    }
                })
        }
        dispatch(AboutPut(d))
    };
    const handleFile = async (e) => {
        const image2 = await ConvertBase64(e);
        data.images = image2;
        setData({ ...data })
        setImage(e.target)
    };



    return (
        <div >
            <Box m={3} >
                <h2 mt={3} mb={3}>
                    Մեր մասին ֊ կարգավորումներ
                </h2>
                {data && <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
                    </Box>
                    <TabPanel value={value} index={0}>
                        <TitleText title="Վերնագիր" subTitle={data.title_am} handleChange={handleChange}
                            text="Տեքստ" desc={data.description_am} namedesc='description_am' nametitle='title_am' />
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <TitleText title="Վերնագիր" subTitle={data.title_en} handleChange={handleChange}
                            text="Տեքստ" desc={data.description_en} namedesc='description_en' nametitle='title_en' />
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <TitleText title="Վերնագիր" subTitle={data.title_ru} handleChange={handleChange}
                            text="Տեքստ" desc={data.description_ru} namedesc='description_ru' nametitle='title_ru' />
                    </TabPanel>
                </Box>}
                <Box>
                    {
                        data && (
                            <div>
                                <img src={data.images} alt="image" style={{
                                    width: "500px",
                                    height: "300px"
                                }} />
                                <Button color="secondary" variant="contained" component="label" style={{
                                    margin: "0 17px 35px 43px"
                                }}>
                                    Խմբագրել նկարը
                                    <input type="file" hidden multiple onChange={handleFile} />
                                </Button>
                            </div>
                        )
                    }
                </Box>
                <Button color="secondary" variant="contained" onClick={() => handleSubmit(data)}>
                    ՀԱՍՏԱՏԵԼ
                </Button>
            </Box>
        </div>
    );
};

export default AboutUs;