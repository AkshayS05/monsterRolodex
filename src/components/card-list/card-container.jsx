import { Component } from "react";
import "./card-container.style.css";

class CardContainer extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`name`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2 className="monster-name">{name}</h2>
        <p class="monster-name">{email}</p>
      </div>
    );
  }
}
export default CardContainer;
