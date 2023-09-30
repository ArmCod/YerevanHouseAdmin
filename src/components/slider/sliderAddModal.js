import React, { useState } from 'react';
import Modal from "@mui/material/Modal";
import { Box, Tab, Tabs, } from "@mui/material";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';

import a11yProps from '../../utils/helpers/allprops';
import TabPanel from '../../utils/helpers/tabpanel';

import OnlyTitle from '../../utils/helpers/onlytitle';
import { SliderPost } from '../../store/actions/sliderAction';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 700,
    overflow: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const SliderAddModal = ({ openAdd, setOpenAdd }) => {
    const [value, setValue] = useState(0);
    const [image, setImage] = useState()
    const dispatch = useDispatch()

    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };

    const [data, setData] = useState({
        description_am: 'test',
        description_ru: 'test',
        description_en: 'test'
    })



    const handleChange = (e, k) => {
        data[e.target.name] = e.target.value;
        setData({ ...data })
    }


    const handleSubmit = async () => {

        dispatch(SliderPost(data))

        setOpenAdd(false)
        // setTimeout(() => {
        //     window.location.reload(false)
        // }, 1500)

    }

    // const handleFile = async (e) => {
    //     const image2 = await ConvertBase64(e);
    //     data.image = image2;
    //     setData({ ...data })
    //     setImage(e.target)
    // };

    return (
        <div>
            <Modal
                open={openAdd}
                onClose={() => setOpenAdd(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form onSubmit={handleSubmit}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Ավելացնել
                        </Typography>
                        <Box sx={{ width: "100%" }}>
                            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange2}
                                    aria-label="basic tabs example"
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                >
                                    <Tab label="Hy" {...a11yProps(0)} />
                                    <Tab label="En" {...a11yProps(1)} />
                                    <Tab label="Ru" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <OnlyTitle title="Վերնագիր" subTitle={data.title_am} handleChange={handleChange}
                                    text="Տեքստ" nametitle='title_am' />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <OnlyTitle title="Վերնագիր" subTitle={data.title_en} handleChange={handleChange}
                                    text="Տեքստ" nametitle='title_en' />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <OnlyTitle title="Վերնագիր" subTitle={data.title_ru} handleChange={handleChange}
                                    text="Տեքստ" nametitle='title_ru' />
                            </TabPanel>
                        </Box>
                        {/* <Box style={{ margin: "10px 0" }}>
                            <Button color="secondary" variant="contained" component="label">
                                Խմբագրել նկարը
                                <input type="file" hidden multiple onChange={handleFile} />
                            </Button>
                        </Box>
                        <Box>
                            <div style={{ width: 260 }}>
                                <img src={data.image} alt="image" style={{ width: "100%", }} />
                            </div>
                        </Box> */}
                        <Box>
                            <Button type='submit' color="secondary" variant="contained">Ավելացնել</Button>
                        </Box>
                    </Box>
                </form>
            </Modal>
        </div>
    );
}

export default SliderAddModal;