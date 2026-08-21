import Link from "next/link";
import Image from "next/image";
import { nav, siteConfig } from "@/content/site";
export function Footer() { return <footer className="footer"><div className="footer-brand"><div className="footer-logo"><Image src="/assets/brand/weicang-logo.png" alt="味藏 Logo" width={1842} height={853} /></div><strong>WEICANG 味藏</strong><span>NEW LOCALISM FROM CHINA</span></div><div><p className="serif footer-line">从山野来，到日常去。</p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div><nav>{nav.map(([l,h]) => <Link key={h} href={h}>{l}</Link>)}<Link href="/privacy">Privacy</Link></nav><div className="footer-legal"><span>© 2026 WEICANG</span><span>{siteConfig.legalName}</span></div></footer>; }
