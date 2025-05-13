import Card from "./Card";

const ChapterThree = () => {
  return (
    <section id="chapter3" className="mb-24">
      <div data-aos="fade-up" className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block">
          <span className="text-emerald-500">03</span> 第三章：SMTP的参数指标
        </h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
      </div>
      
      {/* Module 1: 端口与命令 */}
      <div className="mb-16">
        <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold mb-6 text-slate-200 border-l-4 border-indigo-500 pl-3">
          模块1：端口与命令
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            number="23" 
            title="SMTP端口" 
            content="SMTP通常使用25、465或587端口，其中25端口用于标准SMTP通信，465用于SSL加密SMTPS，587用于TLS加密。" 
            colorClass="bg-indigo-500"
            delay={100}
          />
          
          <Card 
            number="24" 
            title="SMTP命令" 
            content="SMTP命令如HELO、EHLO用于标识发送者，RCPT用于指定邮件接收者，DATA用于传输邮件内容。" 
            colorClass="bg-indigo-500"
            delay={200}
          />
        </div>
      </div>
      
      {/* Module 2: 响应代码解析 */}
      <div className="mb-16">
        <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold mb-6 text-slate-200 border-l-4 border-pink-500 pl-3">
          模块2：响应代码解析
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card 
            number="25" 
            title="220 服务就绪" 
            content="当SMTP服务器准备好接收邮件时，会发送220代码，表示服务已就绪。" 
            colorClass="bg-pink-500"
            delay={100}
          />
          
          <Card 
            number="26" 
            title="250 请求成功" 
            content="邮件发送请求被接受后，服务器返回250代码，确认邮件操作成功完成。" 
            colorClass="bg-pink-500"
            delay={200}
          />
          
          <Card 
            number="27" 
            title="451 处理中止" 
            content="在邮件传输过程中遇到临时性问题时，服务器会发送451代码，表示请求中止。" 
            colorClass="bg-pink-500"
            delay={300}
          />
          
          <Card 
            number="28" 
            title="550 无法执行请求" 
            content="如果邮件无法被投递，服务器会返回550代码，通常意味着邮箱不存在或不可达。" 
            colorClass="bg-pink-500"
            delay={400}
          />
        </div>
      </div>
      
      {/* Module 3: 性能指标 */}
      <div className="mb-16">
        <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold mb-6 text-slate-200 border-l-4 border-emerald-500 pl-3">
          模块3：性能指标
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            number="29" 
            title="传输速率" 
            content="SMTP服务器的传输速率决定了邮件发送的速度，影响用户体验。" 
            colorClass="bg-emerald-500"
            delay={100}
          />
          
          <Card 
            number="30" 
            title="并发处理能力" 
            content="服务器同时处理多个邮件发送请求的能力，是衡量SMTP性能的关键指标。" 
            colorClass="bg-emerald-500"
            delay={200}
          />
          
          <Card 
            number="31" 
            title="错误处理机制" 
            content="SMTP服务器在遇到错误时的处理能力，包括重试机制和错误报告的准确性。" 
            colorClass="bg-emerald-500"
            delay={300}
          />
        </div>
      </div>
      
      {/* Module 4: 兼容性与扩展性 */}
      <div>
        <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold mb-6 text-slate-200 border-l-4 border-indigo-500 pl-3">
          模块4：兼容性与扩展性
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            number="32" 
            title="兼容性" 
            content="SMTP协议广泛兼容多种邮件客户端和服务器，确保不同系统间邮件的顺畅传输。" 
            colorClass="bg-indigo-500"
            delay={100}
          />
          
          <Card 
            number="33" 
            title="扩展性" 
            content="SMTP支持多种扩展命令，如ESMTP，以适应不断变化的邮件传输需求和安全标准。" 
            colorClass="bg-indigo-500"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default ChapterThree;
