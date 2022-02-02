import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchInput from "./components/SearchInput";
import Card from "./components/Card";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: "",
      region: "",
      error: false,
    };
    this.getCountry = this.getCountry.bind(this);
    this.renderSearchResult = this.renderSearchResult.bind(this);
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/name/france")
      .then((res) => res.json())
      .then((res) => {
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
    e.preventDefault();
    const country = e.target.querySelector("input[type=text]").value;
    let url =
      "https://restcountries.com/v3.1/name/" +
      country.toLowerCase();
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res[0]===undefined) {
          this.setState({error: res.message});
        } else {
          this.setState({
            name: res[0].name.common,
            capital: res[0].capital,
            flag: res[0].flag,
            population: res[0].population,
            region: res[0].region,
            error: false,
          });

        }
      })
      .catch((err) => {
        console.log(err)

      });
  }
  renderSearchResult() {
    if (this.state.error) {
      console.log(this.state.error);
      return (
        <h2 className="text-danger mt-2">{this.state.error}</h2>
      );
    } else {
      console.log(this.state.error);
      return (
        <Card
          flag={this.state.flag}
          name={this.state.name}
          region={this.state.region}
          capital={this.state.capital}
          population={this.state.population}
        ></Card>
      );
    }
    
  }
  render() {
    return (
      <div className="text-center">
        <h1>Country selector</h1>
        <div className="d-flex justify-content-around w-50 mx-auto">
          <SearchInput onSubmit={this.getCountry}></SearchInput>
        </div>
        {this.renderSearchResult()}
        
      </div>
    );
  }
}

export default App;
