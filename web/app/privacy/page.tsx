import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
export const metadata: Metadata={title:"隐私说明",alternates:{canonical:"/privacy"}};
export default function Privacy(){return <article className="legal-page"><p className="eyebrow">PRIVACY</p><h1>隐私说明</h1><p>本网站当前不提供注册、支付或联系表单，也不会要求您提交个人资料。联系按钮会调用您设备上的邮件客户端。</p><h2>基础技术信息</h2><p>托管服务可能为安全、性能和故障诊断记录必要的技术日志，例如 IP 地址、浏览器类型与访问时间。若未来接入分析、会员或表单功能，本说明将同步更新。</p><h2>联系</h2><p>如对隐私有任何疑问，请联系 <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>。</p></article>}

