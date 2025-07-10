---
name: Claude Code Actions タスク
about: Claude Code Actionsを使用した開発タスク
title: '[CLAUDE] '
labels: ['claude-actions', 'automation']
assignees: ''
---

## 🤖 Claude Code Actions タスク

### 📝 実行したい指示
<!-- Claude Code Actionsに送る具体的な指示 -->

```
[ここに具体的な指示を記載]

例：
新しいクラス「ArrayUtils」を作成してください：
1. unique(array) - 重複要素削除
2. sum(array) - 配列の合計  
3. average(array) - 配列の平均値
TDDアプローチで一から作成してください。
```

### 🎯 期待する結果
<!-- 何が完成すべきか -->
- 

### ⚙️ 実行方法
以下のいずれかの方法で実行：

#### 1. 直接Claude Code Actionsで指示
上記の指示をそのままClaude Code Actionsに送信

#### 2. GitHub Actions経由で実行
- リポジトリの「Actions」タブ
- 「Claude Code Actions TDD Support」ワークフロー
- 「Run workflow」をクリック
- アクションタイプを選択

#### 3. ローカルでnpmスクリプト実行
```bash
npm run tdd:cycle  # 完全なTDDサイクル
npm run tdd:red    # REDフェーズのみ
npm run tdd:green  # GREENフェーズのみ
npm run tdd:refactor # REFACTORフェーズのみ
```

### 📋 チェックリスト
実行前に確認：
- [ ] 指示が具体的で明確
- [ ] 期待する結果が明記されている
- [ ] 関連するファイルが特定されている
- [ ] テスト要件が含まれている

実行後に確認：
- [ ] 期待した結果が得られた
- [ ] テストが全て通る
- [ ] リンターエラーがない
- [ ] ドキュメントが更新されている

### 🔄 TDDサイクル対応
- [ ] **🔴 RED Phase**: 失敗するテスト
- [ ] **🟢 GREEN Phase**: 最小実装
- [ ] **🔵 REFACTOR Phase**: コード改善

### 📊 成功指標
- テスト成功率: %
- カバレッジ: %
- 実行時間: 秒以内
- エラー数: 0個

### 🔗 関連リソース
- 参考指示例: `templates/claude-instructions.md`
- プロジェクト設定: `CLAUDE.md`
- 実行スクリプト: `scripts/tdd-helper.js`

### 💡 ヒント
効果的な指示のために：
1. **具体的**: 曖昧な表現を避ける
2. **段階的**: 複雑なタスクは分割
3. **検証可能**: 完了条件を明確に
4. **TDD重視**: テストファーストを意識