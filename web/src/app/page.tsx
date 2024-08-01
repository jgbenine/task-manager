import { Hero } from "@/Sections/Hero/Hero";
import { TodoListHome } from "@/Sections/TodoListHome/TodoListHome";
import { BlogSection } from "@/Sections/Blog/Blog";
import { Contact } from "@/Sections/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";


export default function Home() {
  return (
    <main className="home">
      <Hero />
      <TodoListHome />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
  );
}
