import NavBar from "@/components/NavBar/NavBar";
import Herosection from "@/components/Hero/Hero1"; 
import Services from "@/components/Services/Service";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";
import Resume from "@/components/Resume/Resume";
import Testimonial from "@/components/Testimonials/Testimonials";
import About from "@/components/About/About1";
export default function Home() {
  return (
    <>
     <NavBar />
     <Herosection title={"Advocate"}/>
     <About/>
     <Testimonial/>
     <Resume/>
    < Services/>
    <Contact/>
     <Footer/>
    </>
 
  );
}
