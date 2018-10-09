import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("The title was clicked!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handleTitleClick }, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Marlowe",
        animal: "Dog",
        breed: "Labradoodle"
      }),
      React.createElement(Pet, {
        name: "Homer",
        animal: "Lizard",
        breed: "Asian Water Monitor"
      }),
      React.createElement(Pet, {
        name: "Hashimoto",
        animal: "Snake",
        breed: "King Cobra"
      })
    ]);
  }
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
