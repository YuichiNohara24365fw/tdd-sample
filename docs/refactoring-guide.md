# Claude Refactoring ガイド

## 🔧 Claude Refactoring システム

### 自動リファクタリング機能
Claude Refactoringは、コードの保守性、可読性、パフォーマンスを体系的に改善し、テスト安全性を保証しながら自動的にコードを最適化します。

## 🚀 利用方法

### 1. リファクタリング種別指定

#### 重複コード削除
```markdown
タイトル: [REFACTOR] 重複削除
本文: 重複コードを削除してください
```

#### メソッド抽出
```markdown
タイトル: [REFACTOR] メソッド分割
本文: Calculator クラスの関数を分割してください
```

#### 変数名改善
```markdown
タイトル: [REFACTOR] 命名改善
本文: 変数名を改善してください
```

#### ドキュメント追加
```markdown
タイトル: [REFACTOR] ドキュメント
本文: JSDocコメントを追加してください
```

#### エラーハンドリング強化
```markdown
タイトル: [REFACTOR] エラー処理
本文: エラーハンドリングを強化してください
```

#### パフォーマンス最適化
```markdown
タイトル: [REFACTOR] 最適化
本文: パフォーマンスを最適化してください
```

#### 可読性向上
```markdown
タイトル: [REFACTOR] 可読性
本文: コードの可読性を向上させてください
```

### 2. 特定ファイル指定
```markdown
タイトル: [REFACTOR] Calculator改善
本文: src/calculator.js をリファクタリングしてください
```

### 3. コメントベース実行
```markdown
@claude-refactor このクラスの重複を削除してください
```

## 🔧 リファクタリング種別詳細

### 🔄 重複コード削除 (DRY原則)

**実行内容**:
- 共通バリデーション関数の抽出
- 重複するエラーハンドリングの統一
- 類似パターンの共通化

**生成例**:
```javascript
static validateInput(value, type = "number") {
  if (value === null || value === undefined) {
    throw new Error(`Input cannot be null or undefined`);
  }
  if (type === "number" && (typeof value !== "number" || isNaN(value))) {
    throw new Error(`Expected a valid number, got ${typeof value}`);
  }
  return true;
}
```

### 📦 メソッド抽出 (単一責任原則)

**実行内容**:
- 複雑な計算の分離
- ユーティリティメソッドの抽出
- 責任の明確化

**生成例**:
```javascript
static isValidNumber(n) {
  return typeof n === "number" && !isNaN(n) && isFinite(n);
}

static formatResult(result, precision = 10) {
  return Math.round(result * Math.pow(10, precision)) / Math.pow(10, precision);
}
```

### 📝 変数名改善 (命名規則)

**実行内容**:
- 短縮形から完全形への変更
- 意味のある名前への改善
- 一貫性のある命名

**変更例**:
```javascript
// Before
function calc(n, str, arr) { ... }

// After  
function calculate(number, text, array) { ... }
```

### 📚 ドキュメント追加 (JSDoc)

**実行内容**:
- クラスレベルドキュメント
- メソッドレベルドキュメント
- パラメータ・戻り値の説明

**生成例**:
```javascript
/**
 * Calculator - Utility class for mathematical operations
 * Provides safe and reliable mathematical functions with proper error handling
 */
export class Calculator {
  /**
   * Adds two numbers together
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) { ... }
}
```

### 🛡️ エラーハンドリング強化

**実行内容**:
- 型チェックの追加
- 境界値検証
- カスタム例外クラス

**生成例**:
```javascript
divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  if (!isFinite(a) || !isFinite(b)) {
    throw new RangeError("Arguments must be finite numbers");
  }
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}
```

### ⚡ パフォーマンス最適化

**実行内容**:
- メモ化の実装
- ループ最適化
- 不要な計算の除去

**生成例**:
```javascript
constructor() {
  this._cache = new Map();
}

_getCacheKey(...args) {
  return JSON.stringify(args);
}

expensiveOperation(...args) {
  const key = this._getCacheKey(...args);
  if (this._cache.has(key)) {
    return this._cache.get(key);
  }
  
  const result = this._performCalculation(...args);
  this._cache.set(key, result);
  return result;
}
```

### 📖 可読性向上

**実行内容**:
- マジックナンバーの定数化
- 定数クラスの追加
- コード構造の改善

**生成例**:
```javascript
static get PRECISION() { return 10; }
static get MAX_SAFE_INPUT() { return Number.MAX_SAFE_INTEGER; }
static get MIN_SAFE_INPUT() { return Number.MIN_SAFE_INTEGER; }

// Usage
formatNumber(value) {
  return value.toFixed(Calculator.PRECISION);
}
```

## 📊 リファクタリング実行フロー

### 1. 事前分析
```
🔍 コードベース分析
📊 品質指標測定  
🧪 テスト実行（ベースライン）
📁 バックアップ作成
```

### 2. リファクタリング実行
```
🔧 指定された種別の処理実行
📝 コード変更の適用
🏷️ 適切なコメント・ドキュメント追加
```

### 3. 検証・品質確認
```
🧪 テスト再実行
📊 品質指標再測定
🔍 リント実行
📈 改善度合い分析
```

### 4. レポート・コミット
```
📋 詳細レポート生成
💾 自動コミット・プッシュ
🏷️ 適切なラベル付与
```

## 📋 リファクタリング結果の読み方

### 実行結果例
```markdown
## 🔧 Claude Refactoring - 実行完了

**リファクタリング種別**: 🔄 重複コード削除
**対象ファイル**: src/calculator.js src/stringUtils.js
**総合結果**: ✅ 成功

### 📊 実行結果サマリー
- **リファクタリング前テスト**: ✅ 通過
- **リファクタリング後テスト**: ✅ 通過  
- **コード変更**: ✅ 適用済み

### 📋 詳細レポート
=== REFACTORING ANALYSIS ===
Code Quality Baseline: 2 warnings
Test Coverage: 100%
Complexity Analysis: 5 functions optimized
Refactoring Opportunities: 3 duplications removed
```

## 💡 高度なリファクタリング指示例

### デザインパターン適用
```markdown
タイトル: [REFACTOR] デザインパターン
本文: 
Calculatorクラスに以下のデザインパターンを適用してください：
- Factory Pattern for operation creation
- Strategy Pattern for calculation methods
- Singleton Pattern for configuration
```

### アーキテクチャ改善
```markdown
タイトル: [REFACTOR] アーキテクチャ
本文:
レイヤードアーキテクチャを適用してください：
- Presentation Layer: UI components
- Business Layer: Calculation logic  
- Data Layer: Result storage
```

### 型安全性向上
```markdown
タイトル: [REFACTOR] 型安全性
本文:
TypeScript移行を見据えた型安全性向上：
- 厳密な型チェック実装
- Interface定義の追加
- Generics使用準備
```

### テスト駆動リファクタリング
```markdown
タイトル: [REFACTOR] TDDリファクタ
本文:
TDD原則に従ったリファクタリング：
1. 既存テストの保護
2. 段階的なコード改善
3. 継続的なテスト実行
```

## 🎯 品質指標とベストプラクティス

### リファクタリング前後の指標比較
- **循環的複雑度**: 改善度合いの測定
- **コード重複率**: DRY原則の適用効果
- **テストカバレッジ**: 品質保証の維持
- **保守性指数**: 長期的な改善効果

### 継続的リファクタリング
1. **定期実行**: 週次/月次での自動実行
2. **指標監視**: 品質指標の継続的モニタリング
3. **段階的改善**: 大規模変更の分割実行
4. **チーム共有**: リファクタリング結果の共有・議論

### セーフティネット
- **自動バックアップ**: 変更前の状態保存
- **テスト保護**: 全テスト通過の確認
- **段階的適用**: 小さな変更単位での実行
- **ロールバック対応**: 問題発生時の復旧手順

これで包括的なリファクタリングが自動化されます！