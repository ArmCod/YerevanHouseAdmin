import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    TextareaAutosize,
    TextField,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import a11yProps from '../../utils/helpers/allprops';
import TabPanel from '../../utils/helpers/tabpanel';
import { useDispatch, useSelector } from 'react-redux';
import { FlatPost } from "../../store/actions/flatAction";
import { baseUrl, token } from "../../config/config";
import axios from "axios";
import Swal from "sweetalert2";

import ConvertBase64, { ConvertMultiple } from "../../utils/helpers/base64";
import DescriptionSection from "./descitptioonsection";
import Main from "./main";
import AllChecks from "./checkbox";
import Client from "./client";
import AllImages from "./images";
import { getCityThunk, getRegionThunk } from "../../store/actions/regionAction";

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

const Statement = () => {
    const Admins = useSelector(state => state?.isAuthReducer?.roleType)
    const region = useSelector(state => state.regionReducer.region)
    const city = useSelector(state => state.regionReducer.city)
    const dispatch = useDispatch()
    const { ymaps } = window
    const [coords, setCoords] = useState();
    const [loading, setLoading] = useState(false)
    let [regId, setRegId] = useState(1)
    const [images, setImages] = useState([])
    const [convert, setConvert] = useState([])
    const [turhtype, setTruthtype] = useState(Admins?.[0]?.type === 'admin' ? 'Sale' : Admins?.[0]?.type === 'seller' ? "Sale" : Admins?.[0]?.type === 'daily' ? "For Rent" : "")
    let [data, setData] = useState({
        area: '',
        region: 'Yerevan',
        active: 0,
        city: '',
        user_id: '',
        type: Admins?.[0]?.type === 'admin' ? 'Sale' : Admins?.[0]?.type === 'seller' ? "Sale" : Admins?.[0]?.type === 'daily' ? "For Rent" : "",
    })
    useEffect(() => {
        data.type = Admins?.[0]?.type === 'admin' ? 'Sale' : Admins?.[0]?.type === 'seller' ? "Sale" : Admins?.[0]?.type === 'daily' ? "For Rent" : "";
        data.user_id = Admins?.[0]?.id
        setTruthtype(Admins?.[0]?.type === 'admin' ? 'Sale' : Admins?.[0]?.type === 'seller' ? "Sale" : Admins?.[0]?.type === 'daily' ? "For Rent" : "")
        setData({ ...data })
    }, [Admins])

    useEffect(() => {
        dispatch(getRegionThunk())
        dispatch(getCityThunk(1))
    }, [])
    const [main, setMain] = useState({
        code: '',
        bathroom: '',
        tualet: '',
        area: '',
        balcon: '',
        viewed: 0,
        lead_area: '',
        one_bed: '',
        two_bed: '',
        new_inner: '',
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
    })
    const [table, setTable] = useState('flat')

    useEffect(() => {
        ymaps?.ready(() => {
            const map = new ymaps.Map('map', {
                center: [40.187247, 44.521305],
                zoom: 10,
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


            placemark.events.add('dragend', (event) => {
                const newCoords = event.get('target').geometry.getCoordinates();
                setCoords(newCoords);
                handleGeocode(ymaps, newCoords).then((result) => {
                    searchControl.search(result);
                });
            });
            map.geoObjects.add(placemark);

            // Add click listener for map
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

    }, []);

    // const { ymaps } = window
    // ymaps.ready(init);
    // function init() {
    //     var myMap = new ymaps.Map("map", {
    //         center: [55.76, 37.56],

    //         zoom: 7
    //     });

    // }

    // ymaps.geocode('Moscow, Red Square').then(function (res) {
    //     var firstGeoObject = res.geoObjects.get(0);
    //     var latitude = firstGeoObject.geometry.getCoordinates()[0];
    //     var longitude = firstGeoObject.geometry.getCoordinates()[1];

    // });



    const handleChange = (e) => {
        data[e.target.name] = e.target.value;
        setData({ ...data })
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
        if (images.length === 0) {
            setLoading(false)
            await Swal.fire({

                icon: 'error',
                title: 'Oops...',
                text: 'Ավելացրեք նկար',
                showConfirmButton: false,
                timer: 3500
            })

        } else {


            data = { ...data, ...main, ...checks, ...client, ...secondary, }

            if (coords) {
                data = { ...data, lat: coords[0], lng: coords[1] }
            }
            debugger
            if (table === 'flat' || table === 'commerical') {
                if (data?.current_floor === '0' || data?.current_floor === 0) {
                    data.floor = '*'
                } else if (data?.current_floor !== 0 && (data?.flat_floor === '' || data?.flat_floor === 0 || data?.flat_floor === '0')) {
                    data.floor = data.current_floor
                } else {
                    data.floor = `${data?.current_floor}/${data?.flat_floor}`
                }
            } else {
                data.floor = data.current_floor
                data.current_floor = ''

            }

            await setData(prev => ({ ...prev, ...main, ...checks, ...client, ...secondary }))





            const formdata = new FormData()
            for (let key in data) {
                if (data[key] !== '' && data[key] !== null) {
                    formdata.append(key, data[key])
                }
            }

            for (let i = 0; i < images.length; i++) {
                formdata.append('image[]', images[i].file);
            }


            await axios.post(`${baseUrl}/${table === 'flat' ? 'flats' : table === 'house' ? 'house' : table === 'land' ? 'landareas' : 'commercial'}`, formdata, {
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
                        timer: 1500
                    })
                })
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


    // const sec = useCallback((e) => {
    //     if (!Number(e.target.value)) {
    //         secondary[e.target.name] = e.target.value;
    //         setSecondary({ ...secondary })

    //     } else {
    //         secondary[e.target.name] = Number(e.target.value);
    //         setSecondary({ ...secondary })
    //     }
    // }, [secondary])

    const MainMemo = useMemo(() => (
        <Main table={table} data={main} type={turhtype} handleChange={handleMainChange} />
    ), [main, table, turhtype]);

    const DescriptionSectionMemo = useMemo(() => (
        <DescriptionSection data={secondary} handleChange={handleSecondaryChange} />
    ), [secondary, table]);

    const AllChecksMemo = useMemo(() => (
        <AllChecks table={table} data={checks} type={turhtype} setData={setChecks} />
    ), [checks, table, turhtype]);

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
    }

    const handleImageEdit = async (event, k) => {
        const resizedFile = await resizeImage(event.target.files[0]);
        images[k].file = resizedFile
        setImages([...images])
        const image2 = await ConvertMultiple(event.target.files[0])
        convert.splice(k, 1, image2)
        setConvert([...convert])
    }

    const handleImageAdd = async (event) => {
        images.push({ file: event.target.files[0], index: images[images.length - 1].index + 1 })
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
        const dragImage = images[dragIndex];
        const updatedImages = [...images];
        updatedImages.splice(dragIndex, 1);
        updatedImages.splice(dropIndex, 0, dragImage);

        // Update the sort values after reordering
        const sortedImages = updatedImages.map((image, index) => ({
            ...image,
            index: index,
        }));

        const draggedConvert = convert[dragIndex];
        const newConvert = convert.filter((cvt) => cvt !== draggedConvert);
        newConvert.splice(dropIndex, 0, draggedConvert);
        setConvert(newConvert);

        setImages(sortedImages);
        setDragOverIndex(null);
    };
    const handleDragEnter = (e, index) => {

        setDragOverIndex(index);
    };

    const handleDragEnd = () => {
        setDragOverIndex(null);
    };

    return (
        <div className="statement">
            <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
                < Link to="/" style={{ textDecoration: "none" }}><Button color="secondary" variant="contained">Գլխավոր</Button></Link>
                {ViewedMemo}
            </div >
            <Box >
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h2 mt={3} mb={3}>
                            ՆՈՐ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ
                        </h2>
                        {/* {ViewedMemo} */}
                    </div>
                    <hr />
                    <div style={{ display: 'flex', gap: 50, marginTop: 30 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Կատեգորիա</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={table}
                                label="Կատեգորիա"
                                required
                                onChange={(e) => {
                                    if (e.target.value === "commerical" && data.type === "Short Term") {
                                        setTruthtype("For Rent")
                                        setData({ ...data, type: "For Rent" })
                                    }
                                    setTable(e.target.value)
                                }}
                            >
                                <MenuItem value={"flat"}>Բնակարաններ</MenuItem>
                                <MenuItem value={"house"}>Առանձնատներ</MenuItem>
                                {Admins?.[0]?.type !== 'daily' && <MenuItem value={"land"}>Հողատարածքներ</MenuItem>}
                                <MenuItem value={"commerical"}>Կոմերցիոն</MenuItem>
                            </Select>
                        </FormControl>
                        {Admins?.[0]?.type !== 'seller' && <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Տիպ</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.type}
                                label="Տիպ"
                                name="type"
                                required
                                onChange={(e) => {
                                    setTruthtype(e.target.value)
                                    handleChange(e)
                                }}
                            >
                                {Admins?.[0]?.type !== 'daily' && <MenuItem value={"Sale"}>Վաճառք</MenuItem>}
                                {Admins?.[0]?.type !== 'seller' && <MenuItem value={"For Rent"}>Վարձակալություն</MenuItem>}
                                {Admins?.[0]?.type !== 'seller' && table !== "commerical" && <MenuItem value={"Short Term"}>Օրավարձ</MenuItem>}
                            </Select>
                        </FormControl>}
                    </div>
                    <div style={{ display: 'flex', gap: 50, marginTop: 30 }}>
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
                        {/* {table === 'commerical' && <FormControl fullWidth>
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
                        </FormControl>} */}
                    </div>

                    {table && <>
                        {MainMemo}
                        {DescriptionSectionMemo}
                        {AllChecksMemo}
                        {ClientMemo}

                        <div id="map" style={{ width: '100%', height: '400px', margin: '20px 0' }}></div>

                        <Box>
                            <h2 mt={4} style={{ margin: '25px 0 2px 0' }}>
                                ԸՆՏՐԵՔ ՆԿԱՐՆԵՐ
                            </h2>
                            <hr />
                        </Box>
                        <Box marginBottom={2}>
                            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', }}>
                                {convert?.map((i, k) => (
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
                                        <div style={{ border: '1px solid black', padding: 10, position: 'relative', marginBottom: 10 }} >
                                            <div style={{ position: 'absolute', right: 4, top: 4, color: "black", cursor: 'pointer' }} onClick={() => handleImageDelete(k)}>❌</div>
                                            <img src={i} width={150} height={150} alt="nkar" />
                                        </div>
                                        <label htmlFor={`edit${k}`} >
                                            <span className="editImage">Խմբագրել</span>
                                            <input style={{ display: 'none' }} onChange={(e) => handleImageEdit(e, k)} id={`edit${k}`} multiple={false} type="file" />
                                        </label>
                                    </div>
                                ))}
                                {images?.length > 0 && <div style={{ height: 170, display: 'flex', alignItems: 'flex-end' }}><label htmlFor="add" >
                                    <span className="addImage">Ավելացնել</span>
                                    <input style={{ display: 'none' }} onChange={fileSelectedHandler} id="add" multiple type="file" />
                                </label>
                                </div>}
                            </div>
                        </Box>

                        {images?.length === 0 && <Box>
                            <div style={{ height: 30, display: 'flex', alignItems: 'flex-end' }}><label htmlFor="add" >
                                <span className="addImage">Ավելացնել Նկարներ</span>
                                <input style={{ display: 'none' }} onChange={fileSelectedHandler} id="add" multiple type="file" />
                            </label>
                            </div>
                        </Box>}
                        <Box marginTop={2}>
                            <Button type="submit" color="secondary" variant="contained" disabled={loading}>
                                Հաստատել{" "}
                            </Button>
                        </Box>
                    </>}
                </form>
            </Box>
            {loading && <div className="loading">Կատարվում է․․․</div>}
        </div >
    );
};

export default Statement;
