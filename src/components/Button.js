import React from "react";

class Button extends React.Component {

  render() {
    return (
      <button
        className="btn btn-outline-secondary"
        onClick={this.props.onClick}
        data-country={this.props.children}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;