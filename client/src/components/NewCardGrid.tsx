"use client";

import { GlowingCard } from "./GlowingCard";

export function NewCardGrid() {
  return (
    <section className="py-20 relative overflow-hidden w-full">
      {/* 背景效果 */}
      <div className="absolute inset-0 animate-gradient-slow"></div>
      <div className="absolute inset-0 bg-grid-pattern"></div>
      <div className="tech-dots"></div>
      <div className="light-effect"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 data-aos="fade-up" className="text-5xl md:text-7xl font-bold mb-20 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">SMTP 核心概念</span>
        </h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <GlowingCard
            icon={<MailIcon />}
            title="简单邮件传输协议"
            description="SMTP是一种TCP/IP协议，用于在网络中发送电子邮件。它定义了邮件客户端与服务器之间，以及服务器与服务器之间的通信规则。"
          />
          <GlowingCard
            icon={<ServerIcon />}
            title="客户端/服务器架构"
            description="SMTP基于客户端/服务器架构，邮件客户端发送请求，服务器接收和转发邮件。服务器间通信也使用SMTP协议。"
          />
          <GlowingCard
            icon={<CommandIcon />}
            title="命令与响应"
            description="SMTP使用文本命令和响应码进行通信。命令如HELO、MAIL FROM、RCPT TO和DATA，响应码如220、250表示不同状态。"
          />
          <GlowingCard
            icon={<ProtocolIcon />}
            title="邮件传输流程"
            description="完整邮件传输包括：建立连接、发件人身份认证、指定收件人、传输邮件内容以及结束会话等步骤。"
          />
          <GlowingCard
            icon={<SecurityIcon />}
            title="安全与认证"
            description="现代SMTP通常与TLS/SSL结合使用（SMTPS），增加传输层安全性。同时支持SMTP-AUTH等认证机制验证发件人身份。"
          />
          <GlowingCard
            icon={<ExtensionIcon />}
            title="SMTP扩展"
            description="ESMTP（扩展的SMTP）增加了多种功能，如支持多媒体内容、邮件大小限制、传输状态通知等高级功能。"
          />
        </div>
      </div>
    </section>
  );
}

// 简单图标组件
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6" y1="6" y2="6" />
    <line x1="6" x2="6" y1="18" y2="18" />
  </svg>
);

const CommandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
    <path d="m4 15 4-8 4 8" />
    <path d="m12 15 4-8 4 8" />
  </svg>
);

const ProtocolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8" />
    <path d="M15 18h-5" />
    <path d="M10 6h8v4h-8V6Z" />
  </svg>
);

const SecurityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ExtensionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c5.1 0 8.5 4.15 8.5 9s-3.4 9-8.5 9a9.28 9.28 0 0 1-4.23-1" />
    <path d="M17.73 14.03A9.33 9.33 0 0 0 18.5 14c5.1 0 8.5-4.15 8.5-9s-3.4-9-8.5-9a9.37 9.37 0 0 0-1.33.1" />
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
  </svg>
);