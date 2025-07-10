# GitHub上でClaude Code Actionsを動作させる方法

## 🚨 現在の状況
**現在**: ローカル実行のみ
**目標**: GitHub上で直接Claude Code Actionsを実行

## 🔧 必要なセットアップ

### 1. Claude Code Actions GitHub App インストール

#### Step 1: GitHub Appをインストール
```
1. https://github.com/anthropics/claude-code-action にアクセス
2. "Install GitHub App" をクリック
3. リポジトリを選択してインストール
4. 権限を許可
```

#### Step 2: 設定確認
インストール後、以下を確認：
- ✅ Repositoryアクセス権限
- ✅ Issues権限（読み取り・書き込み）
- ✅ Pull requests権限
- ✅ Contents権限（コード読み取り・書き込み）

### 2. リポジトリ設定

#### 必要な権限設定
```yaml
# .github/workflows/ 内のワークフローで以下が必要
permissions:
  contents: write
  issues: write
  pull-requests: write
  actions: read
```

#### Claude Code Actions用のワークフロー
現在のワークフローを以下に更新：

```yaml
name: Claude Code Actions Integration
on:
  issues:
    types: [opened, edited]
  issue_comment:
    types: [created, edited]

jobs:
  claude-trigger:
    if: contains(github.event.issue.labels.*.name, 'claude-actions') || contains(github.event.issue.title, '[CLAUDE]')
    runs-on: ubuntu-latest
    permissions:
      contents: write
      issues: write
      pull-requests: write
    
    steps:
    - name: Trigger Claude Code Actions
      uses: anthropics/claude-code-action@v1
      with:
        github-token: ${{ secrets.GITHUB_TOKEN }}
        anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
```

### 3. シークレット設定

#### GitHub Secrets に追加必要
```
Repository Settings → Secrets and variables → Actions

必要なシークレット:
- ANTHROPIC_API_KEY: Claude APIキー
- GITHUB_TOKEN: 自動生成（通常不要）
```

## 🎯 GitHub上での実行方法

### 方法1: Issue作成でトリガー
```markdown
タイトル: [CLAUDE] 新機能実装
ラベル: claude-actions

本文:
## 📝 Claude Code Actions 指示
Calculatorクラスに平方根計算機能を追加してください。
TDDサイクルに従って実装してください。
```

### 方法2: コメントでトリガー
既存Issueにコメント:
```markdown
@claude-code-actions 
全テストを実行して結果を報告してください
```

### 方法3: 手動GitHub Actions実行
```
1. Actions タブ
2. "Claude Code Actions Integration" 選択
3. "Run workflow" 実行
4. パラメータ指定して実行
```

## 🔄 自動実行ワークフロー

### 現在のワークフローを更新

#### 1. Issue自動検知
```yaml
on:
  issues:
    types: [opened, labeled]
    # [CLAUDE]タイトルまたはclaude-actionsラベルで自動実行
```

#### 2. Claude実行結果の自動コメント
```yaml
- name: Post results to Issue
  uses: actions/github-script@v6
  with:
    script: |
      github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: '## ✅ Claude Code Actions 実行完了\n\n' + results
      })
```

## 📋 セットアップチェックリスト

### 事前準備
- [ ] Claude Code Actions GitHub Appインストール
- [ ] Anthropic APIキー取得
- [ ] リポジトリ権限設定
- [ ] GitHub Secretsにキー追加

### ワークフロー設定
- [ ] Issue自動検知ワークフロー作成
- [ ] Claude実行トリガー設定
- [ ] 結果自動コメント機能
- [ ] エラーハンドリング設定

### テスト実行
- [ ] [CLAUDE]タグ付きIssue作成
- [ ] 自動実行確認
- [ ] 結果コメント確認
- [ ] エラー時の動作確認

## 🚨 制限事項と注意点

### 1. APIキー管理
- **絶対に公開しない**: GitHub Secretsを使用
- **アクセス権限**: 必要最小限に設定
- **ローテーション**: 定期的にキー更新

### 2. 実行制限
- **レート制限**: Claude API呼び出し回数制限
- **リポジトリサイズ**: 大規模リポジトリでは制限あり
- **同時実行**: 複数Issue同時処理に制限

### 3. セキュリティ
- **コード実行**: 信頼できる指示のみ
- **権限管理**: Write権限の適切な管理
- **ログ監視**: 実行ログの定期確認

## 🔧 トラブルシューティング

### よくある問題

#### 1. GitHub App未インストール
```
エラー: "Claude Code Actions not responding"
解決: GitHub Appを正しくインストール
```

#### 2. APIキー未設定
```
エラー: "Authentication failed"
解決: ANTHROPIC_API_KEYをSecrets追加
```

#### 3. 権限不足
```
エラー: "Permission denied"
解決: リポジトリ権限とワークフロー権限確認
```

#### 4. ワークフロートリガー失敗
```
エラー: "Workflow not triggered"
解決: Issueタイトルまたはラベル確認
```

## 🎯 推奨セットアップ手順

### Step 1: 基本セットアップ
1. Claude Code Actions GitHub Appインストール
2. Anthropic APIキー取得・設定
3. リポジトリ権限確認

### Step 2: ワークフロー作成
1. Issue自動検知ワークフロー作成
2. Claude実行・結果投稿機能実装
3. エラーハンドリング追加

### Step 3: テスト実行
1. テスト用Issue作成
2. 自動実行確認
3. 結果確認・調整

### Step 4: 運用開始
1. チームメンバーへの説明
2. 使用ガイドライン作成
3. 定期的な動作確認

## 📚 参考リンク

- [Claude Code Actions公式](https://github.com/anthropics/claude-code-action)
- [GitHub Apps設定](https://docs.github.com/en/developers/apps)
- [Anthropic API](https://docs.anthropic.com)
- [GitHub Actions設定](https://docs.github.com/en/actions)