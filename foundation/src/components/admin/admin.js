import { Component } from "react";
import React from "react";
import { connect } from 'react-redux'
import { Redirect, Link } from "react-router-dom";

import { signIn } from "../../store/actions/authActions";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import "./admin.css";


class Admin extends Component {

  state = {
    password: '',
    email: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signIn(this.state)
  };

  render() {
    const { error, auth } = this.props;

    if (auth.uid) return <Redirect to='/' />;

    return (
      <div className="imageBackgroundLogin">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
          className="gridFormOnly"
        >
          <Grid item xs={12} sm={8} md={5}>
            <Box p={5}>
              <Paper>
                <Box p={3}>
                  <ValidatorForm
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                  >
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={1}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h4" align="center" component="h3">
                          Panel Admina
                        </Typography>
                      </Grid>
                      <Grid item xs={11}>
                        <hr />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          variant="outlined"
                          label="e-mail"
                          onChange={this.handleChange}
                          name="email"
                          id='loginEmail'
                          fullWidth
                          value={this.state.email}
                          validators={['required', 'isEmail']}
                          errorMessages={['wypenij pole', 'nieprawidowy e-mail']}
                        >
                        </TextValidator>
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          variant="outlined"
                          label="hasło"
                          onChange={this.handleChange}
                          name="password"
                          type="password"
                          id='loginPassword'
                          fullWidth
                          value={this.state.password}
                          validators={['required']}
                          errorMessages={['wypenij pole']}
                        >
                        </TextValidator>
                      </Grid>
                      {
                        error && (
                          <Grid item xs={12}>
                            <p> {error} </p>
                          </Grid>
                        )
                      }
                      <Box mb={2} pt={2}>
                        <Button type="submit" variant="contained" color="primary" id='loginButton'>Zaloguj się</Button>
                      </Box>
                    </Grid>
                  </ValidatorForm>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    auth: state.firebase.auth
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);