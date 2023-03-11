import Header from "../containers/Header";
import HeroSection from "../containers/HeroSection";
import Features from "../containers/Features";
import Illustration from "../containers/Illustration";
import Testimonials from "../containers/Testimonials";
import Form from "../containers/Form";
import Footer from "../containers/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <div className="curve | relative bg-dark-blue-main">
          <Features />
          <Illustration />
          <Testimonials />
          <Form />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
