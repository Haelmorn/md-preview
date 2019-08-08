import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    backgroundColor: '#e6e6e6',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  input: {
    flex: 1,
  }
}));


function Textfield(props) {
  const classes = useStyles();
  return (
    <div id='input-field'>
      <TextField fullWidth
        multiline
        rows='40'
        rowsMax="10000000000"
        id="outlined-name"
        label="Markdown"
        className={classes.textField}
        value={props.markdown}
        onChange={props.handleChange}
        margin="normal"
        variant="outlined"
      />
    </div>
  )
};

export default Textfield;
