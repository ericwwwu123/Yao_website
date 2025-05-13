import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import ChapterOne from "@/components/ChapterOne";
import ChapterTwo from "@/components/ChapterTwo";
import ChapterThree from "@/components/ChapterThree";
import CodeExample from "@/components/CodeExample";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Home = () => {
  // Reinitialize AOS when component mounts to ensure animations work properly
  useEffect(() => {
    // @ts-ignore (AOS is loaded via CDN)
    if (typeof AOS !== 'undefined') {
      // @ts-ignore
      AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 pb-20 w-full">
        <ChapterOne />
        <ChapterTwo />
        <ChapterThree />
      </main>
      <CodeExample />
      <Footer />
    </div>
  );
};

export default Home;
