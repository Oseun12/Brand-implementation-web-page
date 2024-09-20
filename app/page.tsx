import About from "./_components/About";
import Counter from "./_components/Counter";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonial";

function App() {
  return (
    <div>
      <Hero/>
      <Counter/>
      {/* <Stats/> */}
      <About/>
      <Services/>
      <Testimonial/>
    </div>
  );
}

export default App;
