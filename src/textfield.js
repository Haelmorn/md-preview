import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  }
});

function Textfield(props) {
  const classes = useStyles();
  return (
    <div id='input-field'>
    <Card className={classes.card} id='markdown-card'>
      <CardContent>
      <Typography className={classes.title} color="textSecondary">
          Markdown
        </Typography>
          <textarea 
          value={props.markdown} 
          onChange={props.handleChange}
          >
          </textarea>
      </CardContent>
    </Card>
    </div>
  )
};

export default Textfield;
