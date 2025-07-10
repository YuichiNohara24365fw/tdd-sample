# Claude Code Actions TDD プロジェクト設定

## プロジェクト概要
このプロジェクトはClaude Code Actionsを使用してテスト駆動開発（TDD）を実践するためのサンプルです。

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

## Claude Code Actions 指示例

### 基本的なテスト実行
```
テストを実行して結果を確認してください
```

### TDD Red フェーズ
```
新機能のテストを書いて、失敗することを確認してください
```

### TDD Green フェーズ
```
失敗しているテストが通るように最小限の実装をしてください
```

### TDD Refactor フェーズ
```
テストが通っている状態でコードをリファクタリングしてください
```

### 特定の機能追加
```
Calculator クラスに新しい機能（例：平方根計算）を追加してください。まずテストから書いてください。
```

### カバレッジ改善
```
テストカバレッジを確認して、不足している部分のテストを追加してください
```

## ファイル構造説明
- `src/` - 実装コード
- `tests/` - テストコード  
- `.github/workflows/` - GitHub Actions設定
- `CLAUDE.md` - この設定ファイル

## 開発フロー
1. **Red**: 失敗するテストを書く
2. **Green**: テストが通る最小実装
3. **Refactor**: コード改善
4. **Repeat**: 次の機能へ

## 重要な注意事項
- テストファーストで開発する
- 一度に一つの機能に集中する
- すべてのテストが通ることを確認してからコミットする
- リファクタリング時はテストを破らない