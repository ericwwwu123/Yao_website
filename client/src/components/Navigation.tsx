import { useEffect } from "react";

const Navigation = () => {
  // Implement smooth scrolling for navigation links
  useEffect(() => {
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      document.querySelectorAll('nav a').forEach(anchor => {
        anchor.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return (
    <nav id="navigation" className="sticky top-0 bg-slate-900/90 backdrop-blur z-50 px-4 py-4 border-b border-slate-800 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <a href="#chapter1" className="text-sm md:text-base px-3 py-2 rounded-full bg-slate-800 hover:bg-indigo-500 transition-colors">第一章：应用场景</a>
          <a href="#chapter2" className="text-sm md:text-base px-3 py-2 rounded-full bg-slate-800 hover:bg-indigo-500 transition-colors">第二章：技术架构</a>
          <a href="#chapter3" className="text-sm md:text-base px-3 py-2 rounded-full bg-slate-800 hover:bg-indigo-500 transition-colors">第三章：参数指标</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
