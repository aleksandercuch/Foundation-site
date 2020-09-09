import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import BlogNavbar from "../blogNavbar";

class NewsPaper extends Component {

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
          NewsPaper
        </Grid>
      </Grid>
    );
  }
}

export default NewsPaper;