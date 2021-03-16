import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Box, Hidden, Drawer, List, ListItem, ListItemText} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Menu} from '@material-ui/icons'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    navRoot: {
        padding: '18px 40px',
        backgroundColor: '#ffffff',
        transition: '0.3s',
        boxShadow: '0 5px 12.09px 0.91px rgba(34, 34, 34, 0.08)',
        [theme.breakpoints.down('sm')]: {
            padding: '5px 20px',
        }
    },
    p0: {
        padding: '0'
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5px',
        [theme.breakpoints.up('md')]: {
            marginRight: '25px'
        }
    },
    navItemList: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        '&>li': {
            padding: '5px 15px'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    navMenuItem: {
        color: 'inherit', //#888484
        fontSize: '14px',
        fontWeight: '700',
        padding: '3px 5px',
        textDecoration: 'none',
        position: 'relative',
        zIndex: '1102',
        transition: '0.3s',
        '&::before': {
            content: '""',
            zIndex: '-1',
            display: 'block',
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            backgroundColor: '#f8ecc7',
            width: '0px',
            transition: '0.3s'
        },
        '&:hover': {
            color: '#1b1c21',
            '&::before': {
                width: '100%'
            }
        }
    },
    list: {
        width: 250
    },
    link: {
        color: '#4f4f4f',
        textDecoration: 'none'
    }
}));


function Navbar() {
    const [drawerOpen, serDrawerOpen] = useState(false)
    const trigger = useScrollTrigger({
        disableHysteresis: true
    })
    const classes = useStyles();
    return (
        <>
        <Drawer anchor="left" open={drawerOpen} onClose={()=>{serDrawerOpen(false)}}>
            <List className={classes.list}>
                <Link className={classes.link} to="/">
                    <ListItem button>
                        <ListItemText primary="Home"/>
                    </ListItem>
                </Link>
                <Link className={classes.link} to="/">
                    <ListItem button>
                        <ListItemText primary="About Us"/>
                    </ListItem>
                </Link>
                <Link className={classes.link} to="/">
                    <ListItem button>
                        <ListItemText primary="Contact Us"/>
                    </ListItem>
                </Link>
            </List>
        </Drawer>
        <AppBar position="fixed" className={classes.navRoot} 
            style={{backgroundColor: trigger? '#ffffff' : 'transparent', color: trigger? '#888484': '#ffffff' }}>
            <Toolbar className={classes.p0}>
                <div className={classes.logoContainer}>
                    <Link to="/">
                        <img src={logo} alt="logo" height="35" />
                    </Link>
                </div>
                <div style={{marginLeft: 'auto'}}>
                    <ul className={classes.navItemList}>
                        <li>
                            <Link to="/" className={classes.navMenuItem}>Home</Link>
                        </li>
                        <li>
                            <Link to="/" className={classes.navMenuItem}>About us</Link>
                        </li>
                        <li>
                            <Link to="/" className={classes.navMenuItem}>Contact us</Link>
                        </li>
                    </ul>
                </div>
                <Hidden mdUp>
                    <Box ml="auto">
                        <IconButton style={{color: 'inherit'}} onClick={()=>{serDrawerOpen(true)}}>
                            <Menu/>
                        </IconButton>
                    </Box>
                </Hidden>
            </Toolbar>
        </AppBar>
        </>
    );
}

export default Navbar