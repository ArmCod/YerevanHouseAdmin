import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFormingThunk } from '../../store/actions/cooperateAction';
import FormingItem from "./item";

const FormingComponent = () => {
    const dispatch = useDispatch();
    const forming = useSelector(state => state.cooperateReducer.forming);
    const [data, setData] = useState([]);

    useEffect(() => {
        dispatch(getFormingThunk(1))
    }, [])

    useEffect(() => {
        setData(forming?.data)
    }, [forming])


    const handlePageClick = (e) => {
        dispatch(getFormingThunk(e.selected + 1))
    }



    return (
        <div>
            <Link to="/" style={{ textDecoration: "none", marginLeft: 20 }}><Button color="secondary" variant="contained">Գլխավոր</Button></Link>
            {data && <FormingItem rows={data} count={forming?.total / forming?.per_page} handlePageClick={handlePageClick} />}
        </div>
    )
}

export default FormingComponent;