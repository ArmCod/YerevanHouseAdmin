import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import a11yProps from "../../utils/helpers/allprops";
import TabPanel from "../../utils/helpers/tabpanel";
import TitleText from "../../utils/helpers/titletext";
import { useDispatch, useSelector } from "react-redux";
import { WishPut, getWishThunk } from "../../store/actions/conditionAction";
import { Link } from "react-router-dom";


const WishComponent = () => {
    const [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const wish = useSelector(state => state.conditionReducer.wish[0])
    const [data, setData] = useState()

    useEffect(() => {
        dispatch(getWishThunk())
    }, [])
    useEffect(() => {
        setData(wish)
    }, [wish]);

    const handleChange = (e) => {
        data[e.target.name] = e.target.value;
        setData({ ...data })

    }

    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };


    const handleSubmit = async (d) => {
        dispatch(WishPut(d))
    };



    return (
        <div className="container">
            <Link to="/" style={{ textDecoration: "none" }}><Button color="secondary" variant="contained">Գլխավոր</Button></Link>
            <Box m={3} >
                <h2 mt={3} mb={3}>
                    ՈՒղեցույց ֊ կարգավորումներ
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
                        <TitleText handleChange={handleChange}
                            text="Տեքստ" desc={data.description_am} namedesc='description_am' />
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <TitleText handleChange={handleChange}
                            text="Տեքստ" desc={data.description_en} namedesc='description_en' />
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <TitleText handleChange={handleChange}
                            text="Տեքստ" desc={data.description_ru} namedesc='description_ru' />
                    </TabPanel>
                </Box>}
                <Button color="secondary" variant="contained" onClick={() => handleSubmit(data)}>
                    ՀԱՍՏԱՏԵԼ
                </Button>
            </Box>
        </div>
    );
};

export default WishComponent;