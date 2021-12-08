import { Link, Route, Routes } from "react-router-dom";
import About from "./route/About";
import Home from "./route/Home";
import Profile from "./route/Profiles";
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to ="/">Home</Link>
        </li>
        <li>
          <Link to ="/about">About</Link>
        </li>
        <li>
          <Link to ="/profile/pumpkin">pumpkin의 프로필</Link>
        </li>
        <li>
          <Link to ="/profile/lovekim">lovekim의 프로필</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path ="/profile/:username"  element={<Profile />}/>
      </Routes>
    </div>
  );
};

export default App;
