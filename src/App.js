const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

//  FUNCTIONAL, STATELESS
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Marlowe",
//       animal: "Dog",
//       breed: "Labradoodle"
//     }),
//     React.createElement(Pet, {
//       name: "Homer",
//       animal: "Lizard",
//       breed: "Asian Water Monitor"
//     }),
//     React.createElement(Pet, {
//       name: "Hashimoto",
//       animal: "Snake",
//       breed: "King Cobra"
//     })
//   ]);
// };

//  CLASS COMPONENT

class App extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
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
