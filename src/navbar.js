import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Polymer from '@material-ui/icons/Polymer';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  icon: {
    marginLeft: theme.spacing(1),
  }
}));

function Navbar(props) {
  const classes = useStyles();
  return (
    <div id='navbar'>
    <AppBar position="static" style={{ background: '#13293d' }}>
        <Toolbar className={classes.icon}>
        <Polymer />
          <Typography variant="h4" className={classes.title}>
          Markdown Previewer
          </Typography>
          <Button color="inherit">/CURRENT FLAVOUR/</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Navbar;
