import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './product.css'
import Ban from "../../images/ban.png"

const PhoneFlatComponent = ({ data }) => {

    const Admins = useSelector(state => state?.isAuthReducer?.roleType)
    return (
        <div className='container'>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <span style={{ fontSize: 25, fontWeight: 'bold', marginTop: 40 }}>Առանձնատներ</span>
                <div className='allas' id='pag'>
                    {data?.Houses?.length === 0 && <div style={{ width: '100%', fontSize: '30px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Դատարկ</div>}
                    {data?.Houses?.map((row) => (
                        <Fragment key={row.id} >
                            {((row.type === 'Sale' && Admins?.[0]?.type !== 'daily') || ((row.type === 'For Rent' || row.type === 'Short Term') && Admins?.[0]?.type !== 'seller')) && <Link
                                to={`/edithouse/${row.id}`} style={{ textDecoration: "none" }} >
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
                                                <span >{row?.rooms} սեն․</span>
                                                <span >{row?.floor} h․</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>}
                        </Fragment>
                    ))}
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <span style={{ fontSize: 25, fontWeight: 'bold', marginTop: 40 }}>Բնակարաններ</span>
                <div className='allas' id='pag'>
                    {data?.Flats?.length === 0 && <div style={{ width: '100%', fontSize: '30px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Դատարկ</div>}
                    {data?.Flats?.map((row) => (
                        <Fragment key={row.id} >
                            {((row.type === 'Sale' && Admins?.[0]?.type !== 'daily') || ((row.type === 'For Rent' || row.type === 'Short Term') && Admins?.[0]?.type !== 'seller')) && <Link
                                to={`/editappartament/${row.id}`} style={{ textDecoration: "none" }} >
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
                                                <span >{row?.rooms} սեն․</span>
                                                <span >{row?.floor} h․</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>}
                        </Fragment>
                    ))}
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <span style={{ fontSize: 25, fontWeight: 'bold', marginTop: 40 }}>Հողատարածքներ</span>
                <div className='allas' id='pag'>
                    {data?.Land_areas?.length === 0 && <div style={{ width: '100%', fontSize: '30px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Դատարկ</div>}
                    {data?.Land_areas?.map((row) => (
                        <Fragment key={row.id} >
                            {((row.type === 'Sale' && Admins?.[0]?.type !== 'daily') || ((row.type === 'For Rent' || row.type === 'Short Term') && Admins?.[0]?.type !== 'seller')) && <Link
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
                            </Link>}
                        </Fragment>
                    ))}
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <span style={{ fontSize: 25, fontWeight: 'bold', marginTop: 40 }}>Կոմերցիոն</span>
                <div className='allas' id='pag'>
                    {data?.Commercial?.length === 0 && <div style={{ width: '100%', fontSize: '30px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Դատարկ</div>}
                    {data?.Commercial?.map((row) => (
                        <Fragment key={row.id} >
                            {((row.type === 'Sale' && Admins?.[0]?.type !== 'daily') || ((row.type === 'For Rent' || row.type === 'Short Term') && Admins?.[0]?.type !== 'seller')) && <Link
                                to={`/editcommercial/${row.id}`} style={{ textDecoration: "none" }} >
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
                                                <span >{row?.rooms} սեն․</span>
                                                <span >{row?.floor} h․</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PhoneFlatComponent;
