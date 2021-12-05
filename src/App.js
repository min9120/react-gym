import { Component } from "react";
import "./App.css";
import ScrollBox from "./ScrollBox";
import ValidationInput from "./ValidationInput_ref";

class App extends Component {
  render() {
    return (
      <>
        <ValidationInput />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </>
    );
  }
}

export default App;
