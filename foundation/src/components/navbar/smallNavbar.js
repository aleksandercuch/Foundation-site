import React from 'react';
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function subMenuItem(name) {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      <Grid item >
        <ArrowDropUpIcon fontSize="inherit" />
      </Grid>
      <Grid item xs={8}>
        {name}
      </Grid>
    </Grid>
  )
}

export default function smallNavbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem >
          <Box fontWeight="fontWeightBold">
            <NavLink to="/o-fundacji" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
              O fundacji
            </NavLink>
            <List>
              <ListItem button="true">
                <Box fontWeight="fontWeightBold">
                  <NavLink to="/misja" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                    {subMenuItem("Misja")}
                  </NavLink>
                </Box>
              </ListItem>
              <ListItem button="true">
                <Box fontWeight="fontWeightBold">
                  <NavLink to="/co-robimy" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                    {subMenuItem("Co robimy?")}
                  </NavLink>
                </Box>
              </ListItem>
              <ListItem button="true">
                <Box fontWeight="fontWeightBold">
                  <NavLink to="/zespol" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                    {subMenuItem("Zespół")}
                  </NavLink>
                </Box>
              </ListItem>
              <ListItem button="true">
                <Box fontWeight="fontWeightBold">
                  <NavLink to="projekty" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                    {subMenuItem("Projekty")}
                  </NavLink>
                </Box>
              </ListItem>
              <ListItem button="true">
                <Box fontWeight="fontWeightBold">
                  <NavLink to="sprawozdania" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                    {subMenuItem("Sprawozdania")}
                  </NavLink>
                </Box>
              </ListItem>
            </List>
          </Box>
        </ListItem>
        <Divider />
        <ListItem>
          <Box fontWeight="fontWeightBold">
            <NavLink to="/osrodek-readaptacji" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
              Ośrodek readaptacji
            </NavLink>
            <List>
              <ListItem button="true">
                <Box fontWeight="fontWeightBold">
                  <NavLink to="/dla-kogo" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                    {subMenuItem("Dla kogo?")}
                  </NavLink>
                </Box>
              </ListItem>
              <ListItem button="true">
                <Box fontWeight="fontWeightBold">
                  <NavLink to="/zalozenia" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                    {subMenuItem("Założenia")}
                  </NavLink>
                </Box>
              </ListItem>
              <ListItem>
                <Box fontWeight="fontWeightBold">
                  <NavLink to="/zespol" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                    {subMenuItem("Program")}
                  </NavLink>
                  <List>
                    <ListItem button="true">
                      <Box fontWeight="fontWeightBold">
                        <NavLink to="/co-robimy" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                          {subMenuItem("Punkt konsultacyjny")}
                        </NavLink>
                      </Box>
                    </ListItem>
                    <ListItem button="true">
                      <Box fontWeight="fontWeightBold">
                        <NavLink to="/co-robimy" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                          {subMenuItem("Etap readaptacji")}
                        </NavLink>
                      </Box>
                    </ListItem>
                    <ListItem button="true">
                      <Box fontWeight="fontWeightBold">
                        <NavLink to="/co-robimy" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                          {subMenuItem("Etap postrehabilitacji")}
                        </NavLink>
                      </Box>
                    </ListItem>
                    <ListItem button="true">
                      <Box fontWeight="fontWeightBold">
                        <NavLink to="/co-robimy" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                          {subMenuItem("Grupy wsparcia")}
                        </NavLink>
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </ListItem>
              <ListItem button="true">
                <Box fontWeight="fontWeightBold">
                  <NavLink to="/o-metodzie" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item >
                        <ArrowDropUpIcon fontSize="inherit" />
                      </Grid>
                      <Grid item >
                        O metodzie
                      </Grid>
                    </Grid>
                  </NavLink>
                </Box>
              </ListItem>
            </List>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button="true">
          <Box fontWeight="fontWeightBold">
            <NavLink to="/oferta-szkolen" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
              Oferta szkoleń
            </NavLink>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button="true">
          <Box fontWeight="fontWeightBold">
            <NavLink to="/potrzebujesz-wsparcia" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
              Potrzebujesz wsparcia?
            </NavLink>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button="true">
          <Box fontWeight="fontWeightBold">
            <NavLink to="/chcesz-pomoc" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
              Chcesz pomóc?
            </NavLink>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button="true">
          <Box fontWeight="fontWeightBold">
            <NavLink to="/blog" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
              Blog
            </NavLink>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button="true">
          <Box fontWeight="fontWeightBold">
            <NavLink to="/kontakt" style={{ 'color': 'inherit', 'textDecoration': 'none' }}>
              Kontakt
            </NavLink>
          </Box>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
      <Drawer anchor="left" open={state.left} onClose={toggleDrawer('left', false)}>
        {fullList('left')}
      </Drawer>
    </div>
  );
}
