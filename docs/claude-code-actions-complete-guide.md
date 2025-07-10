# Claude Code Actions 完全ガイド

## 🚀 概要

Claude Code Actionsは、GitHubのIssues、Pull Requests、コメントを通じてAIによる自動コード生成、テスト実行、コードレビュー、リファクタリングを実現するシステムです。本プロジェクトでは、テスト駆動開発（TDD）を中心とした開発ワークフローを自動化しています。

## 🎯 利便性向上の具体的メリット

### 1. **自動化による効率向上**
- **手動作業の削減**: テスト実行、カバレッジ分析、リントチェックが自動化
- **一貫性のある品質**: 毎回同じ基準でコード品質をチェック
- **時間短縮**: 繰り返し作業を自動化し、開発に集中可能

### 2. **TDD開発の促進**
- **Red-Green-Refactorサイクル**: 各フェーズを明確に分離して実行
- **継続的品質管理**: 各段階でテストとカバレッジを自動確認
- **学習効果**: TDDプロセスの可視化により理解が深まる

### 3. **チーム協力の向上**
- **透明性**: 実行結果がGitHub上で共有され、チーム全体で確認可能
- **標準化**: 統一されたワークフローでチーム開発の品質を保証
- **履歴管理**: 全ての実行履歴がGitHubに記録

## 🛠️ Claude Code Actions設定

### 必要な設定ファイル

#### 1. GitHub Workflow (`.github/workflows/claude-universal.yml`)
```yaml
name: Claude Universal Actions
on:
  issues:
    types: [opened, edited, labeled]
  issue_comment:
    types: [created, edited]
  pull_request:
    types: [opened, synchronize, reopened]
```

#### 2. Claude設定ファイル (`CLAUDE.md`)
```markdown
# Claude Code Actions TDD プロジェクト設定

## 利用可能なコマンド
- `npm test` - 全テストを実行
- `npm run test:coverage` - カバレッジ付きテスト実行
- `npm run tdd:red` - REDフェーズ: 失敗するテストを確認
- `npm run tdd:green` - GREENフェーズ: テストを通すコードを実装
- `npm run tdd:refactor` - REFACTORフェーズ: コード品質向上
```

#### 3. package.json設定
```json
{
  "scripts": {
    "test": "NODE_OPTIONS='--experimental-vm-modules' jest",
    "test:coverage": "NODE_OPTIONS='--experimental-vm-modules' jest --coverage",
    "tdd:red": "echo '🔴 RED Phase: Run failing tests' && npm test || echo 'Tests failed as expected in RED phase'",
    "tdd:green": "echo '🟢 GREEN Phase: Make tests pass' && npm test",
    "tdd:refactor": "echo '🔵 REFACTOR Phase: Improve code quality' && npm run lint && npm run test:coverage"
  },
  "jest": {
    "testEnvironment": "node",
    "transform": {},
    "collectCoverageFrom": ["src/**/*.js"]
  }
}
```

## 📋 実行可能なアクション一覧

### 🧪 テスト実行アクション
**トリガーキーワード**: `テスト`, `test`, `TDD`

```markdown
タイトル: [CLAUDE] テスト実行
本文: 全テストを実行してカバレッジレポートを生成してください
```

**実行内容:**
- 全テストスイートの実行
- テストカバレッジ分析
- 詳細レポートの生成
- 結果のコメント表示

### 👁️ コードレビューアクション
**トリガーキーワード**: `review`, `レビュー`, `チェック`, `分析`

```markdown
タイトル: [CLAUDE] コードレビュー
本文: セキュリティとパフォーマンスの観点でコードをレビューしてください
```

**実行内容:**
- ESLint品質分析
- テストカバレッジ確認
- コードメトリクス測定
- セキュリティスキャン
- 改善提案の生成

### 🔧 リファクタリングアクション
**トリガーキーワード**: `refactor`, `リファクタ`, `改善`, `最適化`

```markdown
タイトル: [CLAUDE] リファクタリング
本文: 重複コードを削除してコード品質を向上させてください
```

**実行内容:**
- 重複コード削除
- コードクリーンアップ
- JSDocドキュメント追加
- パフォーマンス最適化
- 前後テスト検証

### 🏗️ コード生成アクション
**トリガーキーワード**: `新しいクラス`, `new class`, `メソッド追加`, `add method`

```markdown
タイトル: [CLAUDE] 新機能追加
本文: ArrayUtilsクラスを作成して配列操作メソッドを実装してください
```

**実行内容:**
- 新クラス・メソッドの生成
- エラーハンドリング実装
- JSDocドキュメント生成
- 基本テストケース作成

### 🔄 汎用分析アクション
**トリガーキーワード**: その他のキーワード

```markdown
タイトル: [CLAUDE] プロジェクト分析
本文: プロジェクト全体の品質状況を分析してください
```

**実行内容:**
- 包括的プロジェクト分析
- 品質指標の測定
- 改善点の特定
- 推奨アクションの提案

## 🎯 実践的な使用例

### TDD開発サイクルの実行

#### 1. REDフェーズ（失敗するテストを作成）
```markdown
タイトル: [CLAUDE] TDD Red フェーズ
本文: 
新しい機能のテストを作成してください：
- Calculator.factorial(n) メソッド
- 正の整数の階乗計算
- 負の数や小数の場合はエラー
```

#### 2. GREENフェーズ（最小実装でテストを通す）
```markdown
タイトル: [CLAUDE] TDD Green フェーズ
本文:
失敗しているfactorialテストが通るように最小限の実装をしてください
```

#### 3. REFACTORフェーズ（コード改善）
```markdown
タイトル: [CLAUDE] TDD Refactor フェーズ
本文:
factorialメソッドのコードを以下の観点で改善してください：
- パフォーマンス最適化
- エラーハンドリング強化
- コードの可読性向上
```

### 包括的プロジェクト改善

```markdown
タイトル: [CLAUDE] プロジェクト全体改善
本文:
プロジェクト全体を以下の順序で改善してください：
1. コードレビューで問題点を特定
2. テストカバレッジを100%に向上
3. セキュリティ脆弱性をチェック
4. パフォーマンス最適化を実施
5. ドキュメントを更新
```

### 特定機能の完全実装

```markdown
タイトル: [CLAUDE] 新機能完全実装
本文:
MathUtilsクラスを以下の仕様で完全実装してください：

**要求仕様:**
- fibonacci(n): フィボナッチ数列の計算
- isPrime(n): 素数判定
- gcd(a, b): 最大公約数
- lcm(a, b): 最小公倍数

**品質要件:**
- 100%テストカバレッジ
- 包括的なエラーハンドリング
- JSDocドキュメント
- パフォーマンステスト
```

## 🔧 高度な設定とカスタマイズ

### カスタムトリガーの追加

ワークフローファイルでキーワード判定をカスタマイズ：

```bash
# リファクタリング判定の拡張
elif echo "$INSTRUCTION_TEXT" | grep -qi "refactor\\|リファクタ\\|改善\\|最適化\\|clean\\|クリーン"; then
  echo "action_type=refactor" >> $GITHUB_OUTPUT
```

### 実行結果のカスタマイズ

```javascript
const actionDescriptions = {
  'review': '👁️ コードレビュー',
  'refactor': '🔧 リファクタリング', 
  'generate': '🏗️ コード生成',
  'test': '🧪 テスト実行',
  'general': '🤖 一般分析',
  'security': '🔒 セキュリティスキャン',  // カスタム追加
  'performance': '⚡ パフォーマンス最適化'  // カスタム追加
};
```

### 継続的品質管理の設定

```yaml
# 定期実行の設定
on:
  schedule:
    - cron: '0 2 * * 1'  # 毎週月曜日午前2時に実行
  issues:
    types: [opened, edited, labeled]
```

## 📊 実行結果の解釈

### 成功時の出力例
```markdown
## 🤖 Claude Universal Actions - 実行完了

**Issue**: #123
**アクション**: 🧪 テスト実行
**実行時刻**: 2024-01-15T10:30:00Z
**結果**: ✅ 成功

### 📋 実行レポート
=== TESTING ===
Test Suites: 3 passed, 3 total
Tests: 31 passed, 31 total
Coverage: 100%
Time: 0.512s

### 💡 次回実行例
- `[CLAUDE] コードレビューしてください`
- `[CLAUDE] ArrayUtils クラスを作成してください`
- `[REFACTOR] 重複コードを削除してください`
```

### エラー時の対処法

**一般的なエラーパターン:**

1. **テスト失敗**
   ```
   結果: ❌ エラー
   Tests: 2 failed, 29 passed
   ```
   → 失敗したテストを修正後、再実行

2. **リント エラー**
   ```
   ESLint: 5 errors, 2 warnings
   ```
   → `npm run lint:fix` で自動修正可能な問題を解決

3. **カバレッジ不足**
   ```
   Coverage: 85% (threshold: 90%)
   ```
   → 不足している部分のテストを追加

## 🎯 ベストプラクティス

### 1. 効果的な指示の書き方
- **明確な目的**: 何を達成したいかを具体的に記載
- **適切なキーワード**: 自動判別しやすい用語を使用
- **段階的実行**: 複雑なタスクは小さな単位に分割

### 2. 継続的改善
- **定期実行**: 週次でのコード品質チェック
- **履歴追跡**: 実行結果の傾向を分析
- **チーム共有**: 改善点をチームで議論

### 3. セキュリティ考慮事項
- **権限設定**: 必要最小限の権限のみ付与
- **機密情報**: コード内にAPIキーやパスワードを含めない
- **依存関係**: 定期的な脆弱性スキャン

## 🔄 継続的な品質向上

Claude Code Actionsを継続的に活用することで：

1. **開発効率の向上**: 手動作業の自動化
2. **品質の一定化**: 常に同じ基準での品質チェック
3. **学習効果**: TDDプロセスの理解深化
4. **チーム標準化**: 統一されたワークフローの確立

このシステムにより、個人開発からチーム開発まで、一貫した高品質なソフトウェア開発が実現できます。