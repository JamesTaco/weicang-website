export const siteConfig = {
  brand: "味藏 WEICANG",
  domain: "https://www.weicangliving.com",
  email: "sgy@weicangliving.com",
  legalName: "深圳市味藏黔食文化科技有限公司",
  dongfanUrl: process.env.NEXT_PUBLIC_DONGFAN_URL || "/dongfan-matcha",
};

export const nav = [
  ["我们是谁", "/about"], ["我们在做什么", "/what-we-do"],
  ["东梵青抹 ↗", "/dongfan-matcha"], ["事件", "/events"],
  ["Journal", "/journal"], ["联系", "/contact"],
] as const;
