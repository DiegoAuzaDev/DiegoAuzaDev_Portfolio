
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Banner from "./banner/Banner";
import Header from "./header/Header";


function App() {

  return (
    <>
      <Header />
      <main>
        <Banner />
        <About  />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
