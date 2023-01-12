import React, { Component } from 'react';

import { Container, Grid } from '@material-ui/core';
import SearchBar from './components/SearchBar';

import Books from './static_data/Books'
import BookList from './components/BookList';

class App extends Component {
  render(){
    return(
      <Container>
        <SearchBar></SearchBar>
        <Grid container spacing={2}>
          <BookList books={Books}/>
        </Grid>
      </Container>
    )
  }
}

export default App;
