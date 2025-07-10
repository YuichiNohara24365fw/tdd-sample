# Claude Code Actions 高度な指示ガイド

## 🚀 利用可能な Claude Code Actions

### 🏗️ 新しいクラス作成
```markdown
タイトル: [CLAUDE] 新しいクラス作成
本文: 新しいクラス "ArrayUtils" を作成してください
```

**実行される処理**:
- ArrayUtilsクラスを `src/arrayutils.js` に作成
- unique, sum, average, max, min メソッドを実装
- 自動コミット・プッシュ

### 🔧 メソッド追加
```markdown
タイトル: [CLAUDE] メソッド追加
本文: Calculatorクラスに "sqrt" メソッドを追加してください
```

**実行される処理**:
- Calculator.sqrt(n) メソッドを追加
- 負の数のエラーハンドリング実装
- 自動コミット・プッシュ

### 🧪 テスト追加
```markdown
タイトル: [CLAUDE] テスト追加
本文: sqrt メソッドのテストを追加してください
```

**実行される処理**:
- calculator.test.js にsqrtテストケース追加
- 正常ケース、エラーケースの網羅
- 自動コミット・プッシュ

### 🔄 TDDサイクル実行
```markdown
タイトル: [CLAUDE] TDD実行
本文: TDDサイクルを実行してください
```

**実行される処理**:
- Red → Green → Refactor サイクル
- npm run tdd:cycle 実行
- 結果レポート

### 🧪 テスト実行
```markdown
タイトル: [CLAUDE] 全テスト
本文: 全テストを実行してください
```

**実行される処理**:
- npm test 実行
- 結果の詳細レポート
- 成功/失敗の判定

### 📊 カバレッジ確認
```markdown
タイトル: [CLAUDE] カバレッジ
本文: カバレッジを確認してください
```

**実行される処理**:
- npm run test:coverage 実行
- カバレッジレポート生成
- 不足箇所の特定

### 🔧 リファクタリング
```markdown
タイトル: [CLAUDE] リファクタ
本文: コードを改善してください
```

**実行される処理**:
- ESLint 実行
- テスト確認
- コード品質チェック

### 🐛 バグ修正
```markdown
タイトル: [CLAUDE] バグ修正
本文: division by zero のバグを修正してください
```

**実行される処理**:
- 該当コードの確認
- テスト実行
- 修正提案

## 📝 詳細な指示例

### 複数メソッド追加
```markdown
タイトル: [CLAUDE] 機能拡張
本文: 
Calculatorクラスに以下のメソッドを追加してください：
1. sqrt メソッド (平方根計算)
2. factorial メソッド (階乗計算)

各メソッドのテストも追加してください。
```

### クラス + テスト同時作成
```markdown
タイトル: [CLAUDE] 新機能開発
本文:
新しいクラス "MathUtils" を作成して、以下のメソッドを実装してください：
- gcd(a, b): 最大公約数
- lcm(a, b): 最小公倍数
- isPrime(n): 素数判定

包括的なテストも同時に作成してください。
```

### TDD + 機能開発
```markdown
タイトル: [CLAUDE] TDD開発
本文:
StringUtilsクラスに "slugify" メソッドをTDDで開発してください：
1. 失敗するテストを先に書く
2. 最小実装で通す
3. リファクタリングで改善
```

## 🎯 自動認識されるキーワード

### アクション判定
- **新しいクラス**: "新しいクラス", "new class", "クラスを作成", "create class"
- **メソッド追加**: "新しいメソッド", "メソッドを追加", "add method"
- **テスト追加**: "テストを追加", "add test", "テスト作成"
- **リファクタリング**: "リファクタ", "refactor", "改善", "improve"
- **バグ修正**: "バグ修正", "bug fix", "修正"
- **TDD**: "TDD", "red green refactor"
- **テスト実行**: "全テスト", "all test"
- **カバレッジ**: "カバレッジ", "coverage"

### 対象クラス認識
- Calculator, StringUtils, ArrayUtils
- XxxUtils パターン

### 対象メソッド認識
- sqrt, factorial, power, unique, sum, average
- その他一般的なメソッド名

## 🔄 ワークフロー詳細

### 1. 指示解析
```bash
# 自動キーワード検出
if echo "$INSTRUCTION" | grep -qi "新しいクラス"; then
  action_type=create_class
fi
```

### 2. コード生成
```javascript
// 動的なクラス/メソッド生成
case $ACTION_TYPE in
  "create_class")
    # テンプレートから新しいクラス生成
  "add_method")
    # 既存クラスにメソッド追加
esac
```

### 3. 自動コミット
```bash
git add -A
git commit -m "🤖 Claude Code Actions: $action_type"
git push
```

### 4. 結果レポート
```markdown
## 🤖 Claude Code Actions - 実行結果
**アクション**: 🏗️ 新しいクラス作成
**対象**: ArrayUtils.unknown
✅ 成功
```

## 💡 ベストプラクティス

### 1. 具体的な指示
❌ 悪い例: "何か追加して"
✅ 良い例: "Calculatorクラスに平方根計算のsqrtメソッドを追加してください"

### 2. 段階的な開発
❌ 悪い例: "完璧なクラスを作って"
✅ 良い例: "まずArrayUtilsクラスを作成し、次にテストを追加してください"

### 3. TDD重視
❌ 悪い例: "実装してからテスト"
✅ 良い例: "TDDサイクルで開発してください"

## 🚨 制限事項

### 現在の制限
- **予定義テンプレート**: Calculator, StringUtils, ArrayUtils のみ
- **基本的なメソッド**: sqrt, factorial, sum, average など
- **簡単な構文**: 複雑なロジックは手動修正が必要

### 将来の拡張
- より多くのクラステンプレート
- 動的なメソッド生成
- TypeScript対応
- React/Vue コンポーネント生成

## 🎪 実践例

### 例1: 新機能をTDDで開発
```markdown
1. Issue: "[CLAUDE] TDD開発" - "factorial メソッドをTDDで開発"
2. 自動実行: TDDサイクル
3. 結果確認: コミット履歴とテスト結果
4. 次の指示: "テストケースを追加してください"
```

### 例2: バグ修正ワークフロー
```markdown
1. Issue: "[CLAUDE] バグ修正" - "ゼロ除算エラーを修正"
2. 自動実行: バグ修正チェック
3. 結果確認: エラー箇所の特定
4. 手動修正: 必要に応じて
```

これで高度なClaude Code Actionsが利用可能になります！