# Claude Code Actions TDD プロジェクト設定

## プロジェクト概要
このプロジェクトはClaude Code Actionsを使用してテスト駆動開発（TDD）を完全実現するサンプルプロジェクトです。GitHubのIssues・Pull Requests・Actionsと連携し、AI による自動コード生成・テスト実行・レビュー・リファクタリングを実現します。

## 🤖 Claude Universal Actions対応
- **統合ワークフロー**: 単一のワークフローで全機能に対応
- **自動アクション判別**: キーワードベースの自動実行
- **包括的レポート**: 詳細な実行結果とフィードバック

## 利用可能なコマンド

### テスト関連
- `npm test` - 全テストを実行
- `npm run test:watch` - ウォッチモードでテスト実行
- `npm run test:coverage` - カバレッジ付きテスト実行
- `npm run test:specific -- <filename>` - 特定のテストファイルを実行

### 開発関連
- `npm run lint` - ESLintでコード品質チェック
- `npm run lint:fix` - ESLintで修正可能な問題を自動修正
- `npm start` - アプリケーション実行
- `npm run dev` - 開発モードで実行

### TDD サイクル
- `npm run tdd:red` - REDフェーズ: 失敗するテストを確認
- `npm run tdd:green` - GREENフェーズ: テストを通すコードを実装
- `npm run tdd:refactor` - REFACTORフェーズ: コード品質向上

## 🎯 Claude Universal Actions 実行例

### 🧪 テスト・カバレッジ実行
```markdown
タイトル: [CLAUDE] カバレッジテスト実行
本文: 全テストを実行してカバレッジレポートを生成してください
```

### 👁️ コードレビュー
```markdown
タイトル: [REVIEW] セキュリティチェック
本文: 
プロジェクト全体をセキュリティ観点でレビューしてください：
- 脆弱性スキャン
- エラーハンドリング確認
- 入力値検証のチェック
```

### 🔧 リファクタリング
```markdown  
タイトル: [REFACTOR] パフォーマンス最適化
本文:
以下の観点でコードを改善してください：
- 重複コード削除
- メモ化の実装
- JSDocドキュメント追加
```

### 🏗️ TDD新機能実装
```markdown
タイトル: [CLAUDE] TDDで新機能実装
本文:
MathUtilsクラスを以下の仕様でTDD実装してください：

**仕様:**
- fibonacci(n): フィボナッチ数列
- isPrime(n): 素数判定  
- gcd(a, b): 最大公約数

**TDD要件:**
- Red: 失敗するテスト作成
- Green: 最小実装
- Refactor: コード改善
```

### 🚀 包括的プロジェクト改善
```markdown
タイトル: [CLAUDE] プロジェクト全体改善
本文:
以下の順序でプロジェクト品質を向上させてください：
1. コードレビューで問題点特定
2. テストカバレッジ100%達成
3. パフォーマンス最適化
4. セキュリティ強化
5. ドキュメント更新
```

## 📁 プロジェクト構造
```
tdd-sample-project/
├── src/                     # 実装コード
│   ├── calculator.js        # Calculator クラス (数学演算)
│   ├── stringUtils.js       # StringUtils クラス (文字列操作)
│   └── index.js             # デモ実行ファイル
├── tests/                   # テストコード
│   ├── calculator.test.js   # Calculator のテスト
│   ├── stringUtils.test.js  # StringUtils のテスト
│   └── index.test.js        # index.js のテスト
├── .github/workflows/       # GitHub Actions設定
│   ├── ci.yml               # 基本的なCI/CD
│   └── claude-universal.yml # Claude Universal Actions
├── docs/                    # ドキュメント
│   ├── claude-code-actions-complete-guide.md
│   ├── tdd-with-claude-guide.md
│   └── github-integration-guide.md
└── CLAUDE.md               # この設定ファイル
```

## 🔄 TDDサイクル自動化
1. **🔴 Red**: GitHub Issueで失敗するテストの作成指示
2. **🟢 Green**: 最小実装でテストを通す指示  
3. **🔵 Refactor**: コード品質改善の自動実行
4. **📊 Report**: 実行結果の自動レポート生成

## 📖 詳細ドキュメント
- **[Claude Code Actions完全ガイド](docs/claude-code-actions-complete-guide.md)**: 全機能の詳細説明
- **[TDD実現ガイド](docs/tdd-with-claude-guide.md)**: TDD実践の具体的方法
- **[GitHub統合ガイド](docs/github-integration-guide.md)**: GitHub機能との連携方法

## ⚠️ 重要な実践ポイント
- **Issue駆動開発**: GitHub Issueでの明確な指示
- **キーワード活用**: [CLAUDE], [REVIEW], [REFACTOR] 等の適切な使用
- **段階的実行**: 複雑な機能は小さな単位に分割
- **継続的改善**: 実行結果を基にした品質向上