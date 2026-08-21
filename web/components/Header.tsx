"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(scrollY > 48); onScroll(); addEventListener("scroll", onScroll, { passive: true }); return () => removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`header ${scrolled || open ? "header--solid" : ""}`}>
    <Link className="wordmark" href="/" aria-label="味藏 WEICANG 首页"><span>味藏</span><b>WEICANG</b></Link>
    <nav className="desktop-nav" aria-label="主导航">{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">{open ? "关闭" : "菜单"}</button>
    <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <nav>{nav.map(([label, href], i) => <Link key={href} href={href} onClick={() => setOpen(false)}><small>0{i + 1}</small>{label}</Link>)}</nav>
      <p>NEW LOCALISM FROM CHINA</p>
    </div>
  </header>;
}

