import { lazy, useEffect } from "react";
import "./styles/style.css";
import "./styles/responsive.css";
import "./App.css";
const Main = lazy(() => import("./Components/Main"));
const Menu = lazy(() => import("./Components/Menu"));
const About = lazy(() => import("./Components/About"));
const Footer = lazy(() => import("./Components/Footer"));
const Header = lazy(() => import("./Components/Header"));
const Contact = lazy(() => import("./Components/Contact"));

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Set initial scroll position to the top when the component mounts
  }, []);

  useEffect(() => {
    // Function to prevent gesture zooming
    const preventGestureZoom = (e) => {
      e.preventDefault();
    };

    document.addEventListener("gesturestart", preventGestureZoom);
    document.addEventListener("gesturechange", preventGestureZoom);
    document.addEventListener("gestureend", preventGestureZoom);

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener("gesturestart", preventGestureZoom);
      document.removeEventListener("gesturechange", preventGestureZoom);
      document.removeEventListener("gestureend", preventGestureZoom);
    };
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
