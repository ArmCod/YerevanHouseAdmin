import { ThemeContext } from "@emotion/react";
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
  TextField,
} from "@mui/material";
import axios from "axios";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../config/config";
import {
  getFlatPhoneThunk,
  getFlatSearchThunk,
  getFlatThunk,
  resetFlatThunk,
} from "../../store/actions/flatAction";
import Checks from "./checks";
import MinMax from "./minmax";
import PhoneFlatComponent from "./phoneproduct";
import Product from "./product";
import Selects from "./selects";

const ApartamentsComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { page, par } = useParams()
  const Admins = useSelector(state => state?.isAuthReducer?.roleType)
  const flat = useSelector((state) => state.flatReducer.flat);
  const phoneflat = useSelector((state) => state?.flatReducer?.phoneflat)
  const codeflat = useSelector((state) => state?.flatReducer?.codeflat)
  const [data, setData] = useState([]);
  const [axko, setAxko] = useState(1);
  const [nice, setNice] = useState({ type: Admins?.[0]?.type === 'admin' ? 'Sale' : Admins?.[0]?.type === 'seller' ? "Sale" : Admins?.[0]?.type === 'daily' && "For Rent", archive: '0' });
  let [checks, setChecks] = useState({
    new_building: "",
    elevator: "",
    urgent: ""
  });
  const [type, setType] = useState(Admins?.[0]?.type === 'admin' ? 'Sale' : Admins?.[0]?.type === 'seller' ? "Sale" : Admins?.[0]?.type === 'daily' && "For Rent");
  const [newBuilding, setNewBuilding] = useState(false);
  const [newElevator, setNewElevator] = useState(false);
  const [newUrgent, setNewUrgent] = useState(false)
  const [active, setActive] = useState("none");
  const [archive, setArchive] = useState('none')
  const [filter, setFilter] = useState({
    region: "",
    city: "",
    min_area: "",
    max_area: "",
    min_price: "",
    max_price: "",
    min_room: "",
    max_room: "",
    min_floor: "",
    max_floor: "",
    bathroom: "",
    code: "",
    byphone: "",
    search: '',
    notes: "",
    real_address: "",
    phone_number: ""
  });


  let [typeName, setTypeName] = useState({
    monolith: "",
    lets_draw: "",
    panel: "",
  });

  let [shinType, setShinType] = useState({
    old_renovation: "",
    partially_renovated: "",
    cosmetic_renovated: "",
    euro_renovated: "",
    generally_renovated: "",
    designer_style_renovated: "",
    '0_pointed': "",
  });

  useLayoutEffect(() => {
    const params = new URLSearchParams(par)
    for (const [key, value] of params.entries()) {
      filter[`${key}`] = value
      if (Object.keys(typeName).includes(key)) {
        typeName[`${key}`] = value
      }
      if (key === 'type') {
        setType(value)
      }
      if (key === 'bathroom') {
        setBathroom(value)
      }

      if (key === 'active') {
        setActive(value)
      }
      if (key === 'archive' && value == '1') {
        setArchive(value)
      }
      if (Object.keys(shinType).includes(key)) {
        shinType[`${key}`] = value
      }
      if (Object.keys(checks).includes(key)) {
        checks[`${key}`] = value
      }
    }
    setChecks({ ...checks })
    setTypeName({ ...typeName })
    setShinType({ ...shinType })
    setFilter({ ...filter })
  }, [])

  useLayoutEffect(() => {
    const params = new URLSearchParams(par)
    const obj = {}
    for (const [key, value] of params.entries()) {
      obj[`${key}`] = value
    }
    setNice(obj)
  }, [par])

  useEffect(() => {
    return () => {
      dispatch(resetFlatThunk());
    };
  }, []);




  let [bathroom, setBathroom] = useState("none");
  const handleTypeChange = (e, checkname) => {
    if (typeName[e.target.name] === '') {
      typeName[e.target.name] = checkname;
      setTypeName({ ...typeName });
    } else {
      typeName[e.target.name] = '';
      setTypeName({ ...typeName });
    }
  };

  const handleChecksChange = (e, checkname) => {
    if (checks[e.target.name] === '') {
      checks[e.target.name] = checkname;
      setChecks({ ...checks });
    } else {
      checks[e.target.name] = '';
      setChecks({ ...checks });
    }
  }

  const handleRenovateChange = (e, checkname) => {
    if (shinType[e.target.name] === '') {
      shinType[e.target.name] = checkname;
      setShinType({ ...shinType });
    } else {
      shinType[e.target.name] = '';
      setShinType({ ...shinType });
    }
  };

  const handleBathroomChange = (e) => {
    setBathroom(e.target.value);
  };

  useEffect(() => {

    dispatch(resetFlatThunk())
    dispatch(getFlatThunk(page, par));

  }, [page, par]);

  const minmaxdetect = (main, first, second) => {
    if (main[first] !== "" && main[second] === "") {
      main[second] = "10000000000"
    } else if (main[first] === "" && main[second] !== "") {
      main[first] = "0"
    }
  }

  const handleChange = (e) => {

    filter[e.target.name] = e.target.value;
    setFilter({ ...filter });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAxko(1);

    let truth = {};
    let istino = {};
    truth = { ...truth, ...filter, ...shinType, ...typeName, ...checks };

    // minmaxdetect(truth, 'min_price', 'max_price')
    // minmaxdetect(truth, 'min_area', 'max_area')
    // minmaxdetect(truth, 'min_floor', 'max_floor')
    // minmaxdetect(truth, 'min_room', 'max_room')
    // for (let key in filter) {
    //     if (filter[key] != '' && filter[key] !== null && filter[key] !== undefined && filter[key] !== 'none') {
    //         truth[key] = filter[key]
    //     }
    // }
    // for (let key in shinType) {
    //     if (shinType[key] !== '' && shinType[key] !== null && shinType[key] !== undefined && shinType[key] !== 'none') {
    //         truth[key] = shinType[key]
    //     }
    // }

    // for (let key in typeName) {
    //     if (typeName[key] !== '' && typeName[key] !== null && typeName[key] !== undefined && typeName[key] !== 'none') {
    //         truth[key] = typeName[key]
    //     }
    // }
    // for (let key in checks) {
    //     if (checks[key] !== '' && checks[key] !== null && checks[key] !== undefined && checks[key] !== 'none') {
    //         truth[key] = checks[key]
    //     }
    // }
    for (let key in truth) {
      if (
        truth[key] !== "" &&
        truth[key] !== null &&
        truth[key] !== undefined &&
        truth[key] !== "none"
      ) {
        istino[key] = truth[key];
      }
    }

    if (bathroom !== "none") {
      istino = { ...istino, bathroom };
    }
    if (active !== "none") {
      istino = { ...istino, active };
    }

    if (archive !== "none") {
      istino = { ...istino, archive }
    } else {
      istino = { ...istino, archive: '0' }
    }

    istino = { ...istino, type };
    // dispatch(getFlatThunk(page, istino));

    const queryString = new URLSearchParams(istino).toString()
    navigate(`/apartaments/1/` + new URLSearchParams(queryString).toString())

  };

  useEffect(() => {
    setData(flat);
  }, [flat]);

  const handlePageClick = (e) => {
    dispatch(resetFlatThunk())

    // dispatch(getFlatThunk(e.selected, nice));
    const queryString = new URLSearchParams(nice).toString()
    navigate(`/apartaments/${Number(e.selected) + 1}/` + new URLSearchParams(queryString).toString())
  };
  const filterClean = () => {
    setFilter({
      region: "",
      city: "",
      min_area: "",
      max_area: "",
      min_price: "",
      max_price: "",
      min_room: "",
      max_room: "",
      min_floor: "",
      max_floor: "",
      bathroom: "",
      search: "",
      notes: "",
      code: "",
      real_address: "",
      byphone: "",
      phone_number: ""
    });
    setChecks({
      new_building: "",
      elevator: "",
      urgent: ""
    });
    setShinType({
      old_renovation: "",
      partially_renovated: "",
      cosmetic_renovated: "",
      euro_renovated: "",
      generally_renovated: "",
      designer_style_renovated: "",
      '0_pointed': "",
    });
    setTypeName({
      monolith: "",
      lets_draw: "",
      panel: "",
    });
    setBathroom("none");
    setNewBuilding(false);
    setNewElevator(false);
    setNewUrgent(false)
    setActive("none");
    setArchive("none")
  };
  const ProductMemo = useMemo(
    () => (
      <Product
        rows={flat?.data}
        pages={Number(page) - 1}
        count={Math.ceil(flat?.total / flat?.per_page)}
        handlePageClick={handlePageClick}
        type={Admins?.[0]?.type}
        par={par}
        navigate={navigate}

      />
    ),
    [flat, page, par]
  );

  const MinMaxMemo = useMemo(
    () => <MinMax type={type} filter={filter} handleChange={handleChange} />,
    [filter, type]
  );

  const SelectsMemo = useMemo(
    () => <Selects type={type} filter={filter} setFilter={setFilter} handleChange={handleChange} />,
    [filter, type]
  );

  const ChecksMemo = useMemo(
    () => (
      <FormControl>
        <h4 style={{ margin: '20px 0 0' }}>ՀԱՏԿՈՒԹՅՈՒՆՆԵՐ</h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "5px",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Նորակառույց</span>}
              name="new_building"
              checked={checks.new_building.toLowerCase() === 'new_building'.toLowerCase()}
              onChange={(e) => handleChecksChange(e, "new_building")}
            />
          </div>
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Վերելակ</span>}
              name="elevator"
              checked={checks.elevator.toLowerCase() === 'elevator'.toLowerCase()}
              onChange={(e) => handleChecksChange(e, 'elevator')}
            />
          </div>
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Շտապ</span>}
              name="urgent"
              checked={checks.urgent === '1'}
              onChange={(e) => handleChecksChange(e, '1')}
            />
          </div>
        </div>
      </FormControl>
    ),
    [checks, type]
  );

  const TypeMemo = useMemo(
    () => (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"><span style={{ color: 'white', backgroundColor: 'black', padding: '5px 10px' }}>Շինության տիպ</span></FormLabel>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Մոնոլիտ</span>}
              name="monolith"
              checked={typeName.monolith.toLowerCase() === 'monolith'.toLowerCase()}
              onChange={(e) => handleTypeChange(e, "monolith")}
            />
          </div>
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Քարե</span>}
              name="lets_draw"
              checked={typeName.lets_draw.toLowerCase() === 'Lets_draw'.toLowerCase()}
              onChange={(e) => handleTypeChange(e, "Lets_draw")}
            />
          </div>
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Պանելային</span>}
              name="panel"
              checked={typeName.panel.toLowerCase() === 'panel'.toLowerCase()}
              onChange={(e) => handleTypeChange(e, "panel")}
            />
          </div>
        </div>

      </FormControl>
    ),
    [typeName, type]
  );


  const ShinMemo = useMemo(
    () => (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label"><span style={{ color: 'white', backgroundColor: 'black', padding: '5px 10px' }}>Վերանորոգում</span></FormLabel>

        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Հին վերանորոգված</span>}
              name="old_renovation"
              checked={shinType.old_renovation.toLowerCase() === 'old renovation'.toLowerCase()}
              onChange={(e) => handleRenovateChange(e, "old renovation")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Մասնակի</span>}
              name="partially_renovated"
              checked={shinType.partially_renovated.toLowerCase() === 'partially renovated'.toLowerCase()}
              onChange={(e) => handleRenovateChange(e, "partially renovated")}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Կոսմետիկ</span>}
              name="cosmetic_renovated"
              checked={shinType.cosmetic_renovated.toLowerCase() === 'cosmetic renovated'.toLowerCase()}
              onChange={(e) => handleRenovateChange(e, "cosmetic renovated")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Եվրովերանորոգում</span>}
              name="euro_renovated"
              checked={shinType.euro_renovated.toLowerCase() === 'Euro-renovated'.toLowerCase()}
              onChange={(e) => handleRenovateChange(e, "Euro-renovated")}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Դիզայներական</span>}
              name="designer_style_renovated"
              checked={shinType.designer_style_renovated.toLowerCase() === 'designer style renovated'.toLowerCase()}
              onChange={(e) => handleRenovateChange(e, "designer style renovated")}
            />
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Կապիտալ</span>}
              name="generally_renovated"
              checked={shinType.generally_renovated.toLowerCase() === 'generally renovated'.toLowerCase()}
              onChange={(e) => handleRenovateChange(e, "generally renovated")}
            />
          </div>
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>0-ական</span>}
            name="0_pointed"
            checked={shinType['0_pointed'].toLowerCase() === '0-pointed'.toLowerCase()}
            onChange={(e) => handleRenovateChange(e, "0-pointed")}
          />
        </div>
      </FormControl>
    ),
    [shinType, type]
  );

  const BathroomMemo = useMemo(
    () => (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          <span style={{ color: 'white', backgroundColor: 'black', padding: '5px 10px' }}>Սանհանգույցների քանակ</span>
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={bathroom}
          name="bathroom"
          onChange={handleBathroomChange}
        >
          <div style={{ display: "flex" }}>
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4+" />
          </div>
        </RadioGroup>
      </FormControl>
    ),
    [bathroom, type]
  );

  const ActiveMemo = useMemo(
    () => (
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Ակտիվացում</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={active}
            name="active"
            onChange={(e) => setActive(e.target.value)}
          >
            <div style={{ display: "flex" }}>
              <FormControlLabel
                value="0"
                control={<Radio />}
                label={<span style={{ color: 'white', backgroundColor: 'black', padding: '5px 10px', }}>Պասիվ</span>}

              />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label={<span style={{ color: 'white', backgroundColor: 'black', padding: '5px 10px', }}>Ակտիվ</span>}
              />
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    ),
    [active, type]
  );

  const ArchiveMemo = useMemo(
    () => (
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Արխիվացում</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={archive}
            name="archive"
            onChange={(e) => setArchive(e.target.value)}
          >
            <div style={{ display: "flex" }}>
              <FormControlLabel
                value="0"
                control={<Radio />}
                label={<span style={{ color: 'white', backgroundColor: 'black', padding: '5px 10px', }}>Ոչ արխիվ.</span>}
              />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label={<span style={{ color: 'white', backgroundColor: 'black', padding: '5px 10px', }}>Արխիվ.</span>}
              />
            </div>
          </RadioGroup>
        </FormControl>
      </div>
    ),
    [archive, type]
  );

  const PhoneFlatMemo = useMemo(() => {
    return <PhoneFlatComponent data={phoneflat} />
  }, [phoneflat, type])

  const CodeFlatMemo = useMemo(() => {
    return <PhoneFlatComponent data={codeflat} />
  }, [codeflat])

  const Loading = () => {
    return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}><span style={{ fontSize: 22, color: 'black' }}>ԲԵՌՆՈՒՄ...</span></div>
  }

  return (
    <div>
      <div className="container">
        <div style={{ display: "flex", gap: 25, width: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "30%",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button color="secondary" variant="contained">
                Գլխավոր
              </Button>
            </Link>
            <Link to="/new" style={{ textDecoration: "none" }}>
              <Button color="secondary" variant="contained">
                Նոր հայտարարություն
              </Button>
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ width: "100%" }}>
              <div style={{ display: "flex", gap: 30, marginTop: 30, maxWidth: Admins?.[0]?.type === 'seller' && '550px' }}>
                {Admins?.[0]?.type !== 'seller' && <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Տիպ</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Տիպ"

                    name="type"
                    onChange={(e) => setType(e.target.value)}
                  >
                    {Admins?.[0]?.type !== 'daily' && <MenuItem value={"Sale"}>Վաճառք</MenuItem>}
                    {Admins?.[0]?.type !== 'seller' && <MenuItem value={"For Rent"}>Վարձակալություն</MenuItem>}
                    {Admins?.[0]?.type !== 'seller' && <MenuItem value={"Short Term"}>Օրավարձ</MenuItem>}
                  </Select>
                </FormControl>}
                {SelectsMemo}
              </div>
              {MinMaxMemo}
              {ChecksMemo}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {TypeMemo}
                {ShinMemo}
              </div>
              {BathroomMemo}
              {ActiveMemo}
              {ArchiveMemo}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: 100

                }}
              >
                <div style={{ display: 'flex', gap: 30 }}>
                  <Box>
                    <h5 style={{ margin: "3px 0" }}>Որոնում կոդով</h5>
                    <TextField
                      name="code"
                      value={filter.code}
                      onChange={handleChange}
                      placeholder="Որոնել"
                      size="small"
                    />
                  </Box>
                  <Box>
                    <h5 style={{ margin: "3px 0" }} id="truth">Որոնում ներքին տվյալներով</h5>
                    <TextField
                      name="byphone"
                      type={'text'}
                      value={filter.byphone}
                      onChange={handleChange}
                      placeholder="Որոնել"
                      size="small"
                    />
                  </Box>
                </div>
                <Box>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', bottom: '50px', left: 60 }}>
                    <div>
                      <h5 style={{ margin: "3px 0" }}>Իրական հասցե</h5>
                      <TextField
                        name="real_address"
                        value={filter.real_address}
                        onChange={handleChange}
                        placeholder="Որոնել"
                        size="small"
                      />
                    </div>
                    <div>
                      <h5 style={{ margin: "3px 0" }}>Հեռախոսահամար</h5>
                      <TextField
                        name="phone_number"
                        value={filter.phone_number}
                        onChange={handleChange}
                        placeholder="Որոնել"
                        size="small"
                      />
                    </div>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={filterClean}
                    >
                      Մաքրել Ֆիլտրացիաները{" "}
                    </Button>
                  </div>
                </Box>
              </div>
              <Box marginTop={2}>

                <Button type="submit" color="secondary" variant="contained" >
                  Հաստատել{" "}
                </Button>
              </Box>
            </div>
          </form>
        </div>
      </div>
      {codeflat === null && phoneflat === null && flat.length === 0 && <Loading />}
      {codeflat !== null && CodeFlatMemo}
      {phoneflat !== null && PhoneFlatMemo}
      {flat && phoneflat === null && ProductMemo}
    </div>
  );
};

export default ApartamentsComponent;
