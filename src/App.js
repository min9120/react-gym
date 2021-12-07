import { Component } from "react";
import "./App.css";
import MemberList from "./immer/MemberList";
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
        <MemberList />
      </>
    );
  }
}

export default App;
