const CodeExample = () => {
  return (
    <section className="bg-slate-800 py-16 mb-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 animate-gradient-slow"></div>
      
      {/* Mouse hover effect - simplified version */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 data-aos="fade-up" className="text-2xl md:text-4xl font-bold mb-10 text-center">SMTP 通信实例</h2>
        
        <div data-aos="fade-up" data-aos-delay="200" className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 mb-6 font-mono text-sm md:text-base text-slate-300 overflow-x-auto shadow-xl border border-slate-700">
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
        </div>
        
        <div className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-800/50 shadow-xl">
          <h3 className="text-xl font-semibold mb-3 text-indigo-200">通信过程说明：</h3>
          <p data-aos="fade-up" data-aos-delay="300" className="text-slate-300 leading-relaxed">
            上述代码示例展示了一个完整的SMTP会话过程。<span className="text-green-400">S:</span> 表示服务器响应，<span className="text-blue-400">C:</span> 表示客户端请求。
            从建立连接开始，经过身份识别(HELO)、指定发件人(MAIL FROM)、指定收件人(RCPT TO)，
            到传输邮件内容(DATA)，最后断开连接(QUIT)的完整流程。
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
