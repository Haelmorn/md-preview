import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import marked from 'marked';
import DOMpurify from 'dompurify';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

marked.setOptions({
  breaks: true
});


function Preview(props) {
  const classes = useStyles();
  const content = marked(props.markdown);
  const safe_content = DOMpurify.sanitize(content)
  return (
    <Card className={classes.card} id='preview-card'>
      <CardContent>
      <Typography className={classes.title} color="textSecondary">
          Preview
        </Typography>
        <div dangerouslySetInnerHTML={{__html: safe_content}} />
      </CardContent>
    </Card>
  )
};

export default Preview;
