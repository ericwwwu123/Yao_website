const CodeExample = () => {
  return (
    <section className="bg-slate-800 py-16 mb-20 relative overflow-hidden">
      {/* 科幻风格动画背景 */}
      <div className="absolute inset-0 animate-gradient-slow"></div>
      
      {/* 网格和扫描线效果 */}
      <div className="absolute inset-0 bg-grid-pattern"></div>
      
      {/* 额外的技术感圆点图案 */}
      <div className="tech-dots"></div>
      
      {/* 光照效果 */}
      <div className="light-effect"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 data-aos="fade-up" className="text-2xl md:text-4xl font-bold mb-10 text-center text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">SMTP 通信实例</span>
        </h2>
        
        <div data-aos="fade-up" data-aos-delay="200" className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 mb-6 font-mono text-sm md:text-base text-slate-300 overflow-x-auto shadow-xl border border-slate-700 relative">
          {/* 代码块上方的装饰元素 */}
          <div className="absolute top-0 right-0 h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
          <div className="absolute top-0 left-0 h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          
          {/* 代码块装饰角标 - 左上 */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-md"></div>
          {/* 代码块装饰角标 - 右上 */}
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-pink-400/50 rounded-tr-md"></div>
          
          <pre className="relative overflow-x-auto"><code className="block p-2">
<span className="text-green-400">S: </span><span className="text-yellow-300">220 mail.example.com ESMTP Postfix</span>
<span className="text-blue-400">C: </span><span className="text-pink-300">HELO client.example.org</span>
<span className="text-green-400">S: </span><span className="text-yellow-300">250 Hello client.example.org</span>
<span className="text-blue-400">C: </span><span className="text-pink-300">MAIL FROM:&lt;sender@example.org&gt;</span>
<span className="text-green-400">S: </span><span className="text-yellow-300">250 Ok</span>
<span className="text-blue-400">C: </span><span className="text-pink-300">RCPT TO:&lt;recipient@example.com&gt;</span>
<span className="text-green-400">S: </span><span className="text-yellow-300">250 Ok</span>
<span className="text-blue-400">C: </span><span className="text-pink-300">DATA</span>
<span className="text-green-400">S: </span><span className="text-yellow-300">354 End data with &lt;CR&gt;&lt;LF&gt;.&lt;CR&gt;&lt;LF&gt;</span>
<span className="text-blue-400">C: </span><span className="text-pink-300">From: "发件人" &lt;sender@example.org&gt;</span>
<span className="text-blue-400">C: </span><span className="text-pink-300">To: "收件人" &lt;recipient@example.com&gt;</span>
<span className="text-blue-400">C: </span><span className="text-pink-300">Subject: SMTP协议测试</span>
<span className="text-blue-400">C: </span>
<span className="text-blue-400">C: </span><span className="text-pink-300">这是一封测试邮件，用于展示SMTP协议的工作流程。</span>
<span className="text-blue-400">C: </span><span className="text-pink-300">.</span>
<span className="text-green-400">S: </span><span className="text-yellow-300">250 Ok: queued as 12345</span>
<span className="text-blue-400">C: </span><span className="text-pink-300">QUIT</span>
<span className="text-green-400">S: </span><span className="text-yellow-300">221 Bye</span>
          </code></pre>
          
          {/* 代码块下方的装饰元素 */}
          <div className="absolute bottom-0 left-0 h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          <div className="absolute bottom-0 right-0 h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          
          {/* 代码块装饰角标 - 左下 */}
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-indigo-400/50 rounded-bl-md"></div>
          {/* 代码块装饰角标 - 右下 */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-purple-400/50 rounded-br-md"></div>
        </div>
        
        <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50 shadow-xl relative">
          {/* 背景装饰元素 */}
          <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-blue-400/30 rounded-tl-lg"></div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-purple-400/30 rounded-br-lg"></div>
          
          {/* 科技装饰线 */}
          <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>
          
          <h3 className="text-xl font-semibold mb-3 text-indigo-200">
            <span className="inline-block mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </span>
            通信过程说明
          </h3>
          
          <p data-aos="fade-up" data-aos-delay="300" className="text-slate-300 leading-relaxed">
            上述代码示例展示了一个完整的SMTP会话过程。<span className="text-green-400 font-semibold">S:</span> 表示服务器响应，<span className="text-blue-400 font-semibold">C:</span> 表示客户端请求。
            整个流程按顺序包括：建立连接、身份识别(<span className="text-indigo-300">HELO</span>)、指定发件人(<span className="text-indigo-300">MAIL FROM</span>)、
            指定收件人(<span className="text-indigo-300">RCPT TO</span>)、传输邮件内容(<span className="text-indigo-300">DATA</span>)，最后断开连接(<span className="text-indigo-300">QUIT</span>)的完整流程。
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
