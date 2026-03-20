
import AfterCareServices from "@/components/ui/AfterCareServices";
import ContactSection from "@/components/ui/ContactSection";
import HeroSection from "@/components/ui/HeroSection";
import Laptops from "@/components/ui/Laptops";
import ReviewSection from "@/components/ui/ReviewSection";


export default function Home() {
  return (
   <>
      <section id="home"><HeroSection /></section>
      <section id="laptops"><Laptops /></section>
      <section id="after-care-services"><AfterCareServices /></section>
      <section id="reviews"><ReviewSection /></section>
      <section id="contact"><ContactSection /></section>
    </>
      

    
  );
}
