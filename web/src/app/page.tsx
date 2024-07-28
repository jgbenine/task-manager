import { Hero } from "@/Sections/Hero/Hero";
import { Functionalities } from "@/Sections/Functionalities/Functionalities";
import { BlogSection } from "@/Sections/Blog/Blog";
import { Contact } from "@/Sections/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";


export default function Home() {
  return (
    <main className="home">
      <Hero />
      <Functionalities />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
  );
}
