import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
export function SectionIntro({ index, label, title }: { index: string; label: string; title: ReactNode }) { return <div className="section-intro"><p>{index} / {label}</p><h2>{title}</h2></div>; }
export function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: ReactNode; copy?: string; image?: string }) { return <section className={`page-hero ${image ? "has-image" : ""}`}>{image && <Image src={image} alt="" fill priority sizes="100vw" />}<div className="page-hero-content"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{copy && <p className="lede">{copy}</p>}</div></section>; }
export function StatusBadge({ children }: { children: ReactNode }) { return <span className="status">{children}</span>; }
export function ContactCTA() { return <section className="contact-cta"><p>BUILD WITH US.</p><h2 className="serif">我们正在找这样的伙伴。</h2><Link className="button button--light" href="/contact">开始一场对话 <span>↗</span></Link></section>; }
export function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) { return <figure className={`photo ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 60vw" /></figure>; }

