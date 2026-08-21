import type { Metadata } from "next";
import { PageHero, StatusBadge } from "@/components/UI";
import { events } from "@/content/home";
import { siteConfig } from "@/content/site";
export const metadata: Metadata={title:"年度事件",description:"东梵青抹·春启与寻味贵州 2027 规划。",alternates:{canonical:"/events"}};
export default function Events(){return <><PageHero eyebrow="EVENT IP · 2027 PLAN" title={<>Every year,<br/><span>we bring the ecosystem together.</span></>} image="/assets/photos/local-table.jpg"/><section className="event-timeline">{events.map((e,i)=><article key={e.title}><div><small>0{i+1}</small><StatusBadge>PLAN / 规划中</StatusBadge></div><div><p>{e.date}</p><p>{e.place}</p></div><div><h2>{e.title}</h2><p>{e.copy}</p><strong>{e.scale} · Planned</strong></div></article>)}</section><section className="event-keywords">{["Origin","Industry","Brand","Youth","Creator","Channel","Global"].map(x=><span key={x}>{x}</span>)}</section><section className="simple-cta"><h2 className="serif">让生态在真实的地方相遇。</h2><a className="button button--light" href={`mailto:${siteConfig.email}?subject=WEICANG%20Event%20Partnership`}>合作咨询 ↗</a></section></>}

