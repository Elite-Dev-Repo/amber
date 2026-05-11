import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Howwework from "./components/Howwework";
import Whatwedo from "./components/Whatwedo";
import Testimonials from "./components/FAQs";
import Setup from "./components/Setup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Setup />
      <About />
      <Howwework />
      <Whatwedo />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
