import { useEffect } from "react";
import "./styles/style.css";
import "./styles/responsive.css";
import "./App.css";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Set initial scroll position to the top when the component mounts
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Offer /> */}
      <Menu />
      <About />
      <Contact />
      {/* <Opinion /> */}
      <Footer />
    </div>
  );
}

export default App;
