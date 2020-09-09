import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import BlogNavbar from "../blogNavbar";

class Events extends Component {

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={10}>
          <BlogNavbar />
        </Grid>
        <Grid item xs={10}>
          Events
        </Grid>
      </Grid>
    );
  }
}

export default Events;