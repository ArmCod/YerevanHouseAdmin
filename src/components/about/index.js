import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import AboutUs from "./AboutUs";
import "./aboutUs.css";
import Stride from "./stride";




const AboutUsComponent = () => {


    return (
        <div className="container">
            <Link to="/" style={{ textDecoration: "none" }}><Button color="secondary" variant="contained">Գլխավոր</Button></Link>
            <Box m={3} className="boxHeigth">
                <AboutUs />
                <Stride />
            </Box>
        </div>
    );
};

export default AboutUsComponent;
