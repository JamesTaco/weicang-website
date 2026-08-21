# Deployment

## Local

```bash
cd web
pnpm install
pnpm dev
```

生产校验：

```bash
pnpm lint
pnpm build
pnpm start
```

## Vercel

- Root Directory 设为 `web/`，Framework Preset 选择 Next.js。
- 可选环境变量：`NEXT_PUBLIC_DONGFAN_URL=https://dongfanmatcha.com`。未设置时 CTA 自动回退 `/dongfan-matcha`。
- 部署前必须让 `pnpm build` 通过。若 CLI 已登录：`vercel link`、`vercel`、`vercel --prod`。

## Domain & Cloudflare

1. Vercel 添加 `weicangliving.com` 和 `www.weicangliving.com`。
2. 运行 `vercel domains inspect weicangliving.com`，以实时结果为准。
3. 在 Cloudflare 仅新增 Vercel 要求的 apex A 与 `www` CNAME，初期设为 DNS only。
4. 绝不更换 Nameserver，绝不删除或覆盖 MX、SPF、DKIM、Email Routing 或 mail-related TXT。
5. 等待验证与 SSL 后，将 `www` 301 到 apex；canonical 始终为 `https://weicangliving.com`。

## Launch Checklist

- 内容真实性、PLAN 标签、价格注释与认养合规提示复核。
- 检查 sitemap、robots、canonical、OG、favicon、404、mailto、所有内外链接。
- 检查 390 / 430 / 768 / 1024 / 1440 / 1920 宽度和 reduced motion。
- 确认 `_source/` / `底稿/` 不进入 Git 与 Vercel 部署。
- 验证 HTTPS、www redirect，并确认 Cloudflare Email Routing 仍正常收信。

