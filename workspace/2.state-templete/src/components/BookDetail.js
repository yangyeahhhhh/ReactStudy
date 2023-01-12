import React, { Component } from 'react';

import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    maxWidth : 450,
  },

  media: {
    width: '70%',
    heigh: '70%',
  }
}

class BookDetail extends Component {
  render(){

    const { book, classes } = this.props;

    return(
      <Card className={classes.root}>
        <CardHeader title={book.title} subheader={book.author}></CardHeader>
        <CardMedia className={classes.media} component='img' image={book.imgUrl}></CardMedia>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {book.introduce}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(BookDetail);