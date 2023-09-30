import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const Radios = () => {
    return (
        <>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"><span style={{ color: 'white', backgroundColor: 'black', padding: '3px 5px' }}>Շինության տիպ</span></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={'none'}
                    name="radio-buttons-group"
                    onChange={handleTypeChange}
                >
                    <div styler={{ display: 'flex' }}>
                        <FormControlLabel value="monolith" name="monolith" control={<Radio />} label="Մոնոլիտ" />
                        <FormControlLabel value="lets draw" name="lets_draw" control={<Radio />} label="Քարե" />
                        <FormControlLabel value="panel" name="panel" control={<Radio />} label="Պանելային" />
                    </div>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Վերանորոգում</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={'none'}
                    name="radio-buttons-group"
                    onChange={handleRenovateChange}
                >
                    <div styler={{ display: 'flex' }}>
                        <FormControlLabel value="no renovated" name="no_renovated" control={<Radio />} label="Չվերանորոգված" />
                        <FormControlLabel value="old renovated" name="old_renovated" control={<Radio />} label="Հին վերանորոգված" />
                        <FormControlLabel value="partially renovated" name="partially_renovated" control={<Radio />} label="Մասնակի" />
                        <FormControlLabel value="cosmetic renovated" name="cosmetic_renovated" control={<Radio />} label="Կոսմետիկ" />
                        <FormControlLabel value="euro renovated" name="euro_renovated" control={<Radio />} label="Եվրովերանորոգում" />
                        <FormControlLabel value="lets draw" name="lets_draw" control={<Radio />} label="Դիզայներական" />
                        <FormControlLabel value="generally renovated" name="generally_renovated" control={<Radio />} label="Կապիտալ" />
                    </div>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Սանհանգույցների քանակ</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={'none'}
                    name="bathroom"
                    onChange={handleBathroomChange}
                >
                    <div styler={{ display: 'flex' }}>
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4+" />
                    </div>
                </RadioGroup>
            </FormControl>
        </>);
}

export default Radios;