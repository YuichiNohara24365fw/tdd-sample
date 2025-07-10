# Claude Code Actions セットアップと実行方法

## 📋 Issue #1 への回答

**要求**: プロジェクトの全テストを実行して結果を報告してください

## ✅ テスト実行結果

```
✅ 全テストが正常に完了しました

📊 実行結果:
- Test Suites: 2 passed, 2 total
- Tests: 29 passed, 29 total  
- Time: 0.252s
- Coverage: 100% (全ファイル)

🧪 実行されたテスト:
- Calculator.test.js: 計算機能のテスト (17個)
- StringUtils.test.js: 文字列操作のテスト (12個)

🎯 すべてのテストケースが成功
```

## 🤖 Claude Code Actions での実行方法

### 現在のIssueの問題点と改善案

**現在のIssue**:
```
@claude 
プロジェクトの全テストを実行して結果を報告してください
```

**改善された指示例**:
```
プロジェクトの全テストを実行して結果を報告してください。
以下も含めて詳細に報告してください：
- テスト成功/失敗の詳細
- カバレッジ情報
- パフォーマンス情報
- エラーがあれば修正提案
```

## 🔧 Claude Code Actions 実行手順

### 1. 基本的なテスト実行指示
```
npm testコマンドを実行して、テスト結果を詳細に報告してください
```

### 2. カバレッジ付きテスト実行指示  
```
npm run test:coverageを実行して、テストカバレッジと結果を報告してください
```

### 3. TDDサイクル実行指示
```
npm run tdd:cycleを実行して、Red-Green-Refactorサイクルを完了してください
```

### 4. 特定のテストファイル実行指示
```
tests/calculator.test.jsのテストのみを実行して結果を報告してください
```

## ⚙️ セットアップ確認

### 必要な環境
- ✅ Node.js 18.x または 20.x
- ✅ npm パッケージマネージャー
- ✅ Jest テストフレームワーク
- ✅ ES6モジュール対応済み

### 利用可能なコマンド
```bash
npm test                # 全テスト実行
npm run test:watch      # ウォッチモード
npm run test:coverage   # カバレッジ付き実行
npm run test:specific   # 特定ファイル実行
npm run lint           # コード品質チェック
npm run tdd:red        # REDフェーズ
npm run tdd:green      # GREENフェーズ  
npm run tdd:refactor   # REFACTORフェーズ
npm run tdd:cycle      # 完全TDDサイクル
```

## 🎯 効果的なIssue作成例

### 例1: 新機能開発
```markdown
## 📝 Claude Code Actions 指示
Calculatorクラスに平方根計算機能を追加してください。

具体的なタスク:
1. sqrt(n)メソッドを追加
2. TDDサイクルに従って開発
3. 負の数でエラーを投げる
4. テストカバレッジを100%維持

実行するコマンド:
- まずnpm run tdd:redで失敗するテストを作成
- npm run tdd:greenで実装
- npm run tdd:refactorで改善
```

### 例2: バグ修正
```markdown
## 📝 Claude Code Actions 指示
division by zeroエラーハンドリングをテストして改善してください。

実行手順:
1. npm testで現在の状況確認
2. エッジケースのテスト追加
3. 必要に応じてエラーメッセージ改善
4. npm run test:coverageでカバレッジ確認
```

### 例3: リファクタリング
```markdown
## 📝 Claude Code Actions 指示
テストコードをリファクタリングして改善してください。

改善項目:
1. 重複したセットアップコードの共通化
2. テスト名の改善
3. アサーションの可読性向上

確認コマンド:
- npm test（リファクタリング前後でテストが通ること）
- npm run lint（コード品質確認）
```

## 🚀 GitHub Actions連携

### 手動ワークフロー実行
1. リポジトリの「Actions」タブ
2. 「Claude Code Actions TDD Support」選択
3. 「Run workflow」でアクションタイプ選択
4. 結果をIssueにフィードバック

### 利用可能なアクションタイプ
- `test` - 基本テスト実行
- `tdd-red` - REDフェーズ実行
- `tdd-green` - GREENフェーズ実行
- `tdd-refactor` - REFACTORフェーズ実行
- `tdd-cycle` - 完全サイクル実行
- `coverage` - カバレッジ分析
- `lint` - コード品質チェック

## 💡 ベストプラクティス

### 1. 具体的で明確な指示
❌ 悪い例: "テストして"
✅ 良い例: "npm testを実行して、失敗したテストがあれば詳細と修正提案をください"

### 2. 段階的なタスク分割
❌ 悪い例: "新機能全部実装して"
✅ 良い例: "まずテストを書いて、次に実装して、最後にリファクタリング"

### 3. 検証可能な完了条件
❌ 悪い例: "品質を改善して"
✅ 良い例: "テストカバレッジ95%以上、リンターエラー0個を維持"

## 🔍 トラブルシューティング

### よくある問題と解決策

1. **ES6モジュールエラー**
   - 解決済み: NODE_OPTIONS設定でJest対応

2. **package-lock.json不足**
   - 解決済み: npm installでロックファイル生成

3. **テスト失敗**
   - npm testで詳細確認
   - エラーメッセージを元に修正

4. **カバレッジ不足**
   - npm run test:coverageで詳細確認
   - 不足箇所のテスト追加