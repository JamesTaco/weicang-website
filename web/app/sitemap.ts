import type { MetadataRoute } from "next";
export const dynamic = "force-static";
const routes=["","/about","/what-we-do","/dongfan-matcha","/events","/journal","/journal/shanghai-vegetarian-expo-2026","/contact","/privacy"];
export default function sitemap():MetadataRoute.Sitemap{return routes.map(route=>({url:`https://www.weicangliving.com${route}`,changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:0.7}))}
