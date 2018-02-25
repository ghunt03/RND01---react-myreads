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
      this.setState({ books: books });
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({ books: books });
      });
    });
  };

  queryBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        this.setState({ queryResults: books });
      });
    } else {
      this.setState({ queryResults: []})
    }
    
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              onUpdateBook={this.updateBook}
            />
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
