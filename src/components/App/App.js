import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
        <ScrollToTop 
          smooth
          viewBox="0 -1 31 31"
          svgPath="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z"
        />
    </div>
  );
}

export default App;
