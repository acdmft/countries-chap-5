import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

  render() {
    return <div>Hello1</div>;
  }
}

export default App;
