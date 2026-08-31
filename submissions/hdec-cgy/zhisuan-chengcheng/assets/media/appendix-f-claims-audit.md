# 附录F · 主张—证据审计（claims audit）

> 本附录对主文本中的关键量化与非量化主张逐条登记**主张 → 证据等级 → 核实路径**。证据分级：A=权威文件原文；B=公开报道/公开数据（未逐项核实）；C=本方案测算/假设；D=概念设想。

| # | 主张 | 证据等级 | 核实路径 / 处理 |
| --- | --- | --- | --- |
| F1 | 带内高校院系点位约 **535** 个 | B（统计口径） | amap 公开 POI 接口，2026-08 抓取，WGS84，按名称+坐标去重后计数；**原始点位表已随包附上**（visual/assets/sandbox/data/university-data.js，535 点，WGS84 GeoJSON）；未逐项复核，仅用于相对密度比较；逐项复核与计数脚本附后方可升级为正式统计 |
| F1a | 带内 AI 企业 POI 约 **556** 家（其中五道口 128 家；AI 高相关实体 58 家） | B（统计口径） | 同 F1 抓取与去重口径；原始科技 POI 点位表已随包附上（visual/assets/sandbox/data/tech-poi-data.js，1,171 点），556 为按 AI 高相关分类规则筛出的子集（分类规则记录于来源清单 USER-SPATIAL-AND-POI-DATA）；未逐项复核，仅用于相对密度比较 |
| F2 | 清华大学 400+ 系所 / 楼宇（量级口径） | B | 公开名录量级口径；正式表述前以权威名录复核 |
| F3 | "556公顷—128公顷—58公顷"三区用地规模 | C | 基于公开底图的方案测算；以国土空间规划数据复核 |
| F4 | 保基本公共服务设施约 **298** 处 | C（团队台账自查口径） | 按居住区配套规范值测算的团队自查台账（2026-08-31 审计更正：正文原"官方口径"表述已降级为本口径）；权属与可用性逐一核实后方可升级 |
| F5 | 带内现状居民约 **45 万**（±20%） | C | 公开统计推算的区间估计口径（2026-08-31 审计更正：正文原"数据"标注已降级为推算口径）；仅作量级参考 |
| F6 | 情景带来6万新增就业（情景值） | C | 情景推演假设值，非预测承诺 |
| F7 | 慢行活力问卷 72% 支持率 | C | 问卷 n=18，样本极小；仅作方法演示，不作结论依据 |
| F8 | 慢行路径视频判读 75% 通畅比例 | C | 抽样22段；口径与抽样偏差见方法说明 |
| F9 | 路网密度 5.72 km/km²（±10%） | C | 自行测算（冻结底图口径）；对照《北京城市总体规划（2016年—2035年）》"中央地区路网密度≥8 km/km²"目标（A 级出处），差距即为改进方向 |
| F10 | 断头路 30 条、丁字路 64 处 | C | 冻结底图测算（附录D协议）；以实测复核 |
| F11 | 铁路退距管控建议值（A类≥800m/B–C类≥100m） | C | **建议退距口径**，须按现行标准与铁路部门要求复核（正文已标注 [assumption:A-COMPUTE-001]；2026-08-31 审计更正：原误引 A-RIGHTS-001 权利类假设，已改挂算力选址安全类假设） |
| F12 | 城市大脑既有底座（算力/场景/传感器数量等） | B | 公开报道口径，正文已加"未逐项核实、非本方案承诺"声明（2026-08-31 审计：正文与英文版均已补注该声明） |
| F13 | 领导人关于科技创新策源与人工智能发展的论述 | 转述口径 | 全部采用**转述引用（非逐字复制）**，逐处标注出处与转述声明；措辞以新华社权威通稿为准（2026-08-31 审计更正：原三段逐字引语已全部改为转述口径，与附录F原"不逐字引用"承诺保持一致） |
| F14 | 京张铁路1909年通车等历史日期 | A | 通行史实；仅作背景陈述 |
| F15 | 大钟寺中坤广场 1.6万㎡ 改造规模 | B | 公开报道口径；以项目文件复核 |
| F16 | 智能算力规模（EFLOPS 级） | B | 概念量级表述，不作精确承诺 |
| F17 | 18 处科研院校中约 **72%** 背向公园 | C（方案测） | 团队图层测算口径（2026-08-31 审计补充登记）；院校名录与界面对照核实后方可升级 |
| F18 | 22 段开放空间约 **75%** 为消极空间 | C（方案测） | 团队抽样判读口径（2026-08-31 审计补充登记）；抽样偏差见方法说明，不作结论依据 |

## 审计结论

1. 证据等级为 C/D 的主张一律不作为承诺性表述；正文已按此降级（"情景值/建议口径/概念设想/团队台账自查"）。
2. 涉及第三方项目的数字（B级）均加"公开报道口径，未逐项核实"限定。
3. 全部量化目标以"参考KPI"名义进入附录D矩阵，无既定考核承诺。
4. **2026-08-31 审计轮**：修正 F1/F2/F4/F5 与正文的口径混淆并补齐 F1a/F17/F18 登记；三段逐字引语改为转述口径（F13）；F11 假设标签由 A-RIGHTS-001 更正为 A-COMPUTE-001；中英文正文、数据口径表与本表已同步。535/556 的原始点位表已随包附上（university-data.js / tech-poi-data.js），但逐项复核记录与分类计数脚本仍未附上（见 A-EVIDENCE-001），相关数字一律不得用作正式统计。

---

## English Summary

This claims audit registers all key assertions from the main text with evidence grades (A authoritative text; B public reporting, not independently verified; C own estimate/scenario; D conceptual): Amap public-POI statistical calibers for ~535 university places and ~556 AI enterprises (128 at Wudaokou, 58 AI-highly-relevant), scraped 2026-08, deduplicated by name+coordinate, and used for relative-density comparison only; the raw point tables are attached, but item-by-item verification and classification/counting scripts are not (F1/F1a). It also covers magnitude calibers (F2); own-calculated land areas, the ~298-facility basic-provision team ledger, ~450,000 residents as a public-statistics estimate, and scenario values (F3–F6); survey/video method demonstrations (F7–F8); team-measured road-network density and breakpoints (F9–F10); suggested setback gauges under assumption A-COMPUTE-001 (F11); press-sourced "city brain" figures (F12, F15); leaders' remarks in paraphrase with attribution only (F13); historical dates (F14); an EFLOPS-order computing-power statement (F16); and team-measured 72%-backing-park and 75%-negative-space calibers (F17–F18). Grade C/D claims never serve as commitments; B-grade third-party figures carry in-text disclaimers; and all quantitative targets enter the Appendix D matrix only as reference KPIs. The attached point tables do not make the 535/556 counts formal statistics until the missing verification records and reproducible counting scripts are supplied (see A-EVIDENCE-001).
