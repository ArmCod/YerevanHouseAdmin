import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import "./aboutUs.css";
import { useDispatch, useSelector } from "react-redux";
import { getStrideThunk, StridePut } from "../../store/actions/aboutUsAction";



const Stride = () => {

    const [data, setData] = useState()
    const dispatch = useDispatch()
    const aboutUsInfo = useSelector(state => state.aboutUsReducer.aboutUsInfo)


    useEffect(() => {
        dispatch(getStrideThunk())
    }, [])

    useEffect(() => {
        setData(aboutUsInfo)
    }, [aboutUsInfo])

    const handleChange = (e, k) => {
        data[k][e.target.name] = e.target.value;
        setData([...data])
    }

    const handleSubmit = (d) => {
        dispatch(StridePut(d))
    }


    return (
        <div>
            <Box m={3} >
                <h2 mt={3} mb={3}>
                    Հաջողությունները ֊ կարգավորումներ
                </h2>
                <div style={{ display: 'flex' }}>
                    {data && Array.isArray(data) && data?.map((i, k) => (<div style={{ marginRight: 20 }} key={i.id}>
                        <Box sx={{ width: "100%", marginTop: 1 }}>
                            <TextField name="info" value={i.info} onChange={(e) => handleChange(e, k)} variant="outlined" placeholder="text_am" />
                        </Box>
                        <Box sx={{ width: "100%", marginTop: 1 }}>
                            <TextField name="text_am" value={i.text_am} onChange={(e) => handleChange(e, k)} variant="outlined" placeholder="text_am" />
                        </Box>
                        <Box sx={{ width: "100%", marginTop: 1 }}>
                            <TextField name="text_ru" value={i.text_ru} onChange={(e) => handleChange(e, k)} variant="outlined" placeholder="text_ru" />
                        </Box>
                        <Box sx={{ width: "100%", marginTop: 1 }}>
                            <TextField name="text_en" value={i.text_en} onChange={(e) => handleChange(e, k)} variant="outlined" placeholder="text_en" />
                        </Box>
                        <Box sx={{ width: "100%", marginTop: 1 }}>
                            <Button color="secondary" variant="contained" onClick={() => handleSubmit(i, k)}>
                                ՀԱՍՏԱՏԵԼ
                            </Button>
                        </Box>
                    </div>))}
                </div>
            </Box>
        </div>
    );
};

export default Stride;