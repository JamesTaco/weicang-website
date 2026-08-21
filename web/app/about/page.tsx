import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA, PageHero, Photo, SectionIntro } from "@/components/UI";
export const metadata: Metadata = { title: "我们是谁", description: "认识味藏 WEICANG：从贵州出发的新地方主义品牌与创新公司。", alternates: { canonical: "/about" } };
export default function About() { const codes=[["真","REAL"],["轻","LIGHT"],["新","NEW"],["共","TOGETHER"],["远","WORLD"]]; return <>
  <PageHero eyebrow="ABOUT WEICANG" title={<>地方不是过去式，<br /><span>而是下一代生活方式的起点。</span></>} copy="味藏是一家从贵州出发的新地方主义品牌与创新公司。" image="/assets/photos/fanjing-mountain.jpg" />
  <section className="split-section"><SectionIntro index="01" label="VISION" title="让中国地方风味，成为世界的生活方式。" /><p>通过品牌、产品、内容、原产地体验、社群、渠道与 AI，重新组织中国的地方风味，把它做成今天的人愿意购买、体验、分享，并带向更大市场的产品、品牌与生活方式。</p></section>
  <section className="mission"><p className="eyebrow">02 / OUR MISSION</p><div>{["重新发现地方","重新记录地方","重新组织地方","重新产品化地方","重新让地方进入现代生活","重新把地方带向世界"].map((x,i)=><p key={x}><small>0{i+1}</small>{x}</p>)}</div></section>
  <section className="codes"><SectionIntro index="03" label="FIVE CODES" title="真 · 轻 · 新 · 共 · 远" /><div>{codes.map(([c,e],i)=><span key={c}><small>0{i+1}</small><b>{c}</b><em>{e}</em></span>)}</div></section>
  <section className="architecture"><SectionIntro index="04" label="BRAND ARCHITECTURE" title="一个世界观，三大业务。" /><div className="arch-root">WEICANG <span>味藏</span></div><div className="arch-branches"><div><b>DONGFAN MATCHA</b><span>东梵青抹</span></div><div><b>WEICANG GOODS</b><span>味藏出品</span></div><div><b>LOCAL GROWTH SERVICES</b><span>地方增长服务</span></div></div><div className="arch-foundation"><p>FOUNDATIONS</p><span>EVENT IP</span><span>FIVE-LAYER NETWORK</span><span>WEICANG AI</span></div></section>
  <section className="team"><SectionIntro index="05" label="TEAM" title="扎在地方，也连接世界。" /><div className="team-grid"><article><p>FOUNDER / 01</p><h3>沈广垣</h3><span>Founder / CEO</span><p>扎根贵州本地执行，负责内容、供应链、渠道、原产地与项目运营，把地方真实资源组织为可以持续发生的产品和关系。</p><div className="wechat"><Image src="/assets/brand/shen-wechat-qr.jpg" alt="沈广垣微信二维码" width={900} height={1105}/><div><b>添加创始人微信</b><span>扫描二维码，开始一场关于地方、产品与合作的对话。</span></div></div></article></div><Photo src="/assets/photos/founder-speaking.jpg" alt="沈广垣在公开活动中分享味藏项目" /></section>
  <ContactCTA />
  </>; }
