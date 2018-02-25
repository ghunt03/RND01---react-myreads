import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
class ListBooks extends Component {
  render() {
    const { books, onUpdateBook } = this.props;

    const currentlyReadingBooks = books.filter(
      book => book.shelf === "currentlyReading"
    );

    const wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
    const readBooks = books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              books={currentlyReadingBooks}
              onUpdateBook={onUpdateBook}
            />
            <Bookshelf title="Want To Read" books={wantToReadBooks} onUpdateBook={onUpdateBook}/>
            <Bookshelf title="Read" books={readBooks} onUpdateBook={onUpdateBook}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
