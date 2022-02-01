import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card mx-auto mt-3" style={{width: "18rem"}}>
        <div class="card-body text-center">
          <h1 style={{fontSize: "5rem"}}>{this.props.flag}</h1>
          <h5 className="card-title">Country: {this.props.name}</h5>
          <h6>Region: {this.props.region}</h6>
          <h6>Capital: {this.props.capital}</h6>
          <h6>Population: {this.props.population}</h6>       
        </div>
      </div>
    );
  }
}

export default Card;