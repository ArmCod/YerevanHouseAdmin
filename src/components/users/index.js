import { Button, FormControl, Input, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { changeAdminsThunk, deleteAdminsThunk, getAdminsThunk } from "../../store/actions/adminAction";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteModal from "../../utils/helpers/deletemodal";
import { Link } from "react-router-dom";
import UserAddModal from "./userAddModal";

const UsersComponent = () => {
    const dispatch = useDispatch()
    const admins = useSelector(state => state?.AdminReducer?.admins)
    const [prodId, setProdId] = useState()
    const [openDelete, setOpenDelete] = useState(false)
    const [openAdd, setOpenAdd] = useState(false)
    const [data, setData] = useState([])
    const [editMode, setEditMode] = useState({ id: 0, name: 'xdr' })

    const activatedEditMode = (all) => {
        setEditMode(all)
    }

    useEffect(() => {
        dispatch(getAdminsThunk())
    }, [])

    useEffect(() => {
        setData(admins)

    }, [admins])



    const handleSubmit = (row) => {
        let truth = {}
        for (let key in row) {
            if (row[key] !== '' && key !== 'real_password' && row[key] !== null && key !== 'created_at' && key !== 'updated_at' && key !== 'activity_at') {
                truth = { ...truth, [`${key}`]: row[key] }
            }
        }

        dispatch(changeAdminsThunk(truth))
    }



    return (
        <>
            <div style={{ margin: '0 0 10px 10px' }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button color="secondary" variant="contained">
                        Գլխավոր
                    </Button>
                </Link>
            </div>
            <TableContainer component={Paper} id={'pag'}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Անուն</TableCell>
                            <TableCell align="left">Էլ․ հասցե</TableCell>
                            <TableCell align="left">Հեռախոսահամար</TableCell>
                            <TableCell align="left">Գաղտնաբառ</TableCell>
                            <TableCell align="left">Տիպ</TableCell>
                            <TableCell align="center">Ջնջել</TableCell>
                            <TableCell align="center">Հաստատել</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {admins?.map((row) => (
                            <TableRow
                                key={row?.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{(editMode.id === row.id && editMode.name === 'name') ?
                                    <Input onChange={(e) => {
                                        row.name = e.target.value
                                        setData([...data])
                                    }} autoFocus={true} onBlur={() => activatedEditMode({ id: 0, name: 'xdr' })} style={{ width: 140 }} value={row.name} />
                                    :
                                    <span onDoubleClick={() => activatedEditMode({ id: row.id, name: 'name' })}>{row?.name}</span>}</TableCell>
                                <TableCell align="left">{(editMode.id === row.id && editMode.name === 'email') ?
                                    <Input onChange={(e) => {
                                        row.email = e.target.value
                                        setData([...data])
                                    }} autoFocus={true} onBlur={() => activatedEditMode({ id: 0, name: 'xdr' })} style={{ width: 300 }} value={row.email} />
                                    :
                                    <span onDoubleClick={() => activatedEditMode({ id: row.id, name: 'email' })}>{row?.email}</span>}</TableCell>
                                <TableCell align="left">{(editMode.id === row.id && editMode.name === 'phone') ?
                                    <Input onChange={(e) => {
                                        row.phone = e.target.value
                                        setData([...data])
                                    }} autoFocus={true} onBlur={() => activatedEditMode({ id: 0, name: 'xdr' })} style={{ width: 140 }} value={row.phone} />
                                    :
                                    <span onDoubleClick={() => activatedEditMode({ id: row.id, name: 'phone' })}>{row?.phone}</span>}</TableCell>
                                <TableCell align="left">{(editMode.id === row.id && editMode.name === 'real_password') ?
                                    <Input onChange={(e) => {
                                        row.real_password = e.target.value
                                        row.password = e.target.value
                                        setData([...data])
                                    }} autoFocus={true} onBlur={() => activatedEditMode({ id: 0, name: 'xdr' })} style={{ width: 140 }} value={row.real_password} />
                                    :
                                    <span onDoubleClick={() => activatedEditMode({ id: row.id, name: 'real_password' })}>{row?.real_password}</span>}</TableCell>
                                <TableCell align="left">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Բաժին</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={row.type}
                                            label="Բաժին"
                                            name="type"

                                            onChange={(e) => {
                                                row.type = e.target.value
                                                setData([...data])
                                            }}
                                        >
                                            <MenuItem value={"admin"}>Ադմին</MenuItem>
                                            <MenuItem value={"seller"}>Վաճառք</MenuItem>
                                            <MenuItem value={"daily"}>Վարձակալություն</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>

                                <TableCell align="right">
                                    <Button color="secondary" variant="outlined" onClick={() => {
                                        setProdId(row.id)
                                        setOpenDelete(true)
                                    }} >
                                        <DeleteIcon />
                                    </Button>

                                </TableCell>
                                <TableCell align="right">
                                    <Button color="secondary" variant="contained" type="submit" onClick={() => handleSubmit(row)}>
                                        Հաստատել
                                    </Button>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div style={{ margin: '15px 0 0 10px' }}>
                    <Button color="secondary" variant="contained" onClick={() => setOpenAdd(true)}>
                        Ավելացնել
                    </Button>
                </div>
                <DeleteModal open={openDelete} setOpen={setOpenDelete} id={prodId} action={deleteAdminsThunk} />
                <UserAddModal openAdd={openAdd} setOpenAdd={setOpenAdd} />
            </TableContainer >

        </>
    );
}

export default UsersComponent;