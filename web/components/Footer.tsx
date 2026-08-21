import Link from "next/link";
import { nav, siteConfig } from "@/content/site";
export function Footer() { return <footer className="footer"><div className="footer-brand"><p>味藏</p><strong>WEICANG</strong><span>NEW LOCALISM FROM CHINA</span></div><div><p className="serif footer-line">从山野来，到日常去。</p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div><nav>{nav.map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}<Link href="/privacy">Privacy</Link></nav><div className="footer-legal"><span>© 2026 WEICANG</span><span>{siteConfig.legalName}</span></div></footer>; }

