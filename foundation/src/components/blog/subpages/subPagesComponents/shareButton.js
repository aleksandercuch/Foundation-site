import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import PublicIcon from '@material-ui/icons/Public';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import UseStyles from '../../styles';

const ITEM_HEIGHT = 48;

export default function LongMenu() {

  const [link, setLink] = React.useState("some/text");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openShare, setShareOpen] = React.useState(false);
  const [openCopy, setCopyOpen] = React.useState(false);

  const classes = UseStyles();

  const menuOpened = Boolean(anchorEl);

  const onChangeLink = event => {
    setLink(event.target.value);
  };

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDialogOpen = () => {
    setAnchorEl(null);
    setShareOpen(true);
  };

  const handleDialogClose = () => {
    setShareOpen(false);
  };

  const handleCopyOpen = () => {
    setCopyOpen(true);
    setShareOpen(false);
  };

  const handleCopyClose = () => {
    setCopyOpen(false);
    setShareOpen(true);
  };

  const handleAllClose = () => {
    setCopyOpen(false);
    setShareOpen(false);
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClickMenu}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={menuOpened}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleDialogOpen}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <PublicIcon />
            </Grid>
            <Grid item>
              <Typography variant="body1">Udostępnij</Typography>
            </Grid>
          </Grid>
        </MenuItem>
        <Dialog
          open={openShare}
     
          keepMounted
          onClose={handleDialogClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogActions>
            <Button onClick={handleDialogClose} color="inherit">
              <CloseIcon />
            </Button>
          </DialogActions>
          <DialogTitle id="alert-dialog-slide-title" alignItems="center">
            <Typography variant="h5" align="center">Udostępnij post</Typography>
          </DialogTitle>
          <DialogContent>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Button>
                  <Avatar className={classes.large} alt="error" src="https://dailyweb.pl/wp-content/uploads/2018/12/facebook-1.jpg" />
                </Button>
              </Grid>
              <Grid item>
                <Button>
                  <Avatar className={classes.large} alt="error" src="https://lh3.googleusercontent.com/Gxhs1Y-quOA14tJvlWCROAfCYpZt-i0G_GUHKQz5gE8aoOnBVL-R6THJ_Zq3-QkmDcvz" />
                </Button>
              </Grid>
              <Grid item>
                <Button>
                  <Avatar className={classes.large} alt="error" src="https://dailyweb.pl/wp-content/uploads/2017/12/linkedin-1200x1200.jpg" />
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={handleCopyOpen}>
                  <Avatar className={classes.large} alt="error" src="https://getdrawings.com/free-icon/icon-link-69.png" />
                </Button>
                <Dialog
                  open={openCopy}

                  keepMounted
                  onClose={handleAllClose}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogActions>
                    <Button onClick={handleCopyClose} color="inherit">
                      <CloseIcon />
                    </Button>
                  </DialogActions>
                  <DialogTitle id="alert-dialog-slide-title" alignItems="center">
                    <Typography variant="h5" align="center">Udostępnij post</Typography>
                  </DialogTitle>
                  <DialogContent>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item xs={12}>
                        <TextField
                          label="Link"
                          onChange={onChangeLink}
                          value={link}
                          margin="normal"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <CopyToClipboard text={link}>
                          <Button variant="contained" color="primary">Kopiuj do udostępnienia</Button>
                        </CopyToClipboard>
                      </Grid>
                    </Grid>
                  </DialogContent>
                </Dialog>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Menu>
    </div>
  );
}
