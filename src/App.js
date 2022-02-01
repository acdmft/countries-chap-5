import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
    };
    this.getCountry = this.getCountry.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/name/france")
      .then((res) => res.json())
      .then((res) => {
        console.log(
          res[0].name.common,
          res[0].capital,
          res[0].flag,
          res[0].population,
          res[0].region
        );
        this.setState({
          name: res[0].name.common,
          capital: res[0].capital,
          flag: res[0].flag,
          population: res[0].population,
          region: res[0].region,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getCountry(e) {
    let url =
      "https://restcountries.com/v3.1/name/" +
      e.target.dataset.country.toLowerCase();
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res[0].name.common);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Country selector</h1>
        <Button onClick={this.getCountry} children={"France"}></Button>
        <Button onClick={this.getCountry} children={"Brazil"}></Button>
        <Button onClick={this.getCountry} children={"Croatia"}></Button>
      </div>
    );
  }
}

export default App;
