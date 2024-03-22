import Round_2 from "./Components/Round_2";
import Main from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Round_2_Form from "./Components/Round_2_Form";
import Score from "./Components/Score";
import CountdownTimer from "./Components/Counter";
import Round_3 from "./Components/Round_3";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="Round_2" element={<Round_2 />} />
          <Route path="/Round_2_Form" element={<Round_2_Form />} />
          <Route path="/Round_3" element={<Round_3 />} />
          <Route path="/Score" element={<Score />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
