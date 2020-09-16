import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import BlogNavbar from "../blogNavbar";
import ShareButton from "./subPagesComponents/shareButton";
import AdminStar from "./subPagesComponents/adminStar";
import "../blog.css";

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
        <Grid item xs={8}>
          <Paper className="cutImage">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item xs={6}>
                <img className="postImage" src="https://static.wixstatic.com/media/ed491c_83f2e84f3e354dcab1abc5f6dc8c1522~mv2.jpg/v1/fill/w_600,h_450,al_c,lg_1,q_90/ed491c_83f2e84f3e354dcab1abc5f6dc8c1522~mv2.webp" alt="image error" />
              </Grid>
              <Grid item xs={6}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  spacing={3}
                >
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item xs={10} className="padding">
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="center"
                          spacing={1}
                        >
                          <Grid item>
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
                      <Grid item xs={2} className="padding">
                        <ShareButton />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Button style={{ 'textTransform': 'none' }} >
                      <NavLink to="/misja" className="navLink padding" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="flex-start"
                          spacing={1}
                        >
                          <Grid item xs={12}>
                            <Typography variant="h5" align="left">
                              Przyjęcia do SOR zostały wznowione
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body1" align="left">
                              Wznawiamy przyjęcia do ośrodka. do ośrodka.
                            </Typography>
                          </Grid>
                        </Grid>
                      </NavLink>
                    </Button>
                  </Grid>
                  <Grid item xs={12} className="postInfo" >
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                      className="postFooter"
                    >
                      <Grid item xs={12}>
                        <hr />
                      </Grid>
                      <Grid item xs={10} className="padding">
                        <Typography variant="caption" display="block" gutterBottom>
                          53 wyświetlenia
                        </Typography>
                      </Grid>
                      <Grid item xs={2} className="padding">
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="center"
                        >
                          <Grid item>
                            <Typography variant="caption" display="block" gutterBottom>
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
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Events;