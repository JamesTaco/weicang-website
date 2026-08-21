import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: "味藏 WEICANG｜中国新地方主义生活方式品牌", template: "%s｜味藏 WEICANG" },
  description: "味藏 WEICANG 是一家从贵州出发的新地方主义品牌与创新公司，通过品牌、产品、内容、原产地体验、社群、渠道与 AI，让中国地方风味重新进入当代生活。",
  alternates: { canonical: "/" },
  openGraph: { title: "味藏 WEICANG｜中国新地方主义生活方式品牌", description: "WEICANG — New Localism from China.", url: siteConfig.domain, siteName: "味藏 WEICANG", locale: "zh_CN", type: "website", images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "味藏 WEICANG — New Localism from China" }] },
  twitter: { card: "summary_large_image", title: "味藏 WEICANG", description: "New Localism from China.", images: ["/og-image.svg"] },
};
export const viewport: Viewport = { themeColor: "#071a12", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.brand, legalName: siteConfig.legalName, url: siteConfig.domain, email: siteConfig.email };
  return <html lang="zh-CN"><body><a className="skip-link" href="#main">跳到主要内容</a><Header /><main id="main">{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
