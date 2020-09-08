import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Carousels from "./carousel"

import './home.css';

class Home extends Component {

	render() {
		return (
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="flex-start"
			>
				<Grid item xs={12}>
                    <Carousels />
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
			</Grid>
		);
	}
}

export default Home;