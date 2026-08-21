"use client";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/content/site";
export default function Contact(){const[copied,setCopied]=useState(false);async function copy(){await navigator.clipboard.writeText(siteConfig.email);setCopied(true);setTimeout(()=>setCopied(false),2000)}return <section className="contact-page"><p className="eyebrow">CONTACT / BUILD WITH US</p><h1 className="serif">从山野来，到日常去。<br/><span>下一段关系，从这里开始。</span></h1><div className="contact-methods"><div className="contact-email"><a href={`mailto:${siteConfig.email}?subject=Hello%20WEICANG`}>{siteConfig.email} ↗</a><button onClick={copy} aria-live="polite">{copied?"已复制":"复制邮箱"}</button></div><div className="contact-wechat"><Image src="/assets/brand/shen-wechat-qr.jpg" alt="沈广垣微信二维码" width={900} height={1105}/><div><b>微信联系沈广垣</b><span>扫描二维码，添加味藏创始人微信</span></div></div></div><p>企业 / Founder · 高校 · 地方品牌 · 茶园 / 供应链 · 渠道 · Creator · 政府 / 产业机构 · 全球伙伴</p></section>}
