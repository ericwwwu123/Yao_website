import Card from "./Card";

const ChapterOne = () => {
  return (
    <section id="chapter1" className="mb-24">
      <div data-aos="fade-up" className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block">
          <span className="text-indigo-500">01</span> 第一章：SMTP的应用场景
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
      </div>
      
      {/* Module 1: 电子邮件发送 */}
      <div className="mb-16">
        <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold mb-6 text-slate-200 border-l-4 border-indigo-500 pl-3">
          模块1：电子邮件发送
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            number="01" 
            title="邮件客户端与服务器交互" 
            content="用户通过邮件客户端发送邮件，客户端通过SMTP协议与邮件服务器交互，实现邮件的发送。" 
            colorClass="bg-indigo-500"
            delay={100}
          />
          
          <Card 
            number="02" 
            title="邮件服务器间传递邮件" 
            content="不同邮件服务器之间通过SMTP协议交换邮件，确保邮件能够准确无误地送达收件人服务器。" 
            colorClass="bg-indigo-500"
            delay={200}
          />
        </div>
      </div>
      
      {/* Module 2: 企业邮件系统 */}
      <div className="mb-16">
        <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold mb-6 text-slate-200 border-l-4 border-pink-500 pl-3">
          模块2：企业邮件系统
        </h3>
        
        {/* Email server communication visualization */}
        <div data-aos="zoom-in" className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80" 
            alt="企业邮件系统服务器架构" 
            className="rounded-xl shadow-lg w-full"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            number="03" 
            title="内部通信" 
            content="企业内部员工通过SMTP协议发送邮件，实现信息快速传递和任务协调。" 
            colorClass="bg-pink-500"
            delay={100}
          />
          
          <Card 
            number="04" 
            title="客户关系管理" 
            content="企业利用SMTP发送营销邮件和客户通知，维护和增强与客户的长期关系。" 
            colorClass="bg-pink-500"
            delay={200}
          />
          
          <Card 
            number="05" 
            title="文件传输" 
            content="通过SMTP协议，企业可以发送包含文件的邮件，实现文档、报告等资料的高效传输。" 
            colorClass="bg-pink-500"
            delay={300}
          />
          
          <Card 
            number="06" 
            title="自动化邮件通知" 
            content="企业邮件系统通过SMTP发送自动化的邮件通知，如账单、会议提醒等，提高工作效率。" 
            colorClass="bg-pink-500"
            delay={400}
          />
        </div>
      </div>
      
      {/* Module 3: 邮件营销服务 */}
      <div>
        <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold mb-6 text-slate-200 border-l-4 border-emerald-500 pl-3">
          模块3：邮件营销服务
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card 
            number="07" 
            title="个性化邮件内容" 
            content="SMTP允许营销人员根据用户数据定制个性化邮件内容，提升用户参与度和转化率。" 
            colorClass="bg-emerald-500"
            delay={100}
          />
          
          <Card 
            number="08" 
            title="自动化邮件发送" 
            content="通过SMTP协议，企业可实现自动化发送营销邮件，提高效率，如定期发送促销信息。" 
            colorClass="bg-emerald-500"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default ChapterOne;
