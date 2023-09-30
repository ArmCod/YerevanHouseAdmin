import { Box, Tab, Tabs, TextareaAutosize, TextField } from "@mui/material";
import { memo, useEffect, useState } from "react";
import a11yProps from "../../utils/helpers/allprops";
import TabPanel from "../../utils/helpers/tabpanel";


const DescriptionSection = memo(({ data, handleChange }) => {
    const [value, setValue] = useState(0);
    // const [data, setData] = useState({ title_hy: '', body_hy: '', title_ru: '', body_ru: '', title_en: '', body_en: '', })
    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange2}
                    aria-label="basic tabs example"
                >
                    <Tab label="Hy" {...a11yProps(0)} />
                    <Tab label="Ru" {...a11yProps(1)} />
                    <Tab label="En" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box>
                    <TextField
                        name="title_hy"
                        value={data?.title_hy}
                        fullWidth
                        onChange={handleChange}
                        placeholder="Title Hy"
                    />
                </Box>
                <Box style={{ margin: "20px 0" }}>
                    <TextareaAutosize
                        name="body_hy"
                        aria-label="empty textarea"
                        placeholder="Description Hy"
                        style={{ width: 800, height: 50, padding: 10 }}
                        value={data?.body_hy}
                        onChange={handleChange}
                    />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box>
                    <TextField
                        name="title_ru"
                        fullWidth
                        value={data?.title_ru}
                        onChange={handleChange}
                        placeholder="Title Ru"
                    />
                </Box>
                <Box style={{ margin: "20px 0" }}>
                    <TextareaAutosize
                        name="body_ru"
                        aria-label="empty textarea"
                        placeholder="Description Ru"
                        style={{ width: 800, height: 50, padding: 10 }}
                        value={data?.body_ru}
                        onChange={handleChange}
                    />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box>
                    <TextField
                        fullWidth
                        name="title_en"
                        value={data?.title_en}
                        onChange={handleChange}
                        placeholder="Title EN"

                    />
                </Box>
                <Box style={{ margin: "20px 0" }}>
                    <TextareaAutosize
                        name="body_en"
                        aria-label="empty textarea"
                        placeholder="Description En"
                        style={{ width: 800, height: 50, padding: 10 }}
                        value={data?.body_en}
                        onChange={handleChange}
                    />
                </Box>
            </TabPanel>
        </Box>
    );
})

export default DescriptionSection;