import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  state = {
    showBookDetails: false
  };

  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  };

  /**
   * @description Calls the onUpdateBook function in the parent component
   * @param {string} newShelf - The name of the new shelf that the book is been moved to
   */
  updateBook = newShelf => {
    this.props.onUpdateBook(this.props.book, newShelf);
  };

  /**
   * @description Updates the showBookDetails state which shows / hides the description of the book
   */
  onBookClick = () => {
    this.setState(prevState => ({
      showBookDetails: !prevState.showBookDetails
    }));
  };

  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book-wrapper">
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                onClick={event => this.onBookClick()}
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${
                    book.imageLinks ? book.imageLinks.thumbnail : "http://via.placeholder.com/128x193?text=No%20Cover"
                  })`
                }}
              />
              <div className="book-shelf-changer">
                <select
                  value={book.shelf ? book.shelf : "none"}
                  onChange={event => this.updateBook(event.target.value)}
                >
                  <option value="" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">
              {book.authors ? book.authors.join(", ") : ""}
            </div>
          </div>
          <div
            className="book-details"
            style={{
              display: `${this.state.showBookDetails ? "block" : "none"}`
            }}
          >
            {book.description}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
