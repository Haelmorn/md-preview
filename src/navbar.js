import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Polymer from '@material-ui/icons/Polymer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import marked from 'marked';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  MenuIcon: {
    marginLeft: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  li: {
    margin: theme.spacing(0),
  }
}));

function Navbar(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const classes = useStyles();
  return (
    <div id='navbar'>
    <AppBar position="static" style={{ background: '#13293d' }}>
        <Toolbar className={classes.icon}>
        <Polymer />
          <Typography variant="h4" className={classes.title}>
          Markdown Previewer
          </Typography>
          <Button color="inherit" onClick={handleDrawerOpen}>
            Markdown cheatsheet
            <MenuIcon />
            </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['# H1', '## H2', '### H3', '#### H4', '##### H5', '###### H6'].map((text, index) => (
            <ListItem>
              <ListItemText primary={text} />
              <ListItemText primary={<div id='header-item' dangerouslySetInnerHTML={{__html: marked(text)}} />} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Emphasis with *asterisks* or _underscores_.',
          'Strong emphasis with **asterisks** or __underscores__.',
          'Combined emphasis with **asterisks and _underscores_**.',
          'Strikethrough uses two tildes. ~~Scratch this.~~'].map((text, index) => (
            <ListItem>
              <ListItemText primary={text} secondary={<div id='list-item' dangerouslySetInnerHTML={{__html: marked(text)}} />} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['[I\'m an inline-style link](https://www.google.com)',
          '[I\'m an inline-style link with title](https://www.google.com "Google\'s Homepage")'].map((text, index) => (
            <ListItem>
              <ListItemText primary={text} secondary={<div id='list-item' dangerouslySetInnerHTML={{__html: marked(text)}} />} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  )
};

export default Navbar;
