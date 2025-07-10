# GitHub Issue での Claude Code Actions TDD 指示方法

## 📋 Issue作成の基本フォーマット

### テンプレート構造
```markdown
## 🎯 目的
[何を実装/修正/改善したいか]

## 📝 Claude Code Actions 指示
[具体的な指示内容]

## ✅ 完了条件
- [ ] 条件1
- [ ] 条件2
- [ ] 条件3

## 🔗 関連情報
- 関連Issue: #XX
- 参考資料: [リンク]
```

## 🎯 TDD関連のIssue例

### 1. 新機能追加のIssue

```markdown
## 🎯 目的
Calculatorクラスに平方根計算機能を追加

## 📝 Claude Code Actions 指示
Calculatorクラスに以下の機能を追加してください：

1. **sqrt(n)メソッド**を追加
2. **TDDサイクル**に従って実装
   - RED: 失敗するテストを先に書く
   - GREEN: テストが通る最小実装
   - REFACTOR: コードを改善

具体的な指示：
```
Calculatorクラスにsqrt(n)メソッドを追加してください。
まず失敗するテストを書いて、その後実装してください。
負の数に対してはエラーを投げるようにしてください。
```

## ✅ 完了条件
- [ ] sqrt(n)メソッドが実装されている
- [ ] 正の数の平方根が正しく計算される
- [ ] 負の数でエラーが投げられる
- [ ] テストカバレッジが100%を維持
- [ ] リンターエラーがない

## 🔗 関連情報
ラベル: `enhancement`, `tdd`, `calculator`
```

### 2. バグ修正のIssue

```markdown
## 🎯 目的
division by zeroエラーハンドリングの改善

## 📝 Claude Code Actions 指示
現在のdivision by zeroエラーハンドリングを改善してください：

```
Calculator.divideメソッドのエラーハンドリングをテストして改善してください。
1. 現在のテストが十分かチェック
2. 不足しているエッジケースのテストを追加
3. エラーメッセージをより分かりやすく修正
```

## ✅ 完了条件
- [ ] ゼロ除算で適切なエラーが発生する
- [ ] エラーメッセージが分かりやすい
- [ ] エッジケースのテストが追加されている
- [ ] 既存テストが全て通る

## 🔗 関連情報
ラベル: `bug`, `error-handling`, `calculator`
```

### 3. リファクタリングのIssue

```markdown
## 🎯 目的
テストコードのリファクタリング

## 📝 Claude Code Actions 指示
テストコードを改善してください：

```
tests/フォルダ内のテストコードをリファクタリングしてください：
1. 重複したセットアップコードを共通化
2. テストケースの命名を改善
3. より読みやすいアサーションに変更
4. テストの実行時間を最適化
```

## ✅ 完了条件
- [ ] 重複コードが削除されている
- [ ] テスト名が分かりやすい
- [ ] 全テストが通る
- [ ] テスト実行時間が改善されている

## 🔗 関連情報
ラベル: `refactoring`, `tests`, `code-quality`
```

## 🏷️ Issue ラベルの使い方

### TDD関連ラベル
- `tdd` - TDD関連のタスク
- `red-phase` - REDフェーズのタスク  
- `green-phase` - GREENフェーズのタスク
- `refactor-phase` - REFACTORフェーズのタスク

### 機能別ラベル
- `calculator` - Calculatorクラス関連
- `stringutils` - StringUtilsクラス関連
- `tests` - テスト関連
- `ci-cd` - GitHub Actions関連

### 優先度ラベル
- `priority-high` - 高優先度
- `priority-medium` - 中優先度  
- `priority-low` - 低優先度

## 🎯 効果的な指示のポイント

### 1. 具体的で明確な指示
❌ 悪い例：
```
テストを追加してください
```

✅ 良い例：
```
Calculator.powerメソッドに以下のテストケースを追加してください：
- 正の数の累乗計算
- ゼロの累乗（結果は1）
- 負の指数（小数結果）
- 不正な入力値のエラーハンドリング
```

### 2. TDDサイクルを明示
```
TDDサイクルに従って実装してください：
1. RED: まず失敗するテストを書く
2. GREEN: テストが通る最小実装
3. REFACTOR: コードを改善
```

### 3. 検証可能な完了条件
```
✅ 完了条件
- [ ] 新しいメソッドが実装されている
- [ ] すべてのテストが通る
- [ ] テストカバレッジが95%以上
- [ ] ESLintエラーがない
- [ ] パフォーマンステストが通る
```

## 🔄 Issue ワークフロー

### 1. Issue作成
- 適切なテンプレートを使用
- ラベルを設定
- Assigneeを設定

### 2. 開発開始
- ブランチを作成
- Claude Code Actionsで指示実行

### 3. プルリクエスト
- Issue番号を参照 (`Fixes #123`)
- レビューを依頼

### 4. マージ後
- Issueが自動クローズ
- 次のタスクを計画

## 📊 進捗管理

### GitHub Projects連携
```markdown
## Project情報
- Epic: TDD機能拡張
- Sprint: 2024-Q1
- Story Points: 3
- Status: In Progress
```

### マイルストーン設定
- `v1.0.0 - 基本機能完成`
- `v1.1.0 - 拡張機能追加`
- `v2.0.0 - 大幅リファクタリング`

## 🎭 Issue テンプレート

リポジトリに以下のテンプレートを追加することを推奨：

1. `.github/ISSUE_TEMPLATE/tdd-feature.md`
2. `.github/ISSUE_TEMPLATE/tdd-bug.md`
3. `.github/ISSUE_TEMPLATE/tdd-refactor.md`