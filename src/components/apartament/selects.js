import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCitiesThunk, getCityThunk, getRegionThunk } from "../../store/actions/regionAction";

const Selects = ({ filter, handleChange, setFilter }) => {
    const dispatch = useDispatch()
    const region = useSelector(state => state.regionReducer.region)
    const city = useSelector(state => state.regionReducer.city)
    let [regId, setRegId] = useState(1)

    useEffect(() => {
        dispatch(getRegionThunk())
        dispatch(getCitiesThunk())
    }, [])
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Մարզերը</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.region}
                    label="Մարզերը"
                    name="region"

                    onChange={(e) => {
                        if (e.target.value !== 'none') {
                            let a = region?.find(res => res.title_en === e.target.value)?.id
                            regId = a
                            setRegId(regId)
                            dispatch(getCityThunk(regId))
                        } else {
                            dispatch(getCitiesThunk())
                        }

                        handleChange(e)
                        setFilter({ ...filter, city: '' })
                    }}
                >
                    <MenuItem value={'none'} >Բոլոր Մարզերը</MenuItem>
                    {region?.map((reg) => {
                        if (reg.id !== 12) {
                            return <MenuItem value={reg.title_en} key={reg.id}>{reg.title_am}</MenuItem>
                        }
                    })}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Քաղաքները</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.city}
                    name="city"

                    label="Քաղաքները"
                    onChange={handleChange}
                >
                    <MenuItem value={'none'} >Բոլոր քաղաքները</MenuItem>
                    {city?.map((cit) => (
                        <MenuItem value={cit.localisation_kay} key={cit.id}>{cit.localization_kay_am}</MenuItem>
                    ))}

                </Select>
            </FormControl>
        </>
    );
}

export default Selects;
