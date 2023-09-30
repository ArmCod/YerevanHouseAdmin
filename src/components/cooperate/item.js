import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from '@mui/material';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './product.css'
import { CooperateDelete } from '../../store/actions/cooperateAction';
import DeleteModal from '../../utils/helpers/deletemodal';
import CooperateViewModal from './viewModal';

const CooperateItem = ({ rows, count, handlePageClick }) => {

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [row, setRow] = useState()
    const [currentId, setCurrentId] = useState(0)
    const onHandleEdit = (item) => {
        setRow(item)
        setOpen(true)
    }

    const handleDelete = (id) => {
        setCurrentId(id)
        setOpen2(true)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Անուն</TableCell>
                        <TableCell align="center">Էլ․ հասցե</TableCell>
                        <TableCell align="center">հեռախոսհամար</TableCell>
                        <TableCell align="center">Ստեղծվել է</TableCell>
                        <TableCell align="center">Գինը</TableCell>
                        <TableCell align="center">Հասցե</TableCell>
                        <TableCell align="center">Տեսնել Ավելին</TableCell>
                        <TableCell align="center">Ջնջել</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row) => (
                        <TableRow
                            key={row?.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{row?.firstname}</TableCell>
                            <TableCell align="right">{row?.email}</TableCell>
                            <TableCell align="right">{row?.phone}</TableCell>
                            <TableCell align="right">{row?.created_at.substring(0, 19)}</TableCell>
                            <TableCell align="right">{row?.price} {row?.currency}</TableCell>
                            <TableCell align="right">{row?.address}</TableCell>
                            <TableCell align="right">
                                <Button color="secondary" variant="outlined" autoFocus onClick={() => onHandleEdit(row)}>
                                    Տեսնել
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button color="secondary" variant="outlined" autoFocus onClick={() => handleDelete(row.id)}>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {row && <CooperateViewModal openAdd={open} setOpenAdd={setOpen} row={row} />}
            <DeleteModal open={open2} setOpen={setOpen2} id={currentId} action={CooperateDelete} />
            <div style={{ marginTop: 20 }}>
                <ReactPaginate
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
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
        </TableContainer>
    )
}

export default CooperateItem;