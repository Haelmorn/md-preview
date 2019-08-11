import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from 'react-textarea-autosize';


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
          <TextareaAutosize
          value={props.markdown} 
          onChange={props.handleChange}
          onFocus={props.resetPlaceholder}
          onBlur={props.setPlaceholder}
          >
          </TextareaAutosize>
      </CardContent>
    </Card>
    </div>
  )
};

export default Textfield;
