const CodeExample = () => {
  return (
    <section className="bg-slate-800 py-12 mb-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 data-aos="fade-up" className="text-2xl md:text-3xl font-bold mb-8 text-center">SMTP 通信实例</h2>
        
        <div data-aos="fade-up" data-aos-delay="200" className="bg-slate-900 rounded-lg p-4 mb-4 font-mono text-sm text-slate-300 overflow-x-auto">
          <pre><code>S: 220 mail.example.com ESMTP Postfix
C: HELO client.example.org
S: 250 Hello client.example.org
C: MAIL FROM:&lt;sender@example.org&gt;
S: 250 Ok
C: RCPT TO:&lt;recipient@example.com&gt;
S: 250 Ok
C: DATA
S: 354 End data with &lt;CR&gt;&lt;LF&gt;.&lt;CR&gt;&lt;LF&gt;
C: From: "发件人" &lt;sender@example.org&gt;
C: To: "收件人" &lt;recipient@example.com&gt;
C: Subject: SMTP协议测试
C: 
C: 这是一封测试邮件，用于展示SMTP协议的工作流程。
C: .
S: 250 Ok: queued as 12345
C: QUIT
S: 221 Bye</code></pre>
        </div>
        
        <p data-aos="fade-up" data-aos-delay="300" className="text-slate-400 text-sm text-center">
          上述代码示例展示了一个完整的SMTP会话过程，包括建立连接、邮件传输和会话结束。
        </p>
      </div>
    </section>
  );
};

export default CodeExample;
