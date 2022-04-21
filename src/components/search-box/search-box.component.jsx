import { Component } from "react";
//css
import "./search-box.styles.css";
class SearchList extends Component {
  render() {
    return (
      <input
        type="search"
        className={`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.onInputChange}
      />
    );
  }
}
export default SearchList;
