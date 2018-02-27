import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";


/**
 * @description Class for ListBooks compnent for holding each of the bookshelves
 */
class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  };


  render() {
    const { books, onUpdateBook } = this.props;
    const shelves = [
      { id: "currentlyReading", title: "Currently Reading" },
      { id: "wantToRead", title: "Want to Read" },
      { id: "read", title: "Read" }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <Bookshelf
                key={shelf.id}
                title={shelf.title}
                books={books.filter(book => book.shelf === shelf.id)}
                onUpdateBook={onUpdateBook}
              />
            ))}
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
