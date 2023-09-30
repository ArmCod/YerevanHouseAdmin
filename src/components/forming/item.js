import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './product.css'
import { FormingDelete } from '../../store/actions/cooperateAction';
import DeleteModal from '../../utils/helpers/deletemodal';
import CooperateViewModal from './viewModal';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentFlat, resetFlatThunk } from '../../store/actions/flatAction';
import { ConstructionOutlined } from '@mui/icons-material';
import { getCurrentHouse } from '../../store/actions/houseAction';
import { getCurrentCommercial } from '../../store/actions/commercialAction';
import { Link } from 'react-router-dom';
import { format, isValid } from 'date-fns';

const FormingItem = ({ rows, count, handlePageClick }) => {

    const dispatch = useDispatch()
    const currentFlat = useSelector(state => state.flatReducer.currentFlat);

    const [active, setActive] = useState({ id: 0 })
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [row, setRow] = useState()
    const [currentId, setCurrentId] = useState(0)
    const onHandleEdit = (item) => {
        setRow(item)
        setOpen(true)
    }



    useEffect(() => {
        if (active.id !== 0) {

            switch (active.type) {
                case 'Flat':
                    dispatch(getCurrentFlat(active.pro_id))
                    break
                case 'House':
                    dispatch(getCurrentHouse(active.pro_id))
                    break
                case 'Commercial':
                    dispatch(getCurrentCommercial(active.pro_id))
                default:

                    break;
            }
        }
        return () => {
            dispatch(resetFlatThunk())
        }
    }, [active])

    const handleDelete = (id) => {
        setCurrentId(id)
        setOpen2(true)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Անուն</TableCell>
                        <TableCell align="right">Էլ․ հասցե</TableCell>
                        <TableCell align="right">հեռախոսհամար</TableCell>
                        <TableCell align="right">Գինը</TableCell>
                        <TableCell align="right">Սկիզբ</TableCell>
                        <TableCell align="right">Վերջ</TableCell>
                        <TableCell align="right">Տեսնել Ավելին</TableCell>
                        <TableCell align="right">Ջնջել</TableCell>
                        <TableCell align="right">Կարգավիճակ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <Fragment key={row?.id}>

                            <TableRow

                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => {
                                    if (active.id !== row.id) {
                                        setActive({ id: row?.id, type: row?.type, pro_id: row?.pro_id })
                                    }
                                }}
                            >
                                <TableCell align="right">{row?.first_name}</TableCell>
                                <TableCell align="right">{row?.email}</TableCell>
                                <TableCell align="right">{row?.phone}</TableCell>
                                <TableCell align="right">{row?.price} Դ</TableCell>
                                <TableCell align="right">{isValid(new Date(row?.start)) && format(new Date(row?.start), 'MM/dd/yyyy HH:mm')}</TableCell>
                                <TableCell align="right">{isValid(new Date(row?.end)) && format(new Date(row?.end), 'MM/dd/yyyy HH:mm')}</TableCell>
                                <TableCell align="right" onClick={(e) => e.stopPropagation()}>
                                    <Button color="secondary" variant="outlined" autoFocus onClick={() => onHandleEdit(row)}>
                                        Տեսնել
                                    </Button>
                                </TableCell>
                                <TableCell align="right" onClick={(e) => e.stopPropagation()}>
                                    <Button color="secondary" variant="outlined" autoFocus onClick={() => handleDelete(row.id)}>
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>
                                <TableCell align="right">{row?.status === 1 ? <span style={{ backgroundColor: 'yellow' }}>Վճարված է</span> : 'Վճարված չէ'}</TableCell>
                            </TableRow>
                            {active?.id === row?.id &&
                                <div style={{ display: 'flex', position: 'relative', gap: 40, left: 50, width: 10, border: '1px solid rgba(224, 224, 224, 1)' }} >
                                    <img src={currentFlat?.[1]?.[0]?.url} style={{ maxWidth: 200, maxHeight: 200 }} />
                                    <div>
                                        <h3 style={{ width: 200 }}>կոդ ֊ {currentFlat?.[0]?.[0]?.inner_code ?? currentFlat?.[0]?.[0]?.new_code}</h3>
                                        {/* <p style={{ fontWeight: 'bold' }}>գին ֊ {currentFlat?.[0]?.[0]?.price} </p> */}
                                    </div>
                                    <div style={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                        <Link style={{ textDecoration: 'none' }} to={`/${active.type === 'Flat' ? 'editappartament' : active.type === 'House' ? 'edithouse' : 'editcommercial'}/${active?.pro_id}`}>
                                            <Button color="secondary" variant="outlined">
                                                Տեսնել
                                            </Button>
                                        </Link>
                                    </div>
                                </div>}
                        </Fragment>
                    ))}
                </TableBody>
            </Table>
            {row && <CooperateViewModal openAdd={open} setOpenAdd={setOpen} row={row} />}
            <DeleteModal open={open2} setOpen={setOpen2} id={currentId} action={FormingDelete} />
            <div style={{ marginTop: 20 }}>
                <ReactPaginate
                    pageClassName="page-item"
                    previousClassName="page-item next"
                    previousLinkClassName="page-link"
                    nextClassName="page-item next"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    activeClassName="active"
                    nextLabel="Հաջ"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={6}
                    pageCount={!!count ? count : 0}
                    previousLabel="Նախ"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                />
            </div>
        </TableContainer >
    )
}

export default FormingItem;