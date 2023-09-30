import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MapIcon from '@mui/icons-material/Map';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { Button } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './product.css'
import DeleteModal from '../../utils/helpers/deletemodal';
import { FlatDelete, resetFlatThunk } from '../../store/actions/flatAction';
import ActiveModal from './activeModal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Ban from "../../images/ban.png"

const Product = ({ rows, count, handlePageClick, pages, type, par, navigate, }) => {

    const dispatch = useDispatch()

    const Admins = useSelector(state => state?.isAuthReducer?.roleType)
    const [item, setItem] = useState(pages + 1)

    useEffect(() => {
        setItem(pages + 1)
    }, [pages])


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(resetFlatThunk())
        navigate(`/lands/${item}/` + par)
    }

    return (
        <>
            <div className='container'>
                <div className='alla' id='pag'>
                    {rows?.length === 0 && <div style={{ width: '100%', fontSize: '30px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Դատարկ</div>}
                    {rows?.map((row) => (
                        <Fragment key={row.id} >
                            <Link
                                to={`/editland/${row.id}`} style={{ textDecoration: "none" }} >
                                <div className="mainboxaa" style={{ padding: 0 }}>
                                    {row.archive === 1 && <div className='archive'><span>Արխիվացված</span></div>}
                                    {row.urgent === '1' && <div className='urgent'><span>Շտապ</span></div>}
                                    {row.active === 0 && <img src={Ban} style={{ position: 'absolute', top: 30, right: 30 }} width={55} height={55} alt="ban" />}
                                    <img src={row.images} className="mainimageaa" alt="image" />
                                    <div style={{ position: 'absolute', bottom: -20, width: '100%', height: '40%', }}>
                                        {/* <span style={{ position: 'absolute', right: 1, top: 3, color: 'black', fontSize: 16, }}>{row.code > 0 ? row.code : row?.new_code}</span> */}
                                        <span style={{ position: 'absolute', right: 1, top: 3, color: 'black', fontSize: 16, }}>{row?.new_code ? row?.new_code : row?.inner_code}</span>                                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                {Admins?.[0]?.type === 'admin' && <span style={{ color: 'black', fontSize: 20, }} >{row?.Admin}</span>}
                                                <span style={{ color: 'black', fontSize: 20, marginTop: 10, marginLeft: 1, }}>{row?.price}$ {" "} {row?.paym && "Պայմ."}</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'black', fontSize: 20, alignItems: 'center' }}>
                                                <span style={{ marginLeft: 1 }}>{row?.area} մ<sup>2</sup></span>
                                                {/* <span >{row?.rooms} սեն․</span>
                                                <span >{row?.floor} h․</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Fragment>
                    ))}
                </div>
            </div>
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 20 }}>
                <ReactPaginate
                    pageClassName="page-item"
                    // pageLinkClassName="page-link"
                    previousClassName="page-item next   "
                    previousLinkClassName="page-link"
                    nextClassName="page-item next"
                    nextLinkClassName="page-link "
                    breakLabel="..."
                    breakClassName="page-item"
                    forcePage={pages}
                    // breakLinkClassName="page-link"
                    activeClassName="active"
                    nextLabel="Հաջ"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={6}
                    pageCount={count}
                    previousLabel="Նախ"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                />
                <form style={{ display: 'flex', justifyContent: 'center' }} onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <input value={item} onChange={(e) => setItem(e.target.value)} type={'number'} style={{ fontSize: 14, padding: '5px 5px', width: 55 }} /><h3>/ {count ? count : null}</h3>
                        <Button style={{ padding: '5px 5px', fontSize: 10 }} disabled={item > count || item < 1 || Number(item) === Number(pages + 1)} type="submit" color="secondary" variant="contained">Հաստատել</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Product;
