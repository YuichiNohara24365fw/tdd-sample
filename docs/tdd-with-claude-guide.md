# Claude Code ActionsによるTDD完全実現ガイド

## 🎯 TDD（テスト駆動開発）の概念

### TDDとは
Test-Driven Development（TDD）は、以下のサイクルを繰り返す開発手法です：

1. **🔴 RED**: 失敗するテストを先に書く
2. **🟢 GREEN**: テストを通す最小限のコードを書く  
3. **🔵 REFACTOR**: コードを改善・最適化する

### なぜTDDが重要なのか
- **品質保証**: コードの品質を開発段階から確保
- **設計改善**: テストを先に書くことで良い設計が生まれる
- **回帰防止**: 機能追加時に既存機能の破綻を防ぐ
- **ドキュメント**: テストコードが仕様書の役割を果たす

## 🚀 Claude Code ActionsでのTDD実現方法

### 従来のTDDの課題
- **手動作業が多い**: テスト実行、カバレッジ確認が手動
- **一貫性の欠如**: 開発者によってプロセスが異なる
- **可視性の不足**: チーム全体でのTDD状況が見えない
- **習得難易度**: TDDを学習・実践するハードルが高い

### Claude Code Actionsによる解決
- **完全自動化**: GitHubでの指示だけでTDDサイクルが完了
- **可視化**: 各フェーズの実行結果がGitHub上で確認可能
- **標準化**: 統一されたTDDプロセスをチーム全体で共有
- **学習支援**: 具体的な実行例でTDDを体験的に学習

## 📋 Claude Code ActionsでのTDDワークフロー

### 1. 🔴 REDフェーズ - 失敗するテストの作成

#### GitHub Issue作成
```markdown
タイトル: [CLAUDE] TDD Red フェーズ - 新機能テスト作成
本文:
新しい機能のテストを作成してください：

**機能仕様:**
- Calculator.factorial(n) メソッド
- 正の整数の階乗を計算
- 0の場合は1を返す
- 負の数や非整数の場合はエラー

**テスト要件:**
- 正常ケース: factorial(5) === 120
- 境界値: factorial(0) === 1
- 異常ケース: factorial(-1) でエラー
- 型チェック: factorial("invalid") でエラー

まずテストのみを作成し、実装は行わないでください。
```

#### 自動実行内容
```javascript
// tests/calculator.test.js に追加されるテスト
describe('Calculator factorial method', () => {
  test('should calculate factorial of positive numbers', () => {
    expect(calculator.factorial(5)).toBe(120);
    expect(calculator.factorial(4)).toBe(24);
    expect(calculator.factorial(3)).toBe(6);
  });

  test('should return 1 for factorial of 0', () => {
    expect(calculator.factorial(0)).toBe(1);
  });

  test('should throw error for negative numbers', () => {
    expect(() => calculator.factorial(-1)).toThrow('Factorial is not defined for negative numbers');
  });

  test('should throw error for non-integer inputs', () => {
    expect(() => calculator.factorial(3.5)).toThrow('Input must be a non-negative integer');
    expect(() => calculator.factorial('invalid')).toThrow('Input must be a non-negative integer');
  });
});
```

#### 期待される結果
```
🔴 RED Phase Results:
❌ Tests: 4 failed, 27 passed
❌ New factorial tests failing as expected
✅ Existing tests still passing
```

### 2. 🟢 GREENフェーズ - 最小実装でテストを通す

#### GitHub Issue作成
```markdown
タイトル: [CLAUDE] TDD Green フェーズ - 最小実装
本文:
前のテストが通るように最小限の実装をしてください：

**実装要件:**
- 既存のCalculatorクラスにfactorialメソッドを追加
- 作成したテストがすべて通ること
- 既存機能に影響を与えないこと
- 過度な最適化は行わず、シンプルな実装に留める

実装後、全テストが通ることを確認してください。
```

#### 自動実行内容
```javascript
// src/calculator.js に追加される実装
export class Calculator {
  // 既存メソッド...

  factorial(n) {
    // 入力値検証
    if (typeof n !== 'number') {
      throw new Error('Input must be a non-negative integer');
    }
    if (n < 0) {
      throw new Error('Factorial is not defined for negative numbers');
    }
    if (!Number.isInteger(n)) {
      throw new Error('Input must be a non-negative integer');
    }

    // 最小実装
    if (n === 0 || n === 1) {
      return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
```

#### 期待される結果
```
🟢 GREEN Phase Results:
✅ Tests: 31 passed, 31 total
✅ All factorial tests now passing
✅ Existing functionality preserved
✅ Coverage: 100%
```

### 3. 🔵 REFACTORフェーズ - コード改善

#### GitHub Issue作成
```markdown
タイトル: [CLAUDE] TDD Refactor フェーズ - コード改善
本文:
テストが通る状態でfactorialメソッドを改善してください：

**改善要件:**
- パフォーマンス最適化（大きな数値への対応）
- エラーメッセージの改善
- JSDocドキュメントの追加
- コードの可読性向上
- メモ化の実装（オプション）

**制約:**
- 既存のテストは絶対に破らない
- 新しいテストケースがあれば追加
- リファクタリング前後でテストを実行して確認
```

#### 自動実行内容
```javascript
/**
 * Calculator - Mathematical operations utility class
 * Provides safe and reliable mathematical functions with proper error handling
 */
export class Calculator {
  constructor() {
    this._factorialCache = new Map([[0, 1], [1, 1]]);
  }

  /**
   * Calculates the factorial of a non-negative integer
   * @param {number} n - Non-negative integer
   * @returns {number} Factorial of n
   * @throws {Error} If input is not a non-negative integer
   * @example
   * calculator.factorial(5); // returns 120
   * calculator.factorial(0); // returns 1
   */
  factorial(n) {
    // Enhanced input validation
    if (typeof n !== 'number' || isNaN(n)) {
      throw new Error('Input must be a non-negative integer');
    }
    if (n < 0) {
      throw new Error('Factorial is not defined for negative numbers');
    }
    if (!Number.isInteger(n)) {
      throw new Error('Input must be a non-negative integer');
    }

    // Check cache for performance
    if (this._factorialCache.has(n)) {
      return this._factorialCache.get(n);
    }

    // Optimized calculation with memoization
    let result = 1;
    for (let i = 2; i <= n; i++) {
      if (this._factorialCache.has(i)) {
        result = this._factorialCache.get(i);
        continue;
      }
      result *= i;
      this._factorialCache.set(i, result);
    }

    return result;
  }
}
```

#### 期待される結果
```
🔵 REFACTOR Phase Results:
✅ Tests: 31 passed, 31 total  
✅ Coverage: 100%
✅ ESLint: 0 errors, 0 warnings
✅ Performance: Optimized with memoization
✅ Documentation: JSDoc added
✅ Code Quality: Improved readability
```

## 🔄 完全なTDDサイクルの自動実行

### 一括実行指示
```markdown
タイトル: [CLAUDE] 完全TDDサイクル実行
本文:
以下の新機能を完全なTDDサイクルで実装してください：

**機能:** StringUtils.removeSpaces(str)
- 文字列から全てのスペースを除去
- 先頭・末尾・中間のスペースをすべて削除
- 空文字や null の場合は適切にハンドリング

**TDDサイクル:**
1. 🔴 RED: 失敗するテストを作成
2. 🟢 GREEN: 最小実装でテストを通す  
3. 🔵 REFACTOR: パフォーマンスとコード品質を改善

各フェーズの実行結果を報告してください。
```

## 📊 TDD品質指標の管理

### カバレッジ管理
```markdown
タイトル: [CLAUDE] TDDカバレッジ確認
本文:
現在のテストカバレッジを確認し、100%達成のために必要な改善を実施してください：

**確認項目:**
- ステートメントカバレッジ
- ブランチカバレッジ  
- 関数カバレッジ
- 行カバレッジ

**改善アクション:**
- 不足している部分のテスト追加
- エッジケースのテスト強化
- エラーハンドリングのテスト拡充
```

### 継続的TDD品質チェック
```markdown
タイトル: [CLAUDE] TDD品質レポート
本文:
プロジェクト全体のTDD実践状況をレポートしてください：

**分析項目:**
- テストファーストの実践度
- カバレッジの推移
- リファクタリングの頻度
- コード品質の向上度

**改善提案:**
- TDD実践の課題点
- 推奨する次のアクション
- 品質向上のための具体的ステップ
```

## 🎯 TDD学習とスキル向上

### 段階的TDD学習

#### 初級レベル
```markdown
タイトル: [CLAUDE] TDD基礎学習
本文:
TDD初心者向けに簡単な機能をTDDで実装してください：

**学習目標:**
- TDDサイクルの理解
- テストファーストの体験
- 基本的なテスト書き方の習得

**実装機能:** Calculator.isEven(n)
- 数値が偶数かどうかを判定
- シンプルな機能でTDDサイクルを体験
```

#### 中級レベル
```markdown
タイトル: [CLAUDE] TDD中級練習
本文:
複雑な機能をTDDで実装してください：

**学習目標:**
- 複数のテストケース設計
- エッジケースの洗い出し
- リファクタリング技術の習得

**実装機能:** StringUtils.validateEmail(email)
- メールアドレスの妥当性検証
- 正規表現を使った複雑な判定
```

#### 上級レベル
```markdown
タイトル: [CLAUDE] TDD上級実践
本文:
アーキテクチャを考慮したTDD実践をしてください：

**学習目標:**
- 設計とテストの関係理解
- モックとスタブの活用
- 統合テストとの組み合わせ

**実装機能:** DataProcessor.processAsyncData(data)
- 非同期データ処理
- 外部依存を含む複雑な処理
```

## 🔧 TDD環境の最適化

### Jest設定の最適化
```json
{
  "jest": {
    "testEnvironment": "node",
    "collectCoverageFrom": ["src/**/*.js"],
    "coverageThreshold": {
      "global": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
    },
    "testMatch": ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
    "verbose": true
  }
}
```

### ESLintとTDDの連携
```json
{
  "rules": {
    "jest/expect-expect": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
}
```

## 📈 TDD成果の測定

### KPI指標
- **テストカバレッジ**: 100%維持
- **テスト実行時間**: <1秒を維持
- **バグ発見率**: リリース前に90%以上検出
- **リファクタリング頻度**: 機能追加の30%以上

### 継続的改善
```markdown
タイトル: [CLAUDE] TDD成果分析
本文:
過去1ヶ月のTDD実践成果を分析してください：

**分析項目:**
- 実装速度の向上度
- バグ発生率の変化
- コード品質の改善度
- チーム全体のTDD習熟度

**改善アクション:**
- 次月の改善目標設定
- TDD実践の課題解決
- ツールと環境の最適化提案
```

## 🚀 TDD実現のベストプラクティス

### 1. 効果的なテスト設計
- **GIVEN-WHEN-THEN**: テストの構造を明確にする
- **AAA Pattern**: Arrange, Act, Assert の分離
- **境界値テスト**: エッジケースの網羅的テスト

### 2. 継続的な品質管理
- **毎日のTDDサイクル**: 小さな機能単位での実践
- **定期的なリファクタリング**: 技術的負債の蓄積防止
- **チームレビュー**: TDD実践の知識共有

### 3. ツールの効果的活用
- **自動化**: Claude Code Actionsによる完全自動化
- **可視化**: GitHub上でのTDD状況の透明化
- **学習**: 実行結果からのフィードバック活用

Claude Code Actionsを活用することで、TDDが単なる開発手法から、チーム全体の品質文化として定着し、継続的な改善サイクルが実現されます。