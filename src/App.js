import Navbar from './navbar'
import Preview from './preview';
import Textfield from './textfield'
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import sample from './sample'

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
      markdown: sample
    }
    this.handleChange = this.handleChange.bind(this);
    this.resetPlaceholder = this.resetPlaceholder.bind(this);
    this.setPlaceholder = this.setPlaceholder.bind(this);
  }
  resetPlaceholder(event) {
    if (event.target.value == sample) {
      this.setState({markdown: ""})
    }
  }
  setPlaceholder(event) {
    if (event.target.value == ""){
      this.setState({markdown: sample})
    }
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
          <Textfield handleChange={this.handleChange} markdown={this.state.markdown} resetPlaceholder={this.resetPlaceholder} setPlaceholder={this.setPlaceholder} />
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