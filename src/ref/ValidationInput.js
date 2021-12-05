import { Component } from "react";
import "./ValidationInput.css";

class ValidationInput extends Component {
  state = {
    password: "",
    clicked: false,
    validate: false,
  };
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleClick = () => {
    this.setState({
      clicked: true,
      validate: this.state.password === "0000",
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validate
                ? "sucess"
                : "failure"
              : ""
          }
          ref={(ref) => {
            this.input = ref;
          }}
        />
        <button onClick={this.handleClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationInput;
