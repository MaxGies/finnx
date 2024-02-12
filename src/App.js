import "./App.css";
import Footer from "./components/Footer";
import InfinitySlide from "./components/InfiniteSlide";
import Navbar from "./components/Navbar";
import Advantage from "./container/Advantages";
import Header from "./container/Header";
import Overview from "./container/Overview";
import Promotion from "./container/Promotion";
import Question from "./container/Question";
import { useState } from "react";

function App() {
  const [navSelect, setNavSelect] = useState("home");

  return (
    <div className="App flex flex-col items-center gap-[40px] lg:gap-[60px]">
      <Navbar navSelect={navSelect} setNavSelect={setNavSelect} />
      <Header />
      <InfinitySlide />
      <Overview />
      <Advantage />
      <Promotion />
      <Question />
      <Footer navSelect={navSelect} setNavSelect={setNavSelect} />
    </div>
  );
}

export default App;
