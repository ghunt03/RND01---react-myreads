import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

/**
 * @description Class for Bookshelf compnent for holding books based on the shelf
 */
class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  };

  render() {
    const { title, books, onUpdateBook } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <Book book={book} key={book.id} onUpdateBook={onUpdateBook}/>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
