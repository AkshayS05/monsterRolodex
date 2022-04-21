import { Component } from "react";
import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchList from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }
  onInputChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {
        searchField,
      };
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const { onInputChange } = this;
    const filteredList = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h2 className="app-title">Monster Rolodex</h2>
        <SearchList
          onInputChange={onInputChange}
          className="monsters-search-box"
          placeholder="search monster"
        />

        <CardList monsters={filteredList} />
      </div>
    );
  }
}
export default App;
