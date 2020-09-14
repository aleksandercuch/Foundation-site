import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { withStyles } from '@material-ui/styles';

import BlogNavbar from "../blogNavbar";
import ShareButton from "./subPagesComponents/shareButton";
import AdminStar from "./subPagesComponents/adminStar";

const styles = theme => ({
  navLink: {
    textDecoration: 'none',
  },
  button: {
    'textTransform': 'none'
  },
  padding: {
    'padding': 5
  },
  postImage: {
    'height': "auto",
    'width': "100%"
  },
});

class AllItems extends Component {
  render() {
    const { classes } = this.props;
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
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={3}>
              <Paper>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
                >
                  <Grid item xs={12}>
                    <img className={classes.postImage} src="https://static.wixstatic.com/media/ed491c_83f2e84f3e354dcab1abc5f6dc8c1522~mv2.jpg/v1/fill/w_600,h_450,al_c,lg_1,q_90/ed491c_83f2e84f3e354dcab1abc5f6dc8c1522~mv2.webp" alt="image error" />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item xs={10}>
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="center"
                          className={classes.padding}
                        >
                          <Grid item xs={2}>
                            <Avatar alt="error" src="https://avatars3.githubusercontent.com/u/29676936?s=460&u=d5ec72635bb4c9c6eb4f33bd0cd93ab358fa24db&v=4" />
                          </Grid>
                          <Grid item>
                            <Grid
                              container
                              direction="column"
                              justify="center"
                              alignItems="center"
                            >
                              <Grid item>
                                <Grid
                                  container
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                                >
                                  <Grid item>
                                    <Typography variant="caption" display="block" gutterBottom>
                                      Fundacja
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <AdminStar />
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item>
                                <Typography variant="caption">
                                  13 maj 1992
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={2}>
                        <ShareButton />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <NavLink to="/misja" className={classes.navLink}>
                      <Button className={classes.button}>
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="flex-start"
                          spacing={1}
                        >
                          <Grid item xs={12}>
                            <Typography className={classes.padding} variant="h5" align="left">
                              Przyjęcia do SOR zostały wznowione
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography className={classes.padding} variant="body1" align="left">
                              Wznawiamy przyjęcia do ośrodka. do ośrodka.
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <hr />
                          </Grid>
                        </Grid>
                      </Button>
                    </NavLink>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      className={classes.padding} 
                    >
                      <Grid item xs={10}>
                        <Typography className={classes.padding} variant="caption" display="block" gutterBottom>
                          53 wyświetlenia
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="center"
                        >
                          <Grid item>
                            <Typography className={classes.padding} variant="caption" display="block" gutterBottom>
                              1
                            </Typography>
                          </Grid>
                          <Grid item>
                            <FavoriteBorderIcon color="secondary" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AllItems);