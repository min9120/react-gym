import { Component } from "react";
import "./App.css";
import RandomColor from "./lifecycle/RandomColor";
//import ScrollBox from "./ref/ScrollBox";

class App extends Component {
  //화살표 함수로 한번 감싼다는 것
  // handleScroll = ()=>{
  //   this.scrollBox.scrollToBottom()
  // }
  // onClick={this.handleScroll}

  render() {
    return (
      <>
        {/* <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <br />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button> */}
        <RandomColor/>
      </>
    );
  }
}

export default App;
