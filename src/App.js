import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import SearchPage from "./SearchPage";
import ListBooks from "./ListBooks";

class App extends Component {
  state = {
    books: [],
    queryResults: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  /**
   * @description Calls the API to update the shelf for the book
   * @param {object} book - The book that needs to be updated
   * @param {string} shelf - The name of the new shelf
   */
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    });
  };

  /**
   * @description Calls the API to search for new books based on the query
   * @param {string} query - The term to find in the books
   */
  queryBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.length > 0) {
          this.setState({ queryResults: books });
        } else {
          this.setState({ queryResults: [] });
        }
      });
    } else {
      this.setState({ queryResults: [] });
    }
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <ListBooks
                books={this.state.books}
                onUpdateBook={this.updateBook}
              />
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              queryResults={this.state.queryResults}
              onUpdateBook={this.updateBook}
              onQueryUpdate={this.queryBooks}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
