import type { Metadata } from "next";
import Link from "next/link";
import { ContactCTA, PageHero, SectionIntro } from "@/components/UI";
export const metadata: Metadata = { title: "我们在做什么", description: "Three businesses. One belief. 东梵青抹、味藏出品与地方增长服务。", alternates: { canonical: "/what-we-do" } };
const steps=["地方风味输入","消费者与场景研究","AI 机会识别","产品定义","KOC / WeicangU 预筛","试吃与内容测试","300–1000 件小批量验证","数据回流与规模化"];
export default function WhatWeDo(){return <><PageHero eyebrow="WHAT WE DO" title={<>Three businesses.<br /><span>One belief.</span></>} copy="不是卖地方特产，而是在重新定义地方如何进入今天的生活。" />
<section className="work-block"><p>01 / CATEGORY BRAND</p><h2>东梵青抹</h2><span>DONGFAN MATCHA — by WEICANG</span><p>从一片梵净山抹茶园开始，做一个拥有产品、会员、原产地与四季生活方式的一级品牌。</p><Link className="text-link" href="/dongfan-matcha">进入品牌预览 ↗</Link></section>
<section className="method" id="goods"><SectionIntro index="02" label="WEICANG GOODS" title={<>SKU 不是选品，<br />而是一套研究方法。</>} /><div>{steps.map((x,i)=><p key={x}><small>{String(i+1).padStart(2,"0")}</small>{x}</p>)}</div></section>
<section className="services" id="services"><SectionIntro index="03" label="LOCAL GROWTH SERVICES" title="做成之后，能力向外生长。" /><div className="service-words">{["Brand","Product","Content","Channel","AI","Global","Collaboration","Validation"].map(x=><span key={x}>{x}</span>)}</div><article><p className="eyebrow">LIGHTHOUSE CASE</p><h3>味藏 × 抹上村酿</h3><strong>抹茶气泡米酒</strong><p>从产品定义、场景、试饮、渠道、分销到复购的一套真实作战案例。合作产品已经上线；不以未经证实的销量数字包装成果。</p></article></section><ContactCTA /></>}

