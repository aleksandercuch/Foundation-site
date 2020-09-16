import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import ImageUploader from 'react-images-upload';

import './upload.css'
import firebase from "../../../config/fbConfig";
import {storage} from "../../../config/fbConfig";

import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Paper from "@material-ui/core/Paper";
import CKEditor from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

class UploadText extends Component {

  state = {
    title: '',
    content: '',
    tags: [],
    showSuccess: false,
    isLoading: false,
    background: null,
    backgroundTotalBytes: 0,
    backgroundBytesTransferred: 0,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleUpload = (file, type) => {
    this.setState({
      [type]: file[file.length - 1]
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true
    }, async () => {

      let background = null;
      let backgroundUploading = null;
      let backgroundName = '';

      await this.setState({
        backgroundTotalBytes: this.state.background ? this.state.background.size : 0
      });

      if (this.state.background !== null) {
        backgroundName = this.state.background.name + Date.now();
        backgroundUploading = storage.ref(`images/${backgroundName}`).put(this.state.background);
        backgroundUploading.on('state_changed',
          (progressResponse) => {
            const progress = Math.round((progressResponse.bytesTransferred / (this.state.backgroundTotalBytes + this.state.coverTotalBytes)) * 100);
            this.setState({progress});
          });
        await backgroundUploading;
        background = await storage.ref('images').child(backgroundName).getDownloadURL();
      }


      firebase.firestore().collection("posts").add({
        background: background,
        tags: [...this.state.tags],
        content: this.state.content,
        title: this.state.title,
        author: this.props.nick,
        likes: 0,
        views: 0,
        likedBy: [],
        date: new Date()
      }).then(() => {
        this.setState({
          isLoading: false,
          showSuccess: true
        }, () => {
          setTimeout(() => {
            this.setState({
              showSuccess: false
            });
          }, 3000);
        })
      })
    });
  };

  render() {
    const { admin } = this.props;

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

    const names = [
      'wydarzenia',
      'wazne',
      'prasowka',
      'baza danych',
      'szkolenia'
    ];

    if (!admin) return <Redirect to='/' />;

    return (
      <Paper>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.showSuccess}
          autoHideDuration={3000}
        >
          <SnackbarContent
            message={
              <Typography>
                <CheckCircleIcon />
                Dodałeś tekst
              </Typography>
            }
            action={[
              <IconButton key="close" aria-label="close" color="inherit" onClick={() => {
                this.setState({
                  showSuccess: false
                });
              }}>
                <CloseIcon />
              </IconButton>,
            ]}
          />
        </Snackbar>
        <Box pt={2}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography variant='h4' component='p' align='center'>
                Dodaj tekst
              </Typography>
            </Grid>
            <Grid item xs={10} sm={7}>
              {this.state.isLoading ? (
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item xs={12}>
                    <Typography variant='h5' component='p' align='center'>
                      Dodawanie...
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item>
                        <Box p={2}>
                          <CircularProgress />
                        </Box>
                      </Grid>
                    </Grid>
                    <Box p={2}>
                      <LinearProgress variant="determinate" value={this.state.progress} />
                    </Box>
                  </Grid>
                </Grid>
              ) : (
                  <ValidatorForm
                    onSubmit={this.handleSubmit}
                  >
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item xs={12}>
                        <TextValidator
                          label="Tytuł"
                          onChange={this.handleChange}
                          name="title"
                          fullWidth
                          value={this.state.title}
                          validators={['required']}
                          errorMessages={['this field is required']}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <InputLabel>Tagi</InputLabel>
                          <Select
                            name="tags"
                            multiple
                            value={this.state.tags}
                            onChange={this.handleChange}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                          >
                            {names.map((name) => (
                              <MenuItem key={name} value={name}>
                                <Checkbox checked={this.state.tags.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <ImageUploader
                          withIcon={true}
                          buttonText='Wgraj Obrazek'
                          onChange={(file) => {
                            this.handleUpload(file, 'background')
                          }}
                          imgExtension={['.jpg', '.gif', '.png', '.gif']}
                          maxFileSize={5242880}
                          singleImage={true}
                          withPreview={true}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box pt={2}>
                          <Typography variant='body2' component='p'>
                            Kontent
                          </Typography>
                          <Paper className={this.state.descriptionContainerClass}>
                            <CKEditor
                              editor={DecoupledEditor}
                              onInit={editor => {
                                editor.ui.getEditableElement().parentElement.insertBefore(
                                  editor.ui.view.toolbar.element,
                                  editor.ui.getEditableElement()
                                );
                              }}
                              config={{
                                'placeholder': 'Tutaj wpisz kontent...'
                              }}
                              onChange={(event, editor) => {
                                const data = editor.getData();
                                this.setState({
                                  content: data
                                });
                              }}
                            />
                          </Paper>

                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                          spacing={1}
                        >
                          <Grid item>
                            <Box p={2}>
                              <Button type="submit" variant="contained" color="primary">
                                Dodaj
                              </Button>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </ValidatorForm>
                )}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nick: state.firebase.profile.nick,
    admin: state.firebase.profile.admin,
    profile: state.firebase.profile,
  }
};


export default compose(
  connect(mapStateToProps)
)(UploadText);