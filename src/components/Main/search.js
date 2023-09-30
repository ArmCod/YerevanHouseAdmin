import { Button, TextField } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlatPhoneThunk, resetFlatThunk, getFlatSearchThunk } from "../../store/actions/flatAction";
import PhoneFlatComponent from "./product";

const Search = () => {
    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const dispatch = useDispatch()
    const phoneflat = useSelector((state) => state.flatReducer.phoneflat);
    const codeflat = useSelector((state) => state.flatReducer.codeflat);
    useEffect(() => {
        return () => {
            dispatch(resetFlatThunk());
        };
    }, []);
    const [active, setActive] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(resetFlatThunk())
        if (code.length > 0) {
            dispatch(getFlatSearchThunk(0, code))
        } else {
            dispatch(getFlatPhoneThunk(0, name))
        }
        setActive(true)
    }
    const Loading = () => {
        return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}><span style={{ fontSize: 22, color: 'black' }}>ԲԵՌՆՈՒՄ...</span></div>
    }

    return (
        <div style={{ marginTop: 25 }}>

            <form style={{ display: 'flex', gap: 30 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h5 style={{ margin: "3px 0" }}>Որոնում կոդով</h5>
                    <TextField
                        name="search"
                        // value={filter.search}
                        onChange={(e) => setCode(e.target.value)}
                        value={code}
                        placeholder="Որոնել"
                        size="small"
                        inputProps={{ minLength: 4 }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}> <h5 style={{ margin: "3px 0" }}>Որոնում ներքին տվյալներով</h5>
                    <TextField
                        name="name"
                        type={'text'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Որոնել"
                        size="small"
                        inputProps={{ minLength: 4 }}
                    />
                </div>
                <div style={{ alignSelf: 'flex-end' }}>
                    <Button type="submit" color="secondary" disabled={(code.length < 4 && code.length != 0) || (code.length == 0 && name.length < 4)} variant="contained" onClick={handleClick}>
                        Հաստատել{" "}
                    </Button>
                </div>
            </form>
            {active && phoneflat === null && codeflat === null && <Loading />}
            {active && phoneflat && <PhoneFlatComponent
                data={phoneflat}
            />}
            {active && codeflat && <PhoneFlatComponent
                data={codeflat}
            />}
        </div>
    );
}

export default Search;
