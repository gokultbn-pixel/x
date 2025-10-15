import { Navbar } from "./components/Navbar";
import { FloatingShapes } from "./components/FloatingShapes";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Floating Background Shapes */}
      <FloatingShapes />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
