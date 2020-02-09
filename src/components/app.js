import React, { Component } from 'react';
import Booklist from '../containers/book-list.js';
import BookDetails from '../containers/bookDetail.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Booklist/>
        <BookDetails/>
        </div>
    );
  }
}