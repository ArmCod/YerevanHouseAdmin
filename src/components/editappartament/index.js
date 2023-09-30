import { Fragment, useCallback, useEffect, useId, useMemo, useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextareaAutosize,
    TextField,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useNavigate, useParams } from "react-router-dom";
import a11yProps from '../../utils/helpers/allprops';
import TabPanel from '../../utils/helpers/tabpanel';
import { useDispatch, useSelector } from 'react-redux';
import { FlatDelete, FlatPost, getCurrentFlat, resetFlatThunk } from "../../store/actions/flatAction";
import { baseUrl, token } from "../../config/config";
import axios from "axios";
import Swal from "sweetalert2";
import ConvertBase64, { ConvertMultiple } from "../../utils/helpers/base64";
import DescriptionSection from "./descitptioonsection";
import Main from "./main";
import AllChecks from "./checkbox";
import Client from "./client";
import AllImages from "./images";
import DeleteModal from "../../utils/helpers/deletemodal";
import { getCityThunk, getRegionThunk } from "../../store/actions/regionAction";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import CalendarEdit from "./calendar";
import userEvent from "@testing-library/user-event";
import { getFormingItemThunk } from "../../store/actions/cooperateAction";
// const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 1000,
//     height: 700,
//     bgcolor: "background.paper",
//     border: "3px solid #F2B84D",
//     boxShadow: 24,
//     p: 4,
//     borderRadius: "10px",
//     overflow: "scroll",
// };

const EditAppartament = () => {
    const Admins = useSelector(state => state?.isAuthReducer?.roleType)
    const region = useSelector(state => state.regionReducer.region)
    const city = useSelector(state => state.regionReducer.city)
    const calItem = useSelector(state => state.cooperateReducer.item)
    const { currentId } = useParams()
    const navigate = useNavigate()
    const { ymaps } = window
    const [draggingIndex, setDraggingIndex] = useState(null);
    const [coords, setCoords] = useState();
    const [openDelete, setOpenDelete] = useState(false)
    const [coordsa, setCoordsa] = useState();
    const [loading, setLoading] = useState(false)
    let [regId, setRegId] = useState(1)
    const [images, setImages] = useState([])
    const [convert, setConvert] = useState([])
    const [realImages, setRealImages] = useState([])
    const [data2, setData2] = useState({})
    const [realDelete, setRealDelete] = useState([])
    const [editImages, setEditImages] = useState([])
    const [newCode, setNewCode] = useState(0)
    let [verj, setVerj] = useState({})
    let [vurgent, setVurgent] = useState(false)
    let [varchive, setVarchive] = useState(false)
    let [vactive, setVactive] = useState(1)
    const [turhtype, setTruthtype] = useState("")



    const dispatch = useDispatch()
    const mapId = useId()
    const currentFlat = useSelector(state => state.flatReducer.currentFlat);
    useEffect(() => {
        return () => {
            dispatch(resetFlatThunk());
        };
    }, []);
    // useEffect(() => {
    //     const unlisten = navigate((location) => {
    //         dispatch(resetFlatThunk());
    //     });

    //     return unlisten;
    // }, [navigate]);




    const handleChangeCheck = (e, name) => {
        if (!!e.target.checked) {
            if (e.target.name === 'urgent') {
                verj[e.target.name] = '1'
                setVurgent(true)
            } else if (e.target.name === 'archive') {
                verj[e.target.name] = 1
                setVarchive(true)
            } else {
                verj[e.target.name] = 0
                setVactive(true)
            }
            setVerj({ ...verj })
        } else {
            if (e.target.name === 'urgent') {
                verj[e.target.name] = '0'
                setVurgent(false)

            } else if (e.target.name === 'archive') {
                verj[e.target.name] = 0
                setVarchive(false)

            } else {
                verj[e.target.name] = 1
                setVactive(false)
            }

            setVerj({ ...verj })
        }

    }
    let [data, setData] = useState({
        region: '',
        city: '',
    })

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getCurrentFlat(currentId))
    }, [])
    useEffect(() => {
        dispatch(getRegionThunk())
        dispatch(getFormingItemThunk(currentId))
    }, [])


    useEffect(() => {
        if (data?.region !== '' && region) {
            dispatch(getCityThunk(region.filter((asd) => asd.title_en === data.region)?.[0]?.id))
        }
    }, [data, region])
    useEffect(() => {
        if (coordsa) {
            ymaps?.ready(() => {
                const map = new ymaps.Map(mapId, {
                    center: coordsa,
                    zoom: 16,
                    controls: []
                });

                let placemark = new ymaps.Placemark(coords, {
                    balloonContent: 'My Marker',
                }, {
                    preset: 'islands#redIcon',
                    draggable: true // Enable drag and drop for placemark
                });

                // Add geolocation control
                const geolocationControl = new ymaps.control.GeolocationControl({
                    options: {
                        float: 'right',
                    },
                });
                map.controls.add(geolocationControl);

                const searchControl = new ymaps.control.SearchControl({
                    options: {
                        provider: "yandex#search",
                        balloonOptions: {
                            // Set custom balloon color
                            balloonBackgroundColor: 'red',
                            hideIconOnBalloonOpen: true,
                        },
                    }
                });
                map.controls.add(searchControl);
                searchControl.events.add('resultselect', (event) => {
                    // const result = event.get('result')
                    var searchResults = searchControl.getResultsArray();
                    var selectedResult = searchResults[event.get("index")];
                    var selectedCoordinates = selectedResult.geometry.getCoordinates();
                    setCoords(selectedCoordinates);
                    placemark.geometry.setCoordinates(selectedCoordinates);
                    placemark.options.set('iconColor', 'red');
                    placemark.properties.set('balloonContent', 'My Marker');


                    // handleGeocode(ymaps, result).then((newCoords) => {


                    //     placemark.geometry.setCoordinates(newCoords);
                    //     placemark.options.set('iconColor', 'red');
                    //     placemark.properties.set('balloonContent', 'My Marker');
                    // });
                });

                // Add placemark

                placemark.events.add('dragend', (event) => {
                    const newCoords = event.get('target').geometry.getCoordinates();
                    setCoords(newCoords);
                    handleGeocode(ymaps, newCoords).then((result) => {
                        searchControl.search(result);
                    });
                });
                map.geoObjects.add(placemark);


                map.events.add('click', (event) => {
                    const clickedCoords = event.get('coords');

                    handleGeocode(ymaps, clickedCoords).then((newCoords) => {
                        setCoords(newCoords);
                        // map.setCenter(newCoords);

                        // Update coordinates of existing placemark
                        placemark.geometry.setCoordinates(newCoords);
                        placemark.properties.set('balloonContent', 'My Marker');

                    });
                });

                handleGeocode(ymaps).then((newCoords) => {
                    setCoords(newCoords);
                    map.setCenter(newCoords);

                    // Update coordinates of existing placemark
                    placemark.geometry.setCoordinates(newCoords);
                    placemark.properties.set('balloonContent', 'My Marker');
                });
            });

        }
    }, [coordsa]);



    const [main, setMain] = useState({
        code: '',
        bathroom: '',
        tualet: '',
        area: '',
        balcon: '',
        one_bed: '',
        viewed: '',
        two_bed: '',
        advance: '',
        rooms: '',
        current_floor: '',
        flat_floor: '',
    })
    const [secondary, setSecondary] = useState({
        title_hy: '',
        title_ru: '',
        title_en: '',
        body_hy: '',
        body_ru: '',
        body_en: '',
    })



    const [checks, setChecks] = useState({})
    const [client, setClient] = useState({
        client_name: '',
        real_address: '',
        client_phone: '',
        notes: '',
        inner_code: '',
        price: '',
        paym: ''

    })
    const [table, setTable] = useState('flat')


    useEffect(() => {
        setData2(currentFlat?.[0]?.[0])
        if (currentFlat?.[0]?.[0].type) {
            setData({ ...data, type: currentFlat?.[0]?.[0].type, region: currentFlat?.[0]?.[0].region, city: currentFlat?.[0]?.[0].city })
            setMain({
                ...data,
                code: currentFlat?.[0]?.[0].code,
                floor: currentFlat?.[0]?.[0].floor,
                bathroom: currentFlat?.[0]?.[0].bathroom,
                tualet: currentFlat?.[0]?.[0].tualet,
                area: currentFlat?.[0]?.[0].area,
                balcon: currentFlat?.[0]?.[0].balcon,
                one_bed: currentFlat?.[0]?.[0].one_bed,
                two_bed: currentFlat?.[0]?.[0].two_bed,
                advance: currentFlat?.[0]?.[0].advance,
                viewed: currentFlat?.[0]?.[0].viewed,
                rooms: currentFlat?.[0]?.[0].rooms,
                current_floor: currentFlat?.[0]?.[0].current_floor,
                flat_floor: currentFlat?.[0]?.[0].flat_floor
            })
            setTruthtype(
                currentFlat?.[0]?.[0].type
            )
            setSecondary({
                title_hy: currentFlat?.[0]?.[0].title_hy,
                title_ru: currentFlat?.[0]?.[0].title_ru,
                title_en: currentFlat?.[0]?.[0].title_en,
                body_hy: currentFlat?.[0]?.[0].body_hy,
                body_ru: currentFlat?.[0]?.[0].body_ru,
                body_en: currentFlat?.[0]?.[0].body_en,
            })
            setClient({
                client_name: currentFlat?.[0]?.[0].client_name,
                real_address: currentFlat?.[0]?.[0].real_address,
                client_phone: currentFlat?.[0]?.[0].client_phone,
                notes: currentFlat?.[0]?.[0].notes,
                inner_code: currentFlat?.[0]?.[0].inner_code,
                price: currentFlat?.[0]?.[0].price,
                paym: currentFlat?.[0]?.[0].paym,
            })
            if (currentFlat?.[0]?.[0]?.new_code) {
                setNewCode(currentFlat?.[0]?.[0]?.new_code)
            }

            if (currentFlat?.[0]?.[0]?.active === 0) {
                setVactive(0)

            }
            if (currentFlat?.[0]?.[0]?.archive === 1) {
                setVarchive(true)

            }
            if (currentFlat?.[0]?.[0]?.urgent === '1') {
                setVurgent(true)

            }

            setVerj({
                active: String(currentFlat?.[0]?.[0]?.active),
                urgent: currentFlat?.[0]?.[0]?.urgent,
                archive: currentFlat?.[0]?.[0]?.archive
            })
            if (currentFlat?.[0]?.[0]?.lat && currentFlat?.[0]?.[0]?.lng) {
                setCoords([
                    currentFlat?.[0]?.[0].lat,
                    currentFlat?.[0]?.[0].lng,
                ])
                setCoordsa([
                    currentFlat?.[0]?.[0].lat,
                    currentFlat?.[0]?.[0].lng,
                ])
            } else {
                setCoordsa([40.187247, 44.521305])
            }

            const arr = []
            currentFlat?.[1]?.forEach((i, k) => {
                arr.push({ ...i, sort: k })
            })
            setRealImages(arr)
        }
        console.clear()
    }, [currentFlat])


    const handleChange = (e) => {
        if (!Number(e.target.value)) {
            data[e.target.name] = e.target.value;
            setData({ ...data })

        } else {
            data[e.target.name] = Number(e.target.value);
            setData({ ...data })
        }
    }

    const handleGeocode = (ymaps, coordsa) => {
        return ymaps.geocode(coordsa).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            const newCoords = firstGeoObject.geometry.getCoordinates();
            return newCoords;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (realImages.length === 0 && images.length === 0) {
            setLoading(false)
            await Swal.fire({

                icon: 'error',
                title: 'Oops...',
                text: 'Ավելացրեք նկար',
                showConfirmButton: false,
                timer: 3500
            })
        } else {
            let data3 = { ...data2, ...main, ...client, ...secondary, ...verj, ...data }

            try {
                for (let i = 0; i < editImages.length; i++) {
                    const imgformdt = new FormData()
                    imgformdt.append('id', editImages[i].id)
                    imgformdt.append('type', 'Apartments')
                    imgformdt.append('pro_id', data3.id)
                    imgformdt.append('image', editImages[i].file)
                    await axios.post(`${baseUrl}/change/image`, imgformdt, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    })
                }

                for (let i = 0; i < realDelete.length; i++) {
                    const imgformdt = new FormData()
                    imgformdt.append('id', realDelete[i])
                    imgformdt.append('type', 'Apartments')
                    imgformdt.append('pro_id', data3.id)
                    await axios.post(`${baseUrl}/remove/image`, imgformdt, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    })
                }

                if (coords) {
                    data3 = { ...data3, lat: coords[0], lng: coords[1] }
                }
                if (data3?.current_floor === 0 || data?.current_floor === '0') {
                    data3.floor = '*'
                } else if (data3?.current_floor !== 0 && (data3?.flat_floor === '' || data3?.flat_floor === 0 || data3?.flat_floor === '0')) {
                    data3.floor = data3?.current_floor
                } else {
                    data3.floor = `${data3?.current_floor}/${data3?.flat_floor}`
                }
                if (!data3?.user_id) {
                    data3.user_id = 1
                }

                const formdata = new FormData()
                for (let key in data3) {
                    if (key !== 'updated_at' && key !== 'created_at' && data3[key] !== '' && data3[key] !== null && data3[key] !== undefined) {
                        formdata.append(key, data3[key])
                    }
                }

                for (let i = 0; i < images.length; i++) {
                    formdata.append('image[]', images[i].file);
                }
                const dataform = new FormData()
                for (let i = 0; i < realImages?.length; i++) {
                    dataform.append(`id[${i}]`, realImages?.[i]?.id)
                    dataform.append(`sort_id[${i}]`, realImages?.[i]?.sort)

                }

                await axios.post(`${baseUrl}/imagesort/change`, dataform, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })

                await axios.post(`${baseUrl}/flats/update`, formdata, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                    .then(async () => {
                        setLoading(false)
                        await Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        window.scrollTo(0, 0)
                        window.location.reload(false)
                    })
                    .catch(async (err) => {
                        setLoading(false)
                        await Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'Oops...',
                            text: err,
                            showConfirmButton: false,
                            timer: 2000
                        })

                    })
            } catch (err) {
                setLoading(false)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Oops...',
                    text: err,
                    showConfirmButton: false,
                    timer: 2000
                })

            }
        }
    }


    const handleMainChange = useCallback((event) => {
        const { name, value } = event.target;
        setMain(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }, [setMain]);

    const handleSecondaryChange = useCallback((event) => {
        const { name, value } = event.target;
        setSecondary(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }, [setSecondary])

    const handleClientChange = useCallback((event) => {
        const { name, value } = event.target;
        setClient(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }, [setClient])


    const MainMemo = useMemo(() => (
        <Main table={table} type={turhtype} data={main} handleChange={handleMainChange} />
    ), [main, table, turhtype]);

    const DescriptionSectionMemo = useMemo(() => (
        <DescriptionSection data={secondary} handleChange={handleSecondaryChange} />
    ), [secondary, table]);

    const AllChecksMemo = useMemo(() => (
        <AllChecks table={table} data={data2} type={turhtype} setData={setData2} />
    ), [data2, table, turhtype]);

    const ClientMemo = useMemo(() => (
        <Client data={client} Admins={Admins} handleChange={handleClientChange} />
    ), [client, table, Admins])

    const resizeImage = (file) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const MAX_WIDTH = 1000; // Define your desired maximum width here
                const MAX_HEIGHT = 1000; // Define your desired maximum height here

                let width = img.width;
                let height = img.height;

                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }

                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }

                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    const resizedFile = new File([blob], file.name, { type: file.type });
                    resolve(resizedFile);
                }, file.type);
            };
            img.src = URL.createObjectURL(file);
        });
    };

    const fileSelectedHandler = async (e) => {

        let k = 0;
        const newFiles = await Promise.all(Array.from(e.target.files).map(async (file, index) => {
            const resizedFile = await resizeImage(file);
            return {
                file: resizedFile,
                index: images[images?.length - 1] ? images[images?.length - 1].index + 1 + index : index,
            }
        }));
        setImages(prev => [...prev, ...newFiles])

        for (let i = 0; e.target.files.length; i++) {

            const image2 = await ConvertMultiple(e.target.files[i]);
            setConvert(prev => [...prev, image2])
        }
    }

    const handleImageDelete = async (k) => {
        convert.splice(k, 1)
        setConvert([...convert])
        const newImg = images.filter((file) => file.index !== k)
        for (let i = 0; i < newImg.length; i++) {
            newImg[i].index = i
        }
        setImages(newImg);
        setDraggingIndex(null);
    }

    const handleRealImageDelete = async (k, realId) => {
        setRealDelete(prev => [...prev, realId])
        realImages.splice(k, 1)
        setRealImages([...realImages])
    }

    const handleImageEdit = async (event, k) => {

        const resizedFile = await resizeImage(event.target.files[0]);
        images[k].file = resizedFile
        setImages([...images])
        const image2 = await ConvertMultiple(resizedFile)
        convert.splice(k, 1, image2)
        setConvert([...convert])
        setDraggingIndex(k);
    }

    const handleRealImageEdit = async (event, k, realId) => {
        const resizedFile = await resizeImage(event.target.files[0])
        if (editImages.some(e => e.id === realId)) {
            let x = editImages.findIndex(e => e.id === realId)
            editImages[x].file = resizedFile
        } else {
            editImages.push({ id: realId, file: resizedFile })
        }
        setEditImages([...editImages])
        const image2 = await ConvertMultiple(resizedFile)
        realImages[k].url = image2
        setRealImages([...realImages])
    }



    const handleImageAdd = async (event) => {
        if (images.length > 0) {
            images.push({ file: event.target.files[0], index: images[images.length - 1].index + 1 })
        } else {
            images.push({ file: event.target.files[0], index: 0 })
        }
        setImages([...images])
        const image2 = await ConvertMultiple(event.target.files[0])
        convert.push(image2)
        setConvert([...convert])
    }

    const ViewedMemo = useMemo(() => (
        <div
            style={{
                width: "250px",

            }}
        >
            <p style={{ fontSize: 10 }}>Տեսնված</p>
            <TextField name="viewed" inputProps={{
                style: {
                    paddingTop: 5,
                    paddingBottom: 5,
                    width: 70
                }
            }} type={'number'} value={main?.viewed} onChange={handleMainChange} />
        </div>
    ), [main])
    const [dragOverIndex, setDragOverIndex] = useState(null);

    const handleDragStart = (e, index) => {

        e.dataTransfer.setData('text/plain', index);
    };
    const handleDragOver = (e, index) => {
        e.preventDefault();

        setDragOverIndex(index);
    };
    const handleDrop = (e, dropIndex) => {

        const dragIndex = e.dataTransfer.getData('text/plain');
        const dragImage = realImages[dragIndex];
        const updatedImages = [...realImages];
        updatedImages.splice(dragIndex, 1);
        updatedImages.splice(dropIndex, 0, dragImage);

        // Update the sort values after reordering
        const sortedImages = updatedImages.map((image, index) => ({
            ...image,
            sort: index,
        }));

        setRealImages(sortedImages);
        setDragOverIndex(null);
    };
    const handleDragEnter = (e, index) => {

        setDragOverIndex(index);
    };

    const handleDragEnd = () => {
        setDragOverIndex(null);
    };

    return (
        <div className="statement" >
            <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
                < Link to="/" style={{ textDecoration: "none" }}><Button color="secondary" variant="contained">Գլխավոր</Button></Link>
                {ViewedMemo}
            </div >
            {((currentFlat?.[0]?.[0]?.type === 'Sale' && Admins?.[0]?.type !== 'daily') || ((currentFlat?.[0]?.[0]?.type === 'For Rent' || currentFlat?.[0]?.[0]?.type === 'Short Term') && Admins?.[0]?.type !== 'seller')) && <Box >
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 mt={3} mb={3}>
                            ՓՈԽԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆԸ
                        </h2>
                        {currentFlat?.[0]?.[0]?.active == 1 && <a href={`https://www.yerevanhouse.am/${currentFlat?.[0]?.[0]?.type?.toLowerCase() === 'sale' ? 'sale' : 'daily'}/apartment/${currentFlat?.[0]?.[0]?.id}`} target='_blank' style={{ color: 'black' }}>{`https://www.yerevanhouse.am/${currentFlat?.[0]?.[0]?.type?.toLowerCase() === 'sale' ? 'sale' : 'daily'}/apartment/${currentFlat?.[0]?.[0]?.id}`}</a>}
                    </div>
                    {newCode !== 0 && <h3>{newCode}</h3>}
                    <hr />
                    <div style={{ display: 'flex', gap: 50, marginTop: 30 }} id="verev" itemID="verev">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Մարզերը</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.region}
                                label="Մարզերը"
                                name="region"
                                required
                                onChange={(e) => {
                                    let a = region?.find(res => res.title_en === e.target.value)?.id
                                    regId = a
                                    setRegId(regId)
                                    dispatch(getCityThunk(regId))
                                    handleChange(e)
                                    setData({ ...data, city: '' })
                                }}
                            >
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
                                value={data.city}
                                name="city"
                                required
                                label="Քաղաքները"
                                onChange={handleChange}
                            >
                                {city?.map((cit) => (
                                    <MenuItem value={cit.localisation_kay} key={cit.id}>{cit.localization_kay_am}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                        {table === 'commerical' && <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Տեղակայվածությունը փողոցից</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.door_position}
                                name="door_position"
                                required
                                label="Տեղակայվածությունը փողոցից"
                                onChange={handleChange}
                            >
                                <MenuItem value={"1"}>Առաջին գիծ</MenuItem>
                                <MenuItem value={"2"}>Երկրորդ գիծ</MenuItem>
                            </Select>
                        </FormControl>}
                    </div>

                    {table && <>
                        {MainMemo}
                        {DescriptionSectionMemo}
                        {AllChecksMemo}
                        {ClientMemo}

                        <div id={mapId} style={{ width: '100%', height: '400px', margin: '20px 0' }}></div>

                        <Box>
                            <h2 mt={4} style={{ margin: '25px 0 2px 0' }}>
                                ԸՆՏՐԵՔ ՆԿԱՐՆԵՐ
                            </h2>
                            <hr />
                        </Box>
                        <Box marginBottom={2}>
                            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', }} onDragOver={(e) => e.preventDefault()}
                            >
                                {realImages?.sort((a, b) => a.sort - b.sort)?.map((i, k) => (

                                    <div key={k}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, k)}
                                        onDragOver={(e) => handleDragOver(e, k)}
                                        onDrop={(e) => handleDrop(e, k)}
                                        onDragEnter={(e) => handleDragEnter(e, k)}
                                        onDragEnd={() => handleDragEnd()}
                                        style={{
                                            border: dragOverIndex === k ? '2px dashed blue' : 'none', // Add border style when dragging over the element
                                        }}
                                    >
                                        <div draggable={false} style={{ border: '1px solid black', padding: 10, position: 'relative', marginBottom: 10 }} >
                                            <div draggable={false} style={{ position: 'absolute', right: 4, top: 4, color: "black", cursor: 'pointer' }} onClick={() => handleRealImageDelete(k, i.id)}>❌</div>
                                            <img draggable={false} src={i.url} width={150} height={150} alt="nkar" />
                                        </div>
                                        <label htmlFor={`edit${k}`} >
                                            <span className="editImage">Խմբագրել</span>
                                            <input style={{ display: 'none' }} onChange={(e) => handleRealImageEdit(e, k, i.id)} id={`edit${k}`} multiple={false} type="file" />
                                        </label>
                                    </div>
                                ))}

                                {convert?.map((i, k) => (
                                    <div id={`convert${k}`} key={k} draggable={false}>

                                        <div draggable={false} style={{ border: '3px solid rgb(19, 181, 19)', padding: 10, position: 'relative', marginBottom: 10 }} >
                                            <div draggable={false} style={{ position: 'absolute', right: 4, top: 4, color: "black", cursor: 'pointer' }} onClick={() => handleImageDelete(k)}>❌</div>
                                            <img draggable={false} src={i} width={150} height={150} alt="nkarconvert" />
                                        </div>
                                        <label htmlFor={`chedit${k}`} >
                                            <span className="editImage">Խմբագրել</span>
                                            <input style={{ display: 'none' }} onChange={(e) => handleImageEdit(e, k)} id={`chedit${k}`} multiple={false} type="file" />
                                        </label>
                                    </div>
                                ))}
                                {images?.length + realImages?.length > 0 && <div style={{ height: 170, display: 'flex', alignItems: 'flex-end' }}><label htmlFor="add" >
                                    <span className="addImage">Ավելացնել</span>
                                    <input style={{ display: 'none' }} onChange={fileSelectedHandler} id="add" multiple type="file" />
                                </label>
                                </div>}
                            </div>
                        </Box>

                        {images?.length + realImages?.length === 0 && <Box>
                            <div style={{ height: 30, display: 'flex', alignItems: 'flex-end' }}><label htmlFor="add" >
                                <span className="addImage">Ավելացնել Նկարներ</span>
                                <input style={{ display: 'none' }} onChange={fileSelectedHandler} id="add" multiple type="file" />
                            </label>
                            </div>
                        </Box>}
                        <Box marginTop={4}>
                            <div style={{ display: 'flex', gap: 50 }}>
                                <div>
                                    <Button type="submit" color="secondary" variant="contained" disabled={loading}>
                                        Հաստատել{" "}
                                    </Button>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginRight: 30 }}>
                                        <Button type="button" color="secondary" variant="contained" onClick={() => setOpenDelete(true)}>
                                            Ջնջել{" "}
                                        </Button>
                                    </div>
                                    <div

                                    >
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label={<span style={{ fontSize: 13 }}>Արխիվ</span>}
                                            name="archive"
                                            checked={varchive}
                                            onChange={(e) => handleChangeCheck(e)}
                                        />
                                    </div>
                                    {/* <div

                                    >
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label={<span style={{ fontSize: 13 }}>Ապաակտիվացում</span>}
                                            name="active"
                                            checked={vactive}
                                            onChange={(e) => handleChangeCheck(e, '0')}
                                        />
                                    </div> */}
                                    <div

                                    >
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label={<span style={{ fontSize: 13 }}>Շտապ</span>}
                                            name="urgent"
                                            checked={vurgent}
                                            onChange={(e) => handleChangeCheck(e, '1')}
                                        />
                                    </div>
                                    <div>
                                        <FormControl>
                                            {/* <FormLabel id="demo-radio-buttons-group-label">Ակտիվացում</FormLabel> */}
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                value={vactive}
                                                name="active"
                                                onChange={(e) => {
                                                    verj.active = Number(e.target.value)
                                                    setVerj({ ...verj })
                                                    setVactive(e.target.value)
                                                }}
                                            >
                                                <div style={{ display: "flex" }}>
                                                    <FormControlLabel
                                                        value='0'
                                                        control={<Radio />}
                                                        label="Պասիվ"

                                                    />
                                                    <FormControlLabel
                                                        value='1'
                                                        control={<Radio />}
                                                        label="Ակտիվ"
                                                    />
                                                </div>
                                            </RadioGroup>
                                        </FormControl>
                                    </div>

                                </div>
                            </div>
                        </Box>
                    </>}
                    <DeleteModal open={openDelete} setOpen={setOpenDelete} id={currentId} action={FlatDelete} />
                </form>
                {currentFlat && currentFlat?.[0]?.[0].type && currentFlat?.[0]?.[0].type === "Short Term" && <CalendarEdit calItem={calItem} />}
            </Box>}
            {loading && <div className="loading">Կատարվում է․․․</div>}
        </div>
    );
};

export default EditAppartament;
