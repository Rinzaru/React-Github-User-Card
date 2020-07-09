import React from "react";
import axios from "axios";
import User from "./components/users";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const followersArray = [
      "tetondan",
      "dustinmyers",
      "justsml",
      "luishrd",
      "bigknell",
      "Rinzaru",
    ];
    followersArray.map((followers) => {
      axios
        .get(`https://api.github.com/users/${followers}`)
        .then((res) => {
          // console.log(res.data, "follower data");
          this.setState({
            data: [...this.state.data, res.data],
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <p>Hello</p>
        <User data={this.state.data} />
      </div>
    );
  }
}

export default App;
