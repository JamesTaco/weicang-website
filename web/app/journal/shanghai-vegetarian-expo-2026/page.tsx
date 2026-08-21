import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA, PageHero, StatusBadge } from "@/components/UI";

export const metadata: Metadata = {
  title: "沈广垣将出席 2026 亚太素食展",
  description: "2026年8月27日，味藏创始人沈广垣将在上海分享地方风味与深度文旅的可持续创新实践。",
  alternates: { canonical: "/journal/shanghai-vegetarian-expo-2026" },
};

export default function ShanghaiVegetarianExpo2026() {
  return <>
    <PageHero eyebrow="UPCOMING · SHANGHAI · 2026.08.27" title={<>以美味和文化健康，<br/><span>连接城市与家乡。</span></>} copy="味藏创始人沈广垣将出席 2026 亚太素食展·气候餐桌产业联盟主题论坛。" image="/assets/photos/future-table-event.jpg" />
    <section className="event-story">
      <aside><StatusBadge>UPCOMING / 活动预告</StatusBadge><div className="event-facts"><p><b>日期</b><span>2026年8月27日</span></p><p><b>时间</b><span>12:00–14:00</span></p><p><b>地点</b><span>上海新国际博览中心<br/>浦东新区龙阳路2345号</span></p><p><b>活动</b><span>亚太素食展·气候餐桌产业联盟主题论坛</span></p><p><b>分享人</b><span>沈广垣<br/>味藏创始人</span></p></div></aside>
      <article className="event-copy"><p className="eyebrow">THEME / 分享主题</p><h2>地方风味与深度文旅的可持续创新实践</h2><p>地方真正有价值的，不只是一件土特产，而是食材、风味、人、文化和生活方式之间仍在生长的关系。沈广垣将从味藏的实践出发，分享如何以美味与文化健康为连接，让地方进入城市日常，也让城市重新走近家乡。</p><p className="event-quote serif">“从山野来，到日常去。”</p><p>本次午餐论坛聚焦可持续餐饮产业的思想转化与真实行动。首批“亚洲未来餐桌主理人”与推广大使将在现场亮相，并围绕土地、研发、发酵、烹饪、餐饮与社区等不同路径展开交流。</p></article>
    </section>
    <figure className="event-image"><Image src="/assets/photos/future-table-event.jpg" alt="未来餐桌产业联盟主题活动视觉" fill sizes="100vw"/></figure>
    <p className="event-note">活动信息依据主办方发布材料整理；具体入场与报名安排请以亚太素食展及论坛主办方最新通知为准。</p>
    <ContactCTA />
  </>;
}
