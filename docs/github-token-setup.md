# 🔧 GitHub Token権限エラー解決ガイド

## エラー内容
```
Failed to setup GitHub token: Error: User does not have write access on this repository
```

このエラーは、Claude Code Actionsがリポジトリへの書き込み権限を持っていない場合に発生します。

## 解決方法

### 方法1: GITHUB_TOKEN を明示的に指定（実施済み）
```yaml
github_token: ${{ secrets.GITHUB_TOKEN }}
```

### 方法2: Personal Access Token (PAT) を使用（推奨）

#### 1. Personal Access Token を作成

1. GitHubの右上のプロフィールアイコンをクリック
2. **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
3. **Generate new token** → **Generate new token (classic)** をクリック
4. 以下の設定を行う：
   - **Note**: `Claude Code Actions for TDD Sample`
   - **Expiration**: 90 days（またはお好みの期間）
   - **Select scopes**:
     - ✅ repo（すべて）
     - ✅ workflow
     - ✅ write:packages
     - ✅ read:org（organization の場合）

5. **Generate token** をクリック
6. **トークンをコピー**（一度しか表示されません）

#### 2. GitHub Secrets に追加

1. リポジトリの **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** をクリック
3. 以下を入力：
   - **Name**: `CLAUDE_PAT`
   - **Secret**: (上記でコピーしたトークン)
4. **Add secret** をクリック

#### 3. ワークフローを更新

PAT版のワークフロー（`claude-code-actions-with-pat.yml`）を使用：
```yaml
- name: Checkout code
  uses: actions/checkout@v4
  with:
    token: ${{ secrets.CLAUDE_PAT }}

- name: Run Claude Code Action
  uses: anthropics/claude-code-action@beta
  with:
    github_token: ${{ secrets.CLAUDE_PAT }}
```

### 方法3: リポジトリ設定の確認

#### Actions権限の確認
1. **Settings** → **Actions** → **General**
2. **Actions permissions**:
   - ✅ Allow all actions and reusable workflows
3. **Workflow permissions**:
   - ✅ Read and write permissions
   - ✅ Allow GitHub Actions to create and approve pull requests

#### ブランチ保護ルールの確認
1. **Settings** → **Branches**
2. main ブランチの保護ルールがある場合：
   - ✅ Allow force pushes
   - ✅ Allow deletions
   - または、GitHub Actions を例外として追加

### 方法4: Organization設定の確認（該当する場合）

Organization のリポジトリの場合：
1. Organization の **Settings** → **Actions** → **General**
2. **Workflow permissions**:
   - ✅ Read and write permissions
   - ✅ Allow GitHub Actions to create and approve pull requests

## トラブルシューティング

### デバッグ用ワークフロー
問題が続く場合、デバッグ情報を出力：

```yaml
- name: Debug permissions
  run: |
    echo "Actor: ${{ github.actor }}"
    echo "Repository: ${{ github.repository }}"
    echo "Event: ${{ github.event_name }}"
    echo "Token permissions:"
    curl -H "Authorization: token ${{ secrets.GITHUB_TOKEN }}" \
         https://api.github.com/repos/${{ github.repository }} \
         | jq '.permissions'
```

### よくある原因

1. **Fork されたリポジトリ**: Fork では GITHUB_TOKEN の権限が制限される
2. **Organization の制限**: Organization ポリシーで Actions が制限されている
3. **ブランチ保護**: main ブランチへの直接プッシュが禁止されている
4. **トークンの有効期限**: PAT の有効期限が切れている

## 推奨される解決手順

1. まず、標準版ワークフロー（`claude-code-actions.yml`）でテスト
2. エラーが続く場合、PAT版（`claude-code-actions-with-pat.yml`）を使用
3. それでも解決しない場合、リポジトリとOrganization の設定を確認

## セキュリティ注意事項

- Personal Access Token は強力な権限を持つため、慎重に管理
- 定期的にトークンをローテーション
- 不要になったトークンは削除
- トークンをコードにハードコードしない