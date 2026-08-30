# 附录E · 数据治理与AI伦理边界（治理建议，未批准）

> 本附录为一带 AI 应用场景的**数据治理与伦理边界建议**。所有条目为建议口径，**未经任何主体批准**；实施以当期法规与主管部门要求为准。

## E.0 七项治理原则

| # | 原则 | 建议量化口径 |
| --- | --- | --- |
| 1 | 数据最小化 | 场景字段数 K ≤ 必要集（建议 K≥10 字段须专项论证） |
| 2 | 日志留存 | 运营日志 ≤ 90 天后删除或去标识化 |
| 3 | 双人操作 | 涉个人数据的导出/删除须两人复核 |
| 4 | 定期删除 | 试点数据 15 个工作日内完成到期删除 |
| 5 | 偏差审计 | 每半年一次算法偏差审计并公开纪要 |
| 6 | 人工复核 | 高影响输出（安全/资金/身份类）必经人工确认 |
| 7 | 可申诉 | 每个涉人场景配置申诉通道与答复时限 |

## E.1 资产推荐场景数据边界

| 数据项 | 口径 |
| --- | --- |
| 资产属性（面积/区位/业态） | 可用（公开或权属方授权） |
| 用户历史行为偏好 | **不采集、不用于推荐**；如引入该功能须先通过专项隐私评估并可一键"删除该功能" |
| 推荐规则 | 非识别性规则匹配（基于资产特征与公开项目画像），规则公开可审计 |
| 人工复核 | 推荐结果仅作线索，采纳决定由人工做出并留痕 |

## E.2 活力感知场景边界

- **不做**人群个体构成画像（职业/收入/身份属性推断一律不做）；
- 仅采用聚合口径的时空活力指标（如滞留强度分级），空间粒度不低于街区级；
- 数据源在完成清权前不接入；展示一律为脱敏聚合可视化。

## E.3 公众参与论坛治理

- 发言内容经关键词过滤 + 人工抽检；
- 版主操作全程留痕；投诉 15 个工作日内答复；
- 不采集实名以外的不必要个人信息。

## E.4 社区 Agent 边界

- **不接入群聊监听**；仅响应用户主动发起的会话；
- **不做**个性化推送画像；
- 高影响答复（安全/资金/身份类）须转人工；
- 会话记录默认 90 天后删除（与 E.0 原则2一致）。

## E.5 执行与监督（建议）

- 每场景上线前提交"数据与隐私边界"登记表（作为附录A.3场景卡的固定栏目）；
- 由建议设立的伦理与数据小组每半年抽审；违规场景即降级或下线；
- 审计纪要纳入年度开放决策纪要发布。

---

## English Summary

Appendix E proposes an unapproved governance baseline: seven principles (data minimisation with special justification beyond a suggested field-count threshold, ≤90-day log retention, two-person operations on personal data, deletion within 15 working days after pilots, semi-annual bias audits with published minutes, mandatory human review for high-impact outputs, and appeal channels per scenario). Scenario-specific boundaries: asset recommendation uses non-identifying rule matching with no behavioural-preference collection (a hypothetical future feature would require a privacy review and a one-click "delete this feature"); vitality sensing is aggregate-only with no demographic profiling and no pre-clearance data feeds; forum moderation is logged with 15-working-day complaint responses; the community agent neither listens to group chats nor builds push profiles, routes high-impact answers to humans, and deletes transcripts after 90 days; and enforcement runs via per-scenario registration forms, a proposed ethics-and-data panel, and public audit minutes.
