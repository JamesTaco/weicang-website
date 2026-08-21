import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/UI";
export const metadata: Metadata={title:"Journal",description:"WEICANG Journal：品牌笔记、活动预告与现场回顾。",alternates:{canonical:"/journal"}};
const notes=[["01","地方不是过去式","新地方主义不是复刻乡土生活，而是重新发现地方真正有价值的食材、风味、人、文化与生活方式。"],["02","从一片梵净山抹茶园开始","当一片茶园成为四季产品、身份、内容与回到山里的理由，消费才开始变成长期关系。"],["03","AI 退到后台","AI 帮助研究风味、定义产品、理解内容和连接渠道；但消费者首先看见的，永远是味道、人和地方。"]];
export default function Journal(){return <><PageHero eyebrow="WEICANG JOURNAL" title={<>Notes from<br/><span>the mountains to everyday life.</span></>} copy="品牌笔记、活动预告与现场回顾。记录味藏如何把地方带进当代日常。"/><section className="journal-list"><Link className="journal-feature" href="/journal/shanghai-vegetarian-expo-2026"><p>UPCOMING · 2026.08.27</p><h2>沈广垣将出席<br/>2026 亚太素食展</h2><p>上海新国际博览中心 · 气候餐桌产业联盟主题论坛<br/><span>查看活动详情 ↗</span></p></Link>{notes.map(n=><article key={n[0]}><p>WEICANG NOTES · {n[0]}</p><h2>{n[1]}</h2><p>{n[2]}</p></article>)}</section></>}
