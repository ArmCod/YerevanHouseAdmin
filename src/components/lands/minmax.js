import { Box, TextField } from "@mui/material";

const MinMax = ({ type, filter, handleChange }) => {

    return (<>
        <div style={{ display: 'flex', marginTop: 20, gap: 20 }}>
            <Box>
                <h5 style={{ margin: '3px 0', color: 'white', backgroundColor: 'black', padding: '5px 5px' }}>Մին․ մակերես</h5>
                <TextField
                    name="min_area"
                    fullWidth
                    value={filter.min_area}
                    onChange={handleChange}
                    placeholder="Մին․ մակերես"
                    size="small"
                />
            </Box>
            <Box>
                <h5 style={{ margin: '3px 0', color: 'white', backgroundColor: 'black', padding: '5px 5px' }}>Մաքս․ մակերես</h5>
                <TextField
                    name="max_area"
                    fullWidth
                    value={filter.max_area}
                    onChange={handleChange}
                    placeholder="Մաքս․ մակերես"
                    size="small"
                />
            </Box>
        </div>
        <div style={{ display: 'flex', marginTop: 20, gap: 20 }}>
            <Box>
                <h5 style={{ margin: '3px 0', color: 'white', backgroundColor: 'black', padding: '5px 5px' }}>Մին․ արժեք</h5>
                <TextField
                    name="min_price"
                    fullWidth
                    value={filter.min_price}
                    onChange={handleChange}
                    placeholder="Մին․ արժեք"
                    size="small"
                />
            </Box>
            <Box>
                <h5 style={{ margin: '3px 0', color: 'white', backgroundColor: 'black', padding: '5px 5px' }}>Մաքս․ արժեք</h5>
                <TextField
                    name="max_price"
                    fullWidth
                    value={filter.max_price}
                    onChange={handleChange}
                    placeholder="Մաքս․ արժեք"
                    size="small"
                />
            </Box>
        </div>

    </>);
}

export default MinMax;