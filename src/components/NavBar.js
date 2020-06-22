/**
 * This is the navbar component
 * @author Daniel Rodriguez
 */
import React, { useState } from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, Divider, List, ListItemIcon, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import { useStyles } from '../styles/material/navbar';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	}
	const handleDrawerClose = () => {
		setOpen(false);
	}
	const goToProfile = () => {
		console.log(props);
		props.history.push('/profile');
	}
	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={clsx(classes.appBar, {
				[classes.appBarShift]: open,
			})}>
				<Toolbar className="navbar">
					<div className="navbar__brand">
						{!open && <IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							className="button button--menu"
							onClick={handleDrawerOpen}
						>
							<MenuIcon />
						</IconButton>}
						<Typography variant="h6">
							<Link to="/dashboard">Portfolio Admin Page</Link>
						</Typography>
					</div>
					<Button color="inherit" className="button">Logout</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose} className="button--menu">
						<ChevronLeftIcon fontSize="large" />
					</IconButton>
				</div>
				<Divider />
				<List className="menu">
					<ListItem button onClick={goToProfile}>
						<ListItemIcon>
							<AccountCircleIcon fontSize="large" />
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</ListItem>
					<ListItem button >
						<ListItemIcon>
							<WorkIcon fontSize="large"/>
						</ListItemIcon>
						<ListItemText primary="Projects" />
					</ListItem>
				</List>
			</Drawer>
		</div>
	);
};

export default NavBar;
