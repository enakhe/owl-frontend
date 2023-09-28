import { useState } from 'react';
import DrawerMenu from './DrawerMenu';
import logo from '../../logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Tab, Tabs, useMediaQuery, useTheme, IconButton, Box, Tooltip, Avatar, Menu, MenuItem, Divider, ListItemIcon } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import SearchComp from '../Home/SearchComp';
import SearchIcon from '@mui/icons-material/Search';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [tagValue, setTagValue] = useState(0);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

    const handleChange = (event, newValue) => {
        setTagValue(newValue);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const pages = [
        {
            name: 'Home',
            route: '/',
        },

        {
            name: 'Memebership',
            route: '/memebership',
        },

        {
            name: 'Write',
            route: '/write',
        },

        {
            name: 'Pricing',
            route: '/pricing',
        },
    ]

    const tags = [
        "For you",
        "Entertainment",
        "News",
        "Book",
        "Technology",
        "Sport",
        "Business",
        "Science",
        "Health"
    ]

    return (
        <AppBar sx={{ background: '#ffffff', boxShadow: "none", borderBottom: "1.5px solid #e8eaed" }}>
            <Toolbar>
                <Link to='/'>
                    <img
                        src={logo}
                        srcSet={logo}
                        alt="Logo"
                        width="25"
                        loading="lazy"
                    />
                </Link>

                {
                    isMatch ? "" : (
                        <SearchComp />
                    )
                }

                {
                    isMatch ? (
                        <>
                            <Typography sx={{ fontSize: "1.5rem", paddingLeft: '3%', color: "#444746", fontWeight: "500" }}>
                                <Link style={{ color: "#444746" }} to='/'>Owl Publisher</Link>
                            </Typography>
                            <IconButton sx={{ color: "#444746", marginLeft: "auto", cursor: "pointer" }} onClick={() => { }}>
                                <SearchIcon />
                            </IconButton>
                            <DrawerMenu />
                        </>
                    ) : (
                        <>
                            <Tabs sx={{ marginLeft: "auto", color: "#444746" }} value={value} onChange={(e, value) => setValue(value)} indicatorColor='primary'>
                                {
                                    pages.map((page, index) => (
                                        <Link to={page.route} style={{ color: "#444746" }}>
                                            <Tab key={index} label={page.name} sx={{ textTransform: "capitalize", color: "#444746" }} />
                                        </Link>
                                    ))
                                }
                            </Tabs>
                            {
                                user ? (
                                    <>
                                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                            <Tooltip title="Account settings">
                                                <IconButton
                                                    onClick={handleClick}
                                                    size="small"
                                                    sx={{ ml: 2 }}
                                                    aria-controls={open ? 'account-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                >
                                                    <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            PaperProps={{
                                                elevation: 0,
                                                sx: {
                                                    overflow: 'visible',
                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                    mt: 1.5,
                                                    '& .MuiAvatar-root': {
                                                        width: 32,
                                                        height: 32,
                                                        ml: -0.5,
                                                        mr: 1,
                                                    },
                                                    '&:before': {
                                                        content: '""',
                                                        display: 'block',
                                                        position: 'absolute',
                                                        top: 0,
                                                        right: 14,
                                                        width: 10,
                                                        height: 10,
                                                        bgcolor: 'background.paper',
                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                        zIndex: 0,
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem>
                                                <Typography variant='p'>Signed in as {user.fullName.split(' ')[1]} </Typography>
                                            </MenuItem>
                                            <MenuItem>
                                                <Avatar /> My account
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem>
                                                <ListItemIcon>
                                                    <Settings fontSize="small" />
                                                </ListItemIcon>
                                                Settings
                                            </MenuItem>
                                            <MenuItem>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                        {/* <Tabs sx={{ color: "#444746" }}>
                                            <Tab label={user.FullName} sx={{ textTransform: "capitalize", color: "#444746", fontWeight: "700" }} />
                                        </Tabs> */}
                                        <Button sx={{ textTransform: "capitalize", marginLeft: "20px", }} color="error" size='large' variant="contained" onClick={onLogout}>
                                            Logout
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Link style={{ color: "#ffff" }} to='/signin'>
                                            <Button sx={{ textTransform: "capitalize" }} size='large' variant="contained">
                                                Sign In
                                            </Button>
                                        </Link>

                                        <Link style={{ color: "#ffff" }} to='/signup'>
                                            <Button sx={{ marginLeft: "10px", textTransform: "capitalize" }} size='large' variant="outlined">
                                                Get started
                                            </Button>
                                        </Link>
                                    </>
                                )
                            }
                        </>
                    )
                }
            </Toolbar>
            <div className="center">
                <Tabs value={tagValue} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
                    {
                        tags.map((tag, index) => (
                            <Tab key={index} label={tag} sx={{ textTransform: "capitalize" }} />
                        ))
                    }
                </Tabs>
            </div>
        </AppBar >
    );
}

export default Header