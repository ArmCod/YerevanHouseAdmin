import { Box, Button, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../../config/config";


const Client = ({ data, handleChange, Admins }) => {
    const [tiv, setTiv] = useState()
    const onViewClick = async () => {
        await axios.get(`${baseUrl}/phone/qanak?number=${data.client_phone}&type=${Admins?.[0]?.type}`)
            .then((res) => setTiv(res.data))
    }
    return (
        <Box>
            <Box mb={3}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                    <div>
                        <h3 style={{ margin: '10px 0 4px 2px', fontSize: 17 }}>Գին</h3>
                        <TextField
                            name="price"
                            type={'number'}
                            value={data?.price}
                            onChange={handleChange}
                            inputProps={{ style: { padding: "10px 10px" } }}
                            required
                        />
                    </div>
                    <div>
                        <select value={data?.paym} name="paym" style={{ color: 'white', backgroundColor: 'black', padding: '3px 4px', marginTop: 30, borderRadius: 0 }} onChange={handleChange}
                        >
                            <option value={0}>$</option>
                            <option value={1}>Պայմ․</option>
                        </select>

                    </div>
                </div>
            </Box>
            <div style={{ border: '1px solid black', padding: '10px', borderRadius: 10 }}>
                <Box>
                    <h3 style={{ margin: '10px 0 2px 2px', fontSize: 14 }}>Անուն</h3>
                    <TextField
                        name="client_name"
                        fullWidth
                        value={data.client_name}
                        onChange={handleChange}
                        inputProps={{ style: { padding: "10px 10px" } }}
                    />
                </Box>
                <Box>
                    <h3 style={{ margin: '10px 0 2px 2px', fontSize: 14 }}>Իրական Հասցե</h3>
                    <TextField
                        name="real_address"
                        fullWidth
                        value={data.real_address}
                        onChange={handleChange}
                        inputProps={{ style: { padding: "10px 10px" } }}
                    />
                </Box>
                <Box>
                    <h3 style={{ margin: '10px 0 2px 2px', fontSize: 14 }}>Սեփականատիրոչ Հեռախոսահամարը</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 50 }}>
                        <TextField
                            name="client_phone"
                            fullWidth
                            value={data.client_phone}
                            onChange={handleChange}
                            inputProps={{ style: { padding: "10px 10px" } }}
                        />
                        <span style={{ fontSize: 20 }}>{tiv}</span>
                        <Button color="secondary" variant="contained" onClick={() => onViewClick()}>
                            Տեսնել
                        </Button>
                    </div>
                </Box>
                <Box>
                    <h3 style={{ margin: '10px 0 2px 2px', fontSize: 14 }}>Նշումներ</h3>
                    <TextareaAutosize
                        name="notes"
                        aria-label="empty textarea"
                        style={{ width: '95%', height: 150, padding: '15px 10px', lineHeight: '20px', fontSize: '15px', overflowY: 'scroll' }}
                        className="staxko"
                        value={data.notes}
                        onChange={handleChange}
                    />
                </Box>

                {data.inner_code && <Box>
                    <h3 style={{ margin: '10px 0 2px 2px', fontSize: 14 }}>Ներքին կոդ </h3>
                    <TextField
                        name="inner_code"
                        fullWidth
                        value={data.inner_code}
                        onChange={handleChange}
                        inputProps={{ style: { padding: "10px 10px" } }}
                    />

                </Box>}
            </div>
        </Box>
    );
}

export default Client;