import "./App.css";
import Header from "./components/Header/Header";
import Section01 from "./Section/Section1/Section01";
import Seperator from "./assets/img/wave.svg";
import Section2 from "./Section/Section2/Section2";
import Section3 from "./Section/Section3/Section3";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Section01 />
      <div className="seperator">
        <img src={Seperator} alt="Wave" />
      </div>
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}

export default App;
