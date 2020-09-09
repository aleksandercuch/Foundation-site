import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  navLink: {
    textDecoration: 'none',
  },
  button: {
    'textTransform': 'none'
  },
  navButton: {
    'textTransform': 'none',
    'width': 100
  }
});

class BlogNavBar extends Component {

  render() {

    const { classes } = this.props;

    return (
      <Box mt={5}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={9}
        >
          <Grid item xs={8}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={8}>
                <Box fontSize="h5.fontSize" fontWeight="fontWeightLight" fontFamily="Monospace">
                  <b>BLOG</b> - SPRAWDŹ CO SŁYCHAĆ W POMOŚCIE
						  	</Box>
              </Grid>
              <Grid item xs={4}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={6}>
                    <NavLink to="social-media" className={classes.navLink}>
                      <Button variant="outlined" color="primary" className={classes.button}>
                        social media
                      </Button>
                    </NavLink>
                  </Grid>
                  <Grid item xs={6}>
                    <NavLink to="zdjecia" className={classes.navLink}>
                      <Button variant="outlined" color="primary" className={classes.button}>
                        zdjęcia
                      </Button>
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={8}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <NavLink to="/blog/wszystko" className={classes.navLink}>
                      <Button color="primary" className={classes.navButton}>
                        WSZYSTKO
                      </Button>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/blog/wydarzenia" className={classes.navLink}>
                      <Button className={classes.navButton}>
                        wydarzenia
                      </Button>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/blog/wspomnienia" className={classes.navLink}>
                      <Button className={classes.navButton}>
                        wspomnienia
                      </Button>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/blog/prasowka" className={classes.navLink}>
                      <Button className={classes.navButton}>
                        prasówka
                      </Button>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/blog/baza-danych" className={classes.navLink}>
                      <Button className={classes.navButton}>
                        baza danych
                      </Button>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/blog/wazne" className={classes.navLink}>
                      <Button className={classes.navButton}>
                        ważne
                      </Button>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/blog/szkolenia" className={classes.navLink}>
                      <Button className={classes.navButton}>
                        szkolenia
                      </Button>
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item xs={6}>
                    <TextField size="small" id="outlined-basic" label="Szukaj" variant="outlined" />
                  </Grid>
                  <Grid item xs={5}>
                    <NavLink to="zdjecia" className={classes.navLink}>
                      <Button variant="outlined" color="primary" className={classes.button}>
                        Zaloguj/Zarejestruj
                    </Button>
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(styles)(BlogNavBar);