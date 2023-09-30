import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { adminLogout } from "../../store/actions/authAction";

const Header = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state?.isAuthReducer?.roleType)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="header">
            <div className="container" style={{ padding: 0, position: 'relative' }}>
                <div style={{ width: 100 }}>
                    <a href="https://www.yerevanhouse.am/" target='_blank' style={{ textDecoration: "none", }} >  <div className="title">YEREVAN HOUSE</div></a>
                </div>
                <div className="abs" >
                    <Button
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {data?.[0]?.name}

                    </Button>
                </div>
            </div>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => {
                    localStorage.removeItem('autorization-token')
                    localStorage.removeItem('admintypeasd')
                    window.location.replace('/')
                }}>Logout</MenuItem>
            </Menu>

        </div>
    );
}

export default memo(Header);