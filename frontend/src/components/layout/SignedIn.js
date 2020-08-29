import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Hidden from "@material-ui/core/Hidden";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge'; 
import { Tooltip, List, ListItem, Drawer, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import headerStyle from '../../assets/styles/headerStyle';


class SignedIn extends Component{
	constructor(){
		super();
		this.state= {
			mobileOpen: false
		};
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
	}

    componentDidMount(){
        console.log("signed in mounted");
    }

    componentWillUnmount(){
        console.log("signed in unmounted");
    }
    handleDrawerToggle() {
        this.setState((state) => ({
            mobileOpen: !state.mobileOpen
        }));
    };

	render(){
		const { classes} = this.props;
		return(
		//need to check auth when ready	
			<div  >
				<AppBar position = "static"  >
                    <Toolbar>
                      <Typography variant="h4" className = {classes.title}>
                        Library X
                      </Typography>
                      <IconButton component={Link} to="/" >
                        <ImportContactsRoundedIcon />
                      </IconButton>

                    </Toolbar>
                </AppBar>
                <Container>
                    {this.props.children}
                </Container>
			</div>
		);

	}
}

export default (withTheme(withStyles(headerStyle)(SignedIn)));