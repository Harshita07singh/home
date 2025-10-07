import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header";
import Slider from "./pages/slider";
import Trading from "./pages/trading";
import Whyxpo from "./pages/whyxpo";
import About from "./pages/about";
import Fromindex from "./pages/fromindex";
import Blog from "./pages/blog";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Footer from "./component/footer";
import Searchpopup from "./pages/searchpopup";
import Sidebarinfo from "./pages/sidebarinfo";
import Modal from "./pages/modal";
import Awards from "./pages/awards";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Trading />
      <Awards />
      <About />
      <Whyxpo />
      <Blog />
      <Fromindex />
      <Team />
      <Contact />
      <Footer />
      <Searchpopup />
      <Sidebarinfo />
      <Modal />
    </>
  );
}

export default App;
