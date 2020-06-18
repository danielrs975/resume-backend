/**
 * This is the navbar component
 * @author Daniel Rodriguez
 */
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
	return (
		<AppBar position="static">
			<Toolbar className="navbar">
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">
					Portfolio Admin Page
				</Typography>
				<Button color="inherit">Logout</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
