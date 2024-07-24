import { Hero } from "@/Sections/Hero/Hero";
import { Functionalities } from "@/Sections/Functionalities/Functionalities";
import { BlogSection } from "@/Sections/Blog/Blog";
import { Contact } from "@/Sections/Contact/Contact";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import "./page.scss";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <Hero />
      <Functionalities />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
  );
}
