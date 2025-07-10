# Issue作成後の実行ワークフロー

## ❌ 自動実行はされません
**重要**: Issue作成だけでは自動実行されません。手動での操作が必要です。

## 🔄 実行方法（3つの選択肢）

### 1. 📱 Claude Code Actions（推奨）
最も直接的で効率的な方法

#### 手順:
1. **Issue**を作成
2. **Claude Code Actions**を開く
3. **Issueの指示をコピー**してClaude Code Actionsに貼り付け
4. **実行を確認**

#### 具体例:
```
Issue #1で作成した指示:
「Calculatorクラスにsqrt(n)メソッドを追加してください。
まず失敗するテストを書いて、その後実装してください。
負の数に対してはエラーを投げるようにしてください。」

↓ Claude Code Actionsに貼り付けて実行
```

### 2. 🚀 GitHub Actions手動実行
ブラウザ上でワークフローを実行

#### 手順:
1. **GitHubリポジトリ**→「Actions」タブ
2. **「Claude Code Actions TDD Support」**ワークフローを選択
3. **「Run workflow」**をクリック
4. **アクションタイプ**を選択:
   - `test` - テスト実行
   - `tdd-red` - REDフェーズ
   - `tdd-green` - GREENフェーズ  
   - `tdd-refactor` - REFACTORフェーズ
   - `tdd-cycle` - 完全サイクル
5. **「Run workflow」**で実行

### 3. 💻 ローカル実行
開発環境で直接実行

#### 手順:
1. **リポジトリをクローン**
```bash
git clone https://github.com/YuichiNohara24365fw/tdd-sample.git
cd tdd-sample
npm install
```

2. **TDDコマンド実行**
```bash
npm run tdd:red      # REDフェーズ
npm run tdd:green    # GREENフェーズ  
npm run tdd:refactor # REFACTORフェーズ
npm run tdd:cycle    # 完全サイクル
```

## 🎯 推奨ワークフロー

### Step 1: Issue作成
```markdown
## 📝 Claude Code Actions 指示
Calculatorクラスにfactorial(n)メソッドを追加してください。
TDDサイクルに従って実装してください。
```

### Step 2: Claude Code Actions実行
1. **Claude Code Actions**を開く
2. **Issue内容をコピペ**:
```
Calculatorクラスにfactorial(n)メソッドを追加してください。
TDDサイクルに従って実装してください。
```
3. **実行結果を確認**

### Step 3: 結果をIssueに報告
```markdown
## ✅ 実行結果
Claude Code Actionsで実行完了:
- [x] factorial(n)メソッド実装
- [x] テスト追加（正常ケース、エラーケース）
- [x] 全テスト通過
- [x] リンターエラーなし

## 🔗 関連コミット
- Commit: [ハッシュ値]
- PR: #XX（該当する場合）
```

### Step 4: Issueクローズ
実装完了後、Issueをクローズ

## ⚡ 効率的な実行方法

### A. 即座に実行したい場合
**Claude Code Actions** → 最速実行

### B. チーム共有したい場合  
**GitHub Actions** → 実行ログが残る

### C. 開発中の反復作業
**ローカル実行** → 高速な反復開発

## 🔄 継続的な開発フロー

### 1. Issue Driven Development
```
Issue作成 → Claude Code Actions実行 → 結果確認 → Issue更新
```

### 2. ブランチベース開発
```
Issue作成 → ブランチ作成 → Claude Code Actions実行 → PR作成 → マージ
```

### 3. TDDサイクル管理
```
RED Issue → GREEN Issue → REFACTOR Issue → 次の機能
```

## 📊 実行状況の追跡

### GitHub Project連携
- **To Do**: 新規Issue
- **In Progress**: 実行中  
- **Done**: 実装完了

### ラベル管理
- `executing` - 実行中
- `completed` - 完了
- `blocked` - 阻害要因あり

## 🚨 注意事項

### 自動実行について
- **Issue作成だけでは実行されない**
- **必ず手動操作が必要**
- **セキュリティ上の理由で自動実行は無効**

### Claude Code Actions制限
- **ローカル実行が必要**
- **ネットワーク接続必須**
- **適切な権限設定が必要**

## 💡 ベストプラクティス

### 1. Issue分割
大きなタスクは小さなIssueに分割

### 2. 段階的実行
RED → GREEN → REFACTOR の段階で分けて実行

### 3. 結果の記録
実行結果をIssueコメントに記録

### 4. エラー対処
失敗時は詳細をIssueに報告

## 🎪 実演例

### Issue例:
```markdown
Title: [FEATURE] Calculator.powerメソッド追加

## 📝 Claude Code Actions 指示
Calculatorクラスにpower(base, exponent)メソッドを追加してください。
TDDサイクルに従って実装してください。
```

### 実行:
1. **Claude Code Actions起動**
2. **指示を実行**:
```
Calculatorクラスにpower(base, exponent)メソッドを追加してください。
TDDサイクルに従って実装してください。
```
3. **結果確認**
4. **Issueに報告**

これで効率的なIssue駆動開発ができます！