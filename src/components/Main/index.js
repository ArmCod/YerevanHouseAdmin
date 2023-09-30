import { Box, Button, TextField } from "@mui/material";
import { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  adminPages,
  dailyPages,
  isAuthPages,
  sellerPages,
} from "../../utils/routing/routes";
import "./main.css";
import { LOGIN_PAGE } from "../../utils/routing/urls";
import Login from "../login/Login";
import { useSelector } from "react-redux";
import Search from "./search";

const Main = () => {
  const isAuth = useSelector((state) => state?.isAuthReducer?.isAuth);
  const Admins = useSelector((state) => state?.isAuthReducer?.roleType);
  return (
    <div className="container">
      {isAuth ? (
        <>
          <Link to="/new" style={{ textDecoration: "none" }}>
            <Button color="secondary" variant="contained">
              Նոր հայտարարություն
            </Button>
          </Link>
          <div className="all">
            {Admins?.[0].type === "admin"
              ? adminPages.map(({ id, path, pathtrue, name, image }) => (
                  <Fragment key={id}>
                    <Link
                      to={pathtrue ? pathtrue : path}
                      style={{ textDecoration: "none" }}
                      key={id}
                    >
                      <div className="mainbox">
                        <img src={image} className="mainimage" alt="image" />
                        <div
                          style={{
                            height: 70,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <span className="item-name">
                            {name.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Fragment>
                ))
              : Admins?.[0].type === "seller"
              ? sellerPages.map(({ id, path, pathtrue, name, image }) => (
                  <Fragment key={id}>
                    <Link
                      to={pathtrue ? pathtrue : path}
                      style={{ textDecoration: "none" }}
                      key={id}
                    >
                      <div className="mainbox">
                        <img src={image} className="mainimage" alt="image" />
                        <div
                          style={{
                            height: 70,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <span className="item-name">
                            {name.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Fragment>
                ))
              : Admins?.[0].type === "daily" &&
                dailyPages.map(({ id, path, pathtrue, name, image }) => (
                  <Fragment key={id}>
                    <Link
                      to={pathtrue ? pathtrue : path}
                      style={{ textDecoration: "none" }}
                      key={id}
                    >
                      <div className="mainbox">
                        <img src={image} className="mainimage" alt="image" />
                        <div
                          style={{
                            height: 70,
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <span className="item-name">
                            {name.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Fragment>
                ))}
          </div>
          <Search />
        </>
      ) : (
        <Routes>
          <Route path={LOGIN_PAGE} element={<Login />} />
        </Routes>
      )}
    </div>
  );
};

export default Main;
