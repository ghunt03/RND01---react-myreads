import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import SearchPage from "./SearchPage";
import ListBooks from "./ListBooks";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>{
      BooksAPI.getAll().then(books => {
        this.setState({ books: books });
      });
    })
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
        <Route path="/search" render={() => <SearchPage />} />
      </div>
    );
  }
}
export default App;
