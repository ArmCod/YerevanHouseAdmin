import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCooperateThunk } from '../../store/actions/cooperateAction';
import CooperateItem from "./item";

const CooperateComponent = () => {
    const dispatch = useDispatch();
    const cooperate = useSelector(state => state.cooperateReducer.cooperate);
    const [data, setData] = useState([]);

    useEffect(() => {
        dispatch(getCooperateThunk(1))
    }, [])

    useEffect(() => {
        setData(cooperate?.data)
    }, [cooperate])


    const handlePageClick = (e) => {
        dispatch(getCooperateThunk(e.selected + 1))
    }



    return (
        <div>
            <Link to="/" style={{ textDecoration: "none", marginLeft: 20 }}><Button color="secondary" variant="contained">Գլխավոր</Button></Link>
            {data && <CooperateItem rows={data} count={cooperate?.total / cooperate?.per_page} handlePageClick={handlePageClick} />}
        </div>
    )
}

export default CooperateComponent;