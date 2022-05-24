import { Component } from "react";

class Cards extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <>
        {monsters.map((item) => {
          return <h1 key={item.id}>{item.name} </h1>;
        })}
      </>
    );
  }
}

export default Cards;
