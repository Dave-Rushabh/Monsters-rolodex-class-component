import { Component } from "react";
import Cards from "./Cards";
import Search from "./Search";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: ""
    };
  }

  handleSearchChange = (event) => {
    const updatedSearch = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchValue: updatedSearch };
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    const { monsters, searchValue } = this.state;
    const { handleSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue);
    });
    return (
      <>
        <Search
          handleSearchChange={handleSearchChange}
          placeholder="Search Monsters Here"
        />
        <Cards monsters={filteredMonsters} />
      </>
    );
  }
}

export default Body;
