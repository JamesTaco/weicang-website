import type { MetadataRoute } from "next";
const routes=["","/about","/what-we-do","/dongfan-matcha","/events","/journal","/contact","/privacy"];
export default function sitemap():MetadataRoute.Sitemap{return routes.map(route=>({url:`https://weicangliving.com${route}`,changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:0.7}))}

