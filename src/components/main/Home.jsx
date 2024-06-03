import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
        <Projects />
      </section>
    </>
  );
};

export default Home;
