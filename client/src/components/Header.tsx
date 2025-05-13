const Header = () => {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center relative px-4 py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">SMTP协议探索</h1>
        <h2 className="text-xl md:text-2xl text-slate-300 mb-8">姚欣怡 | 邮件传输的幕后英雄</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-12 rounded-full"></div>
      </div>
      
      {/* Hero image */}
      <div data-aos="zoom-in" data-aos-delay="300" className="max-w-2xl mx-auto mb-12">
        <img 
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80" 
          alt="数字邮件概念图" 
          className="rounded-xl shadow-2xl w-full"
        />
      </div>
      
      <div data-aos="fade-up" data-aos-delay="600" className="absolute bottom-12 left-0 right-0 flex justify-center">
        <a href="#navigation" className="animate-bounce border border-slate-700 bg-slate-800 rounded-full p-3 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
