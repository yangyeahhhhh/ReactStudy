import React, { Component } from 'react';
import { List } from '@material-ui/core';
import BookListItem from './BookListItem';

class BookList extends Component {
  render(){
    const bookItems = this.props.books.map(book => {
      return (
        <BookListItem book = {book} key= {book.ISBN}></BookListItem>
      )
    })

    return(
      <List>
        {bookItems}
      </List>
    )
  }
}

export default BookList;