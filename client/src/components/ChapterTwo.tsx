import Card from "./Card";

const ChapterTwo = () => {
  return (
    <section id="chapter2" className="mb-24">
      <div data-aos="fade-up" className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block">
          <span className="text-pink-500">02</span> 第二章：SMTP的技术架构
        </h2>
        <div className="h-1 w-20 bg-pink-500 rounded-full"></div>
      </div>
      
      {/* Module 1: 协议工作原理 */}
      <div className="mb-16">
        <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold mb-6 text-slate-200 border-l-4 border-indigo-500 pl-3">
          模块1：协议工作原理
        </h3>
        
        {/* Email network visualization */}
        <div data-aos="zoom-in" className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80" 
            alt="SMTP协议网络传输示意图" 
            className="rounded-xl shadow-lg w-full"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            number="09" 
            title="客户端与服务器通信" 
            content="SMTP客户端通过特定端口（通常是25、465或587）与服务器建立TCP连接，发送邮件指令。" 
            colorClass="bg-indigo-500"
            delay={100}
          />
          
          <Card 
            number="10" 
            title="认证机制" 
            content="为确保邮件发送安全，SMTP协议支持用户认证，如使用用户名和密码进行身份验证。" 
            colorClass="bg-indigo-500"
            delay={200}
          />
          
          <Card 
            number="11" 
            title="邮件传输过程" 
            content="邮件从发件人通过SMTP服务器转发到收件人的SMTP服务器，最终到达收件人邮箱。" 
            colorClass="bg-indigo-500"
            delay={300}
          />
          
          <Card 
            number="12" 
            title="邮件队列管理" 
            content="服务器会将邮件放入队列中，按顺序发送，遇到错误时会进行重试或返回错误信息给发件人。" 
            colorClass="bg-indigo-500"
            delay={400}
          />
        </div>
      </div>
      
      {/* Module 2: 通信过程与步骤 */}
      <div className="mb-16">
        <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold mb-6 text-slate-200 border-l-4 border-pink-500 pl-3">
          模块2：通信过程与步骤
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            number="13" 
            title="建立连接" 
            content="SMTP客户端通过TCP端口25与服务器建立连接，开始邮件传输过程。" 
            colorClass="bg-pink-500"
            delay={100}
          />
          
          <Card 
            number="14" 
            title="邮件传输" 
            content="客户端发送HELO命令标识自己，然后通过一系列命令和响应将邮件内容传输给服务器。" 
            colorClass="bg-pink-500"
            delay={200}
          />
          
          <Card 
            number="15" 
            title="断开连接" 
            content="邮件传输完成后，SMTP客户端发送QUIT命令，服务器响应后关闭连接。" 
            colorClass="bg-pink-500"
            delay={300}
          />
        </div>
      </div>
      
      {/* Module 3: 客户端与服务器交互步骤 */}
      <div className="mb-16">
        <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold mb-6 text-slate-200 border-l-4 border-emerald-500 pl-3">
          模块3：客户端与服务器交互步骤
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            number="16" 
            title="建立TCP连接" 
            content="客户端通过25端口与服务器建立TCP连接，为邮件传输做准备。" 
            colorClass="bg-emerald-500"
            delay={100}
          />
          
          <Card 
            number="17" 
            title="发送邮件命令" 
            content="客户端发送HELO或EHLO命令开始邮件传输，服务器响应确认。" 
            colorClass="bg-emerald-500"
            delay={200}
          />
          
          <Card 
            number="18" 
            title="邮件内容传输" 
            content="客户端使用DATA命令传输邮件内容，服务器接收并存储。" 
            colorClass="bg-emerald-500"
            delay={300}
          />
          
          <Card 
            number="19" 
            title="结束会话" 
            content="邮件传输完成后，客户端发送QUIT命令结束与服务器的会话。" 
            colorClass="bg-emerald-500"
            delay={400}
          />
        </div>
      </div>
      
      {/* Module 4: 安全机制与认证 */}
      <div>
        <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold mb-6 text-slate-200 border-l-4 border-indigo-500 pl-3">
          模块4：安全机制与认证
        </h3>
        
        {/* Network security visualization */}
        <div data-aos="zoom-in" className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80" 
            alt="网络安全和邮件加密概念" 
            className="rounded-xl shadow-lg w-full"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            number="20" 
            title="TLS加密" 
            content="SMTP通过TLS加密邮件传输，确保数据在传输过程中的安全性和隐私性。" 
            colorClass="bg-indigo-500"
            delay={100}
          />
          
          <Card 
            number="21" 
            title="身份验证机制" 
            content="SMTP服务器使用身份验证机制，如CRAM-MD5或SPA，来验证发件人的身份。" 
            colorClass="bg-indigo-500"
            delay={200}
          />
          
          <Card 
            number="22" 
            title="反垃圾邮件技术" 
            content="采用SPF和DKIM等技术，SMTP服务器能够减少垃圾邮件的发送，提高邮件系统的安全性。" 
            colorClass="bg-indigo-500"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default ChapterTwo;
