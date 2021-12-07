import { Route, Routes } from "react-router-dom";
import About from "./route/About";
import Home from "./route/Home";
//import ScrollBox from "./ref/ScrollBox";

const App = () => {
  //화살표 함수로 한번 감싼다는 것
  // handleScroll = ()=>{
  //   this.scrollBox.scrollToBottom()
  // }
  // onClick={this.handleScroll}

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default App;
