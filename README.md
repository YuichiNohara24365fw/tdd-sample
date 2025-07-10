# Claude Code Actions TDD Sample Project

**Claude Code Actionsを活用したテスト駆動開発（TDD）の完全実装プロジェクト**

このプロジェクトは、GitHubのIssues・Pull Requests・Actionsと連携して、AIによる自動コード生成・テスト実行・コードレビュー・リファクタリングを実現し、真のTDD開発を体験できるサンプルプロジェクトです。

## 🎯 プロジェクトの特徴

### 🤖 Claude Code Actions統合
- **自動コード生成**: GitHub Issueでの指示により自動的にクラス・メソッドを生成
- **自動テスト実行**: TDDサイクル（Red-Green-Refactor）の完全自動化
- **自動コードレビュー**: セキュリティ・パフォーマンス・品質の包括的分析
- **自動リファクタリング**: コード品質向上の自動実行

### 📊 完全なTDD実現
- **🔴 REDフェーズ**: 失敗するテストの自動作成
- **🟢 GREENフェーズ**: 最小実装でのテスト成功
- **🔵 REFACTORフェーズ**: コード品質の自動改善
- **100%カバレッジ**: 全コードのテスト網羅

### 🔧 実装済み機能
- **Calculator クラス**: 数学演算（add, subtract, multiply, divide, power, factorial）
- **StringUtils クラス**: 文字列操作（reverse, isPalindrome, capitalize, wordCount）
- **包括的テストスイート**: Jest + ES6 Modules対応
- **GitHub Actions**: Claude Universal Actions統合ワークフロー

## 📋 TDD サイクル

このプロジェクトは以下のTDDサイクルを実装しています：

1. **🔴 RED**: 失敗するテストを書く
2. **🟢 GREEN**: テストが通る最小限のコードを書く  
3. **🔵 REFACTOR**: コードをリファクタリングして改善

## 🛠️ セットアップ

```bash
# 依存関係をインストール
npm install

# アプリケーションを実行
npm start

# テストを実行
npm test

# テストをウォッチモードで実行
npm run test:watch

# カバレッジ付きでテストを実行
npm run test:coverage

# リンターを実行
npm run lint
```

## 🚀 Claude Code Actions使用方法

### 基本的な使い方

#### 1. テスト実行
```markdown
タイトル: [CLAUDE] テスト実行
本文: 全テストとカバレッジレポートを実行してください
```

#### 2. コードレビュー
```markdown
タイトル: [CLAUDE] コードレビュー  
本文: セキュリティとパフォーマンスの観点でプロジェクト全体をレビューしてください
```

#### 3. 新機能追加（TDDサイクル）
```markdown
タイトル: [CLAUDE] TDD新機能実装
本文:
ArrayUtilsクラスを以下の仕様でTDD実装してください：
- unique(array): 重複要素除去
- sum(array): 配列要素合計
- average(array): 平均値計算

TDDサイクル（Red→Green→Refactor）で実装してください。
```

#### 4. リファクタリング
```markdown
タイトル: [REFACTOR] コード改善
本文: 重複コードを削除してパフォーマンスを最適化してください
```

### 詳細ガイド
- 📖 [Claude Code Actions完全ガイド](docs/claude-code-actions-complete-guide.md)
- 🔄 [TDD実現ガイド](docs/tdd-with-claude-guide.md)  
- 🔗 [GitHub統合ガイド](docs/github-integration-guide.md)

## 📁 プロジェクト構造

```
tdd-sample-project/
├── src/
│   ├── calculator.js      # Calculator クラス
│   ├── stringUtils.js     # StringUtils クラス
│   └── index.js           # デモ実行ファイル
├── tests/
│   ├── calculator.test.js # Calculator のテスト
│   ├── stringUtils.test.js # StringUtils のテスト
│   └── index.test.js      # index.js のテスト
├── .github/
│   └── workflows/
│       ├── ci.yml             # 基本的なCI/CD
│       └── claude-universal.yml # Claude Code Actions統合
├── docs/
│   ├── claude-code-actions-complete-guide.md # Claude Actions完全ガイド
│   ├── tdd-with-claude-guide.md              # TDD実現ガイド
│   ├── github-integration-guide.md           # GitHub統合ガイド
│   ├── claude-universal-guide.md             # Universal Actions詳細
│   └── refactoring-guide.md                  # リファクタリングガイド
├── package.json
├── eslint.config.js
└── README.md
```

## 🧪 テスト例

### Calculator クラス

```javascript
// 基本演算のテスト
expect(calculator.add(2, 3)).toBe(5);
expect(calculator.divide(10, 2)).toBe(5);
expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
```

### StringUtils クラス

```javascript
// 文字列操作のテスト
expect(StringUtils.reverse('hello')).toBe('olleh');
expect(StringUtils.isPalindrome('racecar')).toBe(true);
expect(StringUtils.wordCount('hello world')).toBe(2);
```

## 🚀 GitHub Actions ワークフロー

### CI ワークフロー (`ci.yml`)

- Node.js 18.x と 20.x でテスト
- リンター実行
- テストカバレッジ収集
- Codecov連携（オプション）

### TDD デモワークフロー (`tdd-demo.yml`)

TDDの3つのフェーズを視覚化：

1. **🔴 RED Phase**: テストが失敗することを確認
2. **🟢 GREEN Phase**: すべてのテストが通ることを確認  
3. **🔵 REFACTOR Phase**: コード品質チェックと最適化

## 🎯 使用方法

### 基本的な使用
1. このリポジトリをGitHubにpush
2. GitHub Actionsが自動的に実行される
3. ワークフローページでTDDサイクルを確認
4. 手動でワークフローをトリガーすることも可能

### Claude Code Actions での使用

このプロジェクトはClaude Code Actionsでの使用に最適化されています：

#### 基本的なテスト実行
```
プロジェクトの全テストを実行して結果を報告してください
```

#### TDD サイクル実行
```
新機能「平方根計算」をCalculatorクラスに追加してください。
TDDサイクル（Red → Green → Refactor）に従って実装してください。
```

#### 特定のフェーズ実行
```
REDフェーズ: まず失敗するテストを書いてください
GREENフェーズ: テストが通るように実装してください  
REFACTORフェーズ: コードの品質を改善してください
```

#### 利用可能なコマンド
- `npm run tdd:red` - REDフェーズ実行
- `npm run tdd:green` - GREENフェーズ実行
- `npm run tdd:refactor` - REFACTORフェーズ実行
- `npm run tdd:cycle` - 完全なTDDサイクル実行

#### GitHub Actions手動実行
- Actions タブ → "Claude Code Actions TDD Support" ワークフロー
- "Run workflow" で手動実行可能
- アクションタイプを選択（test, tdd-red, tdd-green, etc.）

## ⚡ GitHub上でのClaude Code Actions実行

### 🚀 自動実行（NEW!）
**Issue作成で自動実行されます**：

1. **タイトルに[CLAUDE]を含む** Issue作成
2. **自動的にGitHub Actionsが実行**
3. **結果がIssueにコメントで投稿**

### 📋 手動実行方法

**重要**: GitHub App未設定の場合は手動実行が必要です：

### 1. Claude Code Actions実行（推奨）
```
1. GitHubでIssueを作成
2. Claude Code Actionsを開く  
3. Issue内の指示をコピペして実行
4. 結果をIssueに報告
```

### 2. GitHub Actions手動実行
```
1. リポジトリ → Actionsタブ
2. "Claude Code Actions TDD Support"選択
3. "Run workflow"でアクションタイプを選択
4. 実行ログを確認
```

### 3. ローカル実行
```bash
git clone [リポジトリURL]
npm install
npm run tdd:cycle  # または他のTDDコマンド
```

詳細は `docs/issue-execution-workflow.md` を参照してください。

## 📈 カバレッジ

テストカバレッジは `npm run test:coverage` で確認できます。カバレッジレポートは `coverage/` ディレクトリに生成されます。

## 🔧 開発のヒント

- **テストファースト**: 新機能を追加する前に必ずテストを書く
- **小さなステップ**: 一度に一つの機能に集中
- **リファクタリング**: テストが通った後にコードを改善
- **継続的インテグレーション**: すべての変更でテストを実行

## 📚 TDD について

Test-Driven Development (TDD) は以下の利点があります：

- **コード品質の向上**: テストによって設計が改善される
- **バグの早期発見**: 開発段階でバグを見つけられる
- **リファクタリングの安全性**: テストがあることで安心してコードを変更できる
- **仕様の明確化**: テストが仕様書の役割を果たす

---

## 📚 Claude Code Actions 指示例

詳細な指示例は `templates/claude-instructions.md` を参照してください。

### 一般的な指示例

#### 新機能追加
```
Calculatorクラスに平方根計算機能を追加してください。
まずテストを書いて、その後実装してください。
```

#### バグ修正
```
division by zero のエラーハンドリングが正しく動作するかテストしてください
```

#### リファクタリング
```
重複したコードを削除して、保守性を向上させてください
```

#### テスト強化
```
エッジケースのテストを追加して、カバレッジを100%にしてください
```

## 🔧 高度な使用法

### カスタムワークフロー
GitHub Actionsで独自のTDDワークフローを作成可能

### 複数言語対応
TypeScript、Python、Javaなどに拡張可能

### IDE統合
VS Code、WebStormなどでの使用に最適化

## 🤝 コントリビューション

1. フォークしてブランチを作成
2. TDDサイクルに従って開発
3. テストが通ることを確認
4. プルリクエストを作成

## 📄 ライセンス

MIT License