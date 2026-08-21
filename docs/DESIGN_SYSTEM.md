# WEICANG Design System

## Direction

中国新地方主义 × 国际 Editorial Design × 当代生活方式。数字杂志感，以真实山野/茶园/手/食物为材料；用强排版、大留白与少量线性系统形成安静但有生命力的表达。

## Tokens

- Forest `#0D281C`；Forest Deep `#071A12`：母品牌主色与大面积背景。
- Matcha `#8FB956`；Matcha Light `#B5CF77`：东梵青抹世界。
- Ivory `#F3EFE5`；Paper `#E8E1D2`：编辑纸张感。
- Ink `#171814`；Muted `#787F76`：正文与辅助信息。
- Warm Red `#D95C35`：仅用于状态与极少量关系节点。

## Type & Grid

- Sans：Geist / Inter / PingFang SC / system-ui。
- Serif：Songti SC / STSong / Noto Serif SC，仅 Manifesto 与文化性大标题。
- Hero：桌面 `clamp(5rem, 10vw, 9rem)`；移动 `clamp(3rem, 15vw, 4.5rem)`。
- 12 栏桌面 / 6 栏平板 / 4 栏移动；页面最大宽 1680px；边距 24–64px。
- 英文 label 采用 0.12–0.18em tracking；Section index 为 `01 / 02`。

## Components

- Header：Hero 上透明，滚动后深绿半透明实色；移动为全屏菜单。
- Buttons：胶囊轮廓仅用于动作，不使用阴影；触控高度至少 44px。
- Cards：只在信息需要成组时使用，直角/轻边线，不使用 SaaS 圆角阴影。
- Images：满幅裁切，保留暗部与材质；照片说明使用小号 editorial caption。
- Status：DONE / IN PROGRESS / PLAN 使用文字与细线，不造成 Dashboard 感。

## Motion & Mobile

- 只使用 fade、reveal、轻微 translate/scale 和关系线进度；尊重 `prefers-reduced-motion`。
- 移动端重新编排而非压缩：单列、标题断行、横向体系改为纵向路径、CTA 44px+、无横向溢出。

