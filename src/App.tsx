import Header from "./components/header";
import Main from "./components/main";
import Features from "./components/features";
import Testimonials from "./components/testimonials";
import FAQ from "./components/faq";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] antialiased ">
      <Header />
      <Main />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
