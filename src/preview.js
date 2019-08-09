import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import marked from 'marked';
import DOMpurify from 'dompurify';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import hljs from 'highlight.js';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  }
});

marked.setOptions({
  breaks: true,
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
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
