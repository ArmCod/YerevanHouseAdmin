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
  getLandThunk,
  resetFlatThunk,
} from "../../store/actions/flatAction";
import PhoneFlatComponent from "./phoneproduct";
import Checks from "./checks";
import MinMax from "./minmax";
import Product from "./product";
import Selects from "./selects";

const LandsComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { page, par } = useParams()
  const Admins = useSelector(state => state?.isAuthReducer?.roleType)
  const land = useSelector((state) => state.flatReducer.land);
  const phoneflat = useSelector((state) => state?.flatReducer?.phoneflat)
  const codeflat = useSelector((state) => state?.flatReducer?.codeflat)

  const [data, setData] = useState([]);
  const [pages, setPages] = useState(0);
  const [nice, setNice] = useState({ type: Admins?.[0]?.type === 'admin' ? 'Sale' : Admins?.[0]?.type === 'seller' ? "Sale" : Admins?.[0]?.type === 'daily' && "For Rent", archive: '0' });
  let [checks, setChecks] = useState({
    not_inhabited: "",
    urgent: ""
  });
  const [type, setType] = useState(Admins?.[0]?.type === 'admin' ? 'Sale' : Admins?.[0]?.type === 'seller' ? "Sale" : Admins?.[0]?.type === 'daily' && "For Rent");
  const [active, setActive] = useState("none");
  const [shinutyun, setShinutyun] = useState(false);
  const [newUrgent, setNewUrgent] = useState(false)
  const [archive, setArchive] = useState('none')
  const [filter, setFilter] = useState({
    region: "",
    city: "",
    min_area: "",
    max_area: "",
    min_price: "",
    max_price: "",
    search: "",
    notes: "",
    byphone: "",
    real_address: "",
    phone_number: "",
    code: "",
  });

  useLayoutEffect(() => {
    const params = new URLSearchParams(par)

    for (const [key, value] of params.entries()) {
      filter[`${key}`] = value
      if (key === 'type') {
        setType(value)
      }
      if (key === 'active') {
        setActive(value)
      }
      if (key === 'archive' && value == '1') {
        setArchive(value)
      }
      if (Object.keys(checks).includes(key)) {
        checks[`${key}`] = value
      }
      if (Object.keys(tesak).includes(key)) {
        tesak[`${key}`] = value
      }
    }
    setTesak({ ...tesak })
    setChecks({ ...checks })
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

  let [tesak, setTesak] = useState({
    agricultural: "",
    for_residential_development: "",
    for_industrial_use: "",
    manufacturing_area: "",
    for_public_buildings: "",
    universal_spase: "",
  });
  let [realTesak, setRealTesak] = useState("none");

  useEffect(() => {
    dispatch(resetFlatThunk());
    dispatch(getLandThunk(page, par));

  }, [page, par]);

  const handleChange = (e) => {
    filter[e.target.name] = e.target.value;
    setFilter({ ...filter });

  };

  const minmaxdetect = (main, first, second) => {
    if (main[first] !== "" && main[second] === "") {
      main[second] = "10000000000"
    } else if (main[first] === "" && main[second] !== "") {
      main[first] = "0"
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();



    let truth = {};
    let istino = {};
    truth = { ...truth, ...filter, ...checks, ...tesak };

    // minmaxdetect(truth, 'min_price', 'max_price')
    // minmaxdetect(truth, 'min_area', 'max_area')

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

    if (active !== "none") {
      istino = { ...istino, active };
    }

    if (archive !== "none") {
      istino = { ...istino, archive }
    } else {
      istino = { ...istino, archive: '0' }
    }

    istino = { ...istino, type };
    // setNice(istino);

    // setPages(0);
    // dispatch(getLandThunk(0, istino));
    const queryString = new URLSearchParams(istino).toString()
    navigate(`/lands/1/` + new URLSearchParams(queryString).toString())

  };

  useEffect(() => {
    setData(land);
  }, [land]);

  const handlePageClick = (e) => {

    // dispatch(getFlatThunk(e.selected, nice));
    const queryString = new URLSearchParams(nice).toString()
    navigate(`/lands/${Number(e.selected) + 1}/` + new URLSearchParams(queryString).toString())
  };

  const handleTesakChange = (e, checkname) => {
    if (tesak[e.target.name] === '') {
      tesak[e.target.name] = checkname;
      setTesak({ ...tesak });
    } else {
      tesak[e.target.name] = '';
      setTesak({ ...tesak });
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

  const filterClean = () => {
    setFilter({
      region: "",
      city: "",
      min_area: "",
      max_area: "",
      min_price: "",
      max_price: "",
      search: "",
      notes: "",
      real_address: "",
      byphone: "",
      phone_number: "",
      code: "",
    });
    setShinutyun(false);
    setNewUrgent(false)
    setTesak({
      agricultural: "",
      for_residential_development: "",
      for_industrial_use: "",
      manufacturing_area: "",
      for_public_buildings: "",
      universal_spase: "",
    });
    setRealTesak(false);
    setChecks({
      not_inhabited: "",
      urgent: ""
    });
    setActive("none");
    setArchive("none")
  };

  const ProductMemo = useMemo(
    () => (
      <Product
        rows={land?.data}
        pages={Number(page) - 1}
        count={Math.ceil(land?.total / land?.per_page)}
        handlePageClick={handlePageClick}
        type={Admins?.[0]?.type}
        par={par}
        navigate={navigate}

      />
    ),
    [land, page, par]
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
          {/* <div
            style={{
              width: "200px",
              height: "50px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Շինություն</span>}
              name="not_inhabited"
              checked={checks.not_inhabited.toLowerCase() === 'not_inhabited'.toLowerCase()}
              onChange={(e) => handleChecksChange(e, "not_inhabited")}
            />
          </div> */}
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
              checked={checks.urgent.toLowerCase() === '1'.toLowerCase()}
              onChange={(e) => handleChecksChange(e, '1')}
            />
          </div>
        </div>
      </FormControl>
    ),
    [checks, type]
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

  const TesakMemo = useMemo(
    () => (
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label"><span style={{ color: 'white', backgroundColor: 'black', padding: '5px 10px' }}>Տեսակ</span></FormLabel>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label={<span style={{ fontSize: 13 }}>Գյուղատնտեսական</span>}
                  name="agricultural"
                  checked={tesak.agricultural.toLowerCase() === 'agricultural'.toLowerCase()}
                  onChange={(e) => handleTesakChange(e, "agricultural")}
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
                  label={<span style={{ fontSize: 13 }}>Բնակելի շին․ համար</span>}
                  name="for_residential_development"
                  checked={tesak.for_residential_development.toLowerCase() === 'for residential development'.toLowerCase()}
                  onChange={(e) => handleTesakChange(e, "for residential development")}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label={<span style={{ fontSize: 13 }}>Արդյունաբերական</span>}
                  name="for_industrial_use"
                  checked={tesak.for_industrial_use.toLowerCase() === 'for industrial use'.toLowerCase()}
                  onChange={(e) => handleTesakChange(e, "for industrial use")}
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
                  label={<span style={{ fontSize: 13 }}>Արտադրական</span>}
                  name="manufacturing_area"
                  checked={tesak.manufacturing_area.toLowerCase() === 'manufacturing area'.toLowerCase()}
                  onChange={(e) => handleTesakChange(e, "manufacturing area")}
                />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label={<span style={{ fontSize: 13 }}>Հասարակական</span>}
                  name="for_public_buildings"
                  checked={tesak.for_public_buildings.toLowerCase() === 'for public buildings'.toLowerCase()}
                  onChange={(e) => handleTesakChange(e, "for public buildings")}
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
                  label={<span style={{ fontSize: 13 }}>Ընդհանուր օգտագործման</span>}
                  name="universal_spase"
                  checked={tesak.universal_spase.toLowerCase() === 'universal spase'.toLowerCase()}
                  onChange={(e) => handleTesakChange(e, "universal spase")}
                />
              </div>
            </div>
          </div>
        </FormControl>
      </div>
    ),
    [tesak, type]
  );

  const PhoneFlatMemo = useMemo(() => {
    return <PhoneFlatComponent data={phoneflat} />
  }, [phoneflat, type])

  const Loading = () => {
    return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}><span style={{ fontSize: 22, color: 'black' }}>ԲԵՌՆՈՒՄ...</span></div>
  }

  const CodeFlatMemo = useMemo(() => {
    return <PhoneFlatComponent data={codeflat} />
  }, [codeflat])
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
              {TesakMemo}
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
                      type={'text'}
                      value={filter.code}
                      onChange={handleChange}
                      placeholder="Որոնել"
                      size="small"
                    />
                  </Box>
                  <Box>
                    <h5 style={{ margin: "3px 0" }}>Որոնում ներքին տվյալներով</h5>
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
      {codeflat === null && phoneflat === null && land.length === 0 && <Loading />}
      {codeflat !== null && CodeFlatMemo}
      {phoneflat !== null && PhoneFlatMemo}
      {land && phoneflat === null && ProductMemo}
    </div>
  );
};

export default LandsComponent;
