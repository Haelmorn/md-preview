import Navbar from './navbar'
import Preview from './preview';
import Textfield from './textfield'
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const styles = theme => ({
  root: {
    margin: '10px',
    height: 400,
    width: 300,
    padding: '0 30px',
    overflowY: 'scroll',
  },
});

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      markdown: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({markdown: event.target.value});
  }


  render () {
    return (
      <div>
        <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Textfield handleChange={this.handleChange} markdown={this.state.markdown} />
        </Grid>
        <Grid item xs={6}>
          <Preview markdown={this.state.markdown} />
        </Grid>
      </Grid>
      </div>  
    );
  }
}

export default withStyles(styles)(App);