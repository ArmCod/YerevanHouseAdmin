import React, { useEffect, useState } from 'react';
import Modal from "@mui/material/Modal";
import { Box, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

import axios from "axios";
import { baseUrl, token } from "../../config/config";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';
import ConvertBase64 from '../../utils/helpers/base64';
import a11yProps from '../../utils/helpers/allprops';
import TabPanel from '../../utils/helpers/tabpanel';
import TitleText from '../../utils/helpers/titletext';
import Both from '../../utils/helpers/both';
import { FestivalPost } from '../../store/actions/festivalAction';
import OnlyTitle from '../../utils/helpers/onlytitle';
import { addAdminsThunk } from '../../store/actions/adminAction';

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

const UserAddModal = ({ openAdd, setOpenAdd }) => {

    const dispatch = useDispatch()
    const [data, setData] = useState({
        type: 'admin',
        name: '',
        email: '',
        phone: '',
        password: ''
    })
    const handleChange = (e, k) => {
        data[e.target.name] = e.target.value;
        setData({ ...data })
    }


    const handleSubmit = async () => {

        dispatch(addAdminsThunk(data))
        setOpenAdd(false)
        // setTimeout(() => {
        //     window.location.reload(false)
        // }, 1500)

    }


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
                        <div style={{ margin: '13px 0' }}>
                            <OnlyTitle title={'Անուն'} subTitle={data.name} handleChange={handleChange} nametitle={'name'} />
                        </div>
                        <div style={{ margin: '13px 0' }}>
                            <OnlyTitle title={'Էլ․ հասցե'} type={'email'} subTitle={data.email} handleChange={handleChange} nametitle={'email'} />
                        </div>
                        <div style={{ margin: '13px 0' }}>
                            <OnlyTitle title={'Հեռախոսահամար'} type={'number'} subTitle={data.phone} handleChange={handleChange} nametitle={'phone'} />
                        </div>
                        <div style={{ margin: '13px 0' }}>
                            <OnlyTitle title={'Գաղտնաբառ'} subTitle={data.password} handleChange={handleChange} nametitle={'password'} />
                        </div>
                        <div style={{ margin: '13px 0' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Բաժին</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={data.type}
                                    label="Բաժին"
                                    name="type"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"admin"}>Ադմին</MenuItem>
                                    <MenuItem value={"seller"}>Վարձակալություն</MenuItem>
                                    <MenuItem value={"daily"}>Օրավարձ</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <Box>
                            <Button type='submit' color="secondary" variant="contained">Ավելացնել</Button>
                        </Box>
                    </Box>
                </form>
            </Modal>
        </div>
    );
}

export default UserAddModal;