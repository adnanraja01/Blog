import Deeper from "./components/Deeper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import Solution from "./components/Solution";

function App() {
  return (
    <div className="p-[2rem] family-[Montserrat]">
      <Navbar />
      <Header />
      <Quote />
      <Deeper />
      <Solution />
      <Footer />
    </div>
  );
}

export default App;
