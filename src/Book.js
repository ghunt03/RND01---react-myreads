import React, { Component } from "react";

class Book extends Component {
    updateBook = newShelf => {
        this.props.onUpdateBook(this.props.book, newShelf);
    }



  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail: ''})`
              }}
            />
            <div className="book-shelf-changer">
              <select value={ book.shelf ? book.shelf : "none" } onChange={event => this.updateBook(event.target.value)}>
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
            {book.authors ? book.authors.join(', ') : ""}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
