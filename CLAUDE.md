# 🤖 Claude AI Actions - 真のAI統合TDD設定

## プロジェクト概要
このプロジェクトは**本物のClaude AI API**を統合し、自然言語による指示から自動的にコード生成・テスト作成・レビュー・リファクタリングを実行する革新的なシステムです。

## 🧠 Claude AI統合の特徴
- **自然言語理解**: キーワード不要、普通の日本語で指示
- **インテリジェント実行**: AI による要求分析と最適なアクション決定
- **動的コード生成**: 要求に応じた柔軟なコード・テスト作成
- **深い分析**: AI による包括的なコードレビューと改善提案

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

## 🎯 Claude AI Actions 実行例（自然言語）

### 🧪 テスト関連（キーワード不要）
```markdown
タイトル: テストを実行して
本文: 全部のテストを動かして、カバレッジも確認してください
```

```markdown
タイトル: テストが足りない
本文: 
現在のテストカバレッジが低いので、
もっと詳しいテストケースを追加してください。
エッジケースも忘れずにお願いします。
```

### 👁️ コードレビュー（自然な表現）
```markdown
タイトル: コードをチェックして
本文: 
セキュリティに問題がないか見てください。
パフォーマンスの悪い部分があれば教えてください。
```

```markdown
タイトル: コード品質を確認したい
本文:
プロジェクト全体を見て、改善できる部分を教えてください。
特にセキュリティとバグになりそうな部分が心配です。
```

### 🔧 リファクタリング（普通の日本語）
```markdown  
タイトル: コードを綺麗にしたい
本文:
同じようなコードが何回も書いてあるので、
整理してスッキリさせてください。
```

```markdown
タイトル: 処理が遅い
本文:
アプリの動作が重いので、速くしてください。
メモリの使用量も減らせるなら減らしてください。
```

### 🏗️ クラス・機能作成（自由な表現）
```markdown
タイトル: ArrayUtilsクラス
本文: 配列を操作するユーティリティクラスを作ってください
```

```markdown
タイトル: ユーザー認証機能
本文: 
ログインとログアウトができるシステムを作ってください。
セキュリティもちゃんとしてください。
JWTトークンを使いたいです。
```

```markdown
タイトル: 数学関数を追加したい
本文:
Calculatorクラスに以下の機能を追加してください：
- 平方根の計算
- 階乗の計算  
- 素数判定

テストも一緒に作ってください。
```

### 🚀 複雑な要求（詳細な説明）
```markdown
タイトル: アーキテクチャを改善したい
本文:
現在のコードが整理されていないので、
クリーンアーキテクチャに沿って整理してください。

具体的には：
- レイヤーを分離する
- 依存関係を整理する
- テストしやすい構造にする
- ドキュメントも更新する

段階的に実施してください。
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
│   └── claude-ai-actions.yml # Claude AI API統合
├── docs/                    # ドキュメント
│   ├── claude-code-actions-complete-guide.md
│   ├── tdd-with-claude-guide.md
│   └── github-integration-guide.md
└── CLAUDE.md               # この設定ファイル
```

## 🔄 AI駆動TDDサイクル
1. **🔴 Red**: 自然言語で失敗するテストの作成を指示
2. **🟢 Green**: Claude AIが最適な実装を提案・実行  
3. **🔵 Refactor**: AIによる自動的なコード品質改善
4. **📊 Report**: 詳細な分析レポートの自動生成

## 🚀 セットアップ
Claude AI Actionsを使用するには、まずAPIキーの設定が必要です：
- **[Claude AI セットアップガイド](docs/claude-ai-setup-guide.md)**: 詳細なセットアップ手順

## 📖 詳細ドキュメント
- **[Claude Code Actions完全ガイド](docs/claude-code-actions-complete-guide.md)**: 全機能の詳細説明
- **[TDD実現ガイド](docs/tdd-with-claude-guide.md)**: TDD実践の具体的方法
- **[GitHub統合ガイド](docs/github-integration-guide.md)**: GitHub機能との連携方法

## ⚠️ 重要な変革ポイント
- **自然言語駆動**: キーワード不要、普通の日本語で指示
- **AI理解**: Claude AIが文脈と意図を自動理解
- **柔軟な実行**: 要求に応じた動的なコード生成
- **深い分析**: AIによる包括的な改善提案