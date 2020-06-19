/**
 * This is the navbar component
 * @author Daniel Rodriguez
 */
import React, { useState } from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../styles/material/navbar';

const NavBar = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	}
	const handleDrawerClose = () => {
		setOpen(false);
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
							Portfolio Admin Page
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
					<IconButton onClick={handleDrawerClose}>
						hola
					</IconButton>
				</div>
				<Divider />

			</Drawer>
		</div>
	);
};

export default NavBar;
