# 🔧 Claude GitHub App 手動セットアップガイド

## `/install-github-app` が失敗した場合の対処法

`claude` コマンドで `/install-github-app` が失敗した場合、以下の手順で手動設定を行います。

## 📋 手動設定手順

### 1. Claude GitHub App のインストール

1. **Claude GitHub App ページにアクセス**
   ```
   https://github.com/apps/claude
   ```

2. **Install または Configure をクリック**
   - 新規インストールの場合：**"Install"**
   - 既存設定の場合：**"Configure"**

3. **リポジトリを選択**
   - `YuichiNohara24365fw/tdd-sample` を選択
   - または "All repositories" を選択（推奨しない）

4. **権限を確認・許可**
   - Repository permissions:
     - ✅ Actions (read)
     - ✅ Contents (write)
     - ✅ Issues (write)
     - ✅ Pull requests (write)
     - ✅ Metadata (read)

### 2. 認証トークンの設定

#### 方法A: CLAUDE_CODE_OAUTH_TOKEN（推奨）

**Pro/Max プランユーザー向けの統合認証**

1. **ローカルでOAuthトークンを生成**
   ```bash
   claude setup-token
   ```

2. **生成されたトークンをコピー**
   - 画面に表示されるトークン文字列をコピー
   - 一度しか表示されないので注意

3. **GitHub Secrets に追加**
   - リポジトリ → Settings → Secrets and variables → Actions
   - **New repository secret** をクリック
   - Name: `CLAUDE_CODE_OAUTH_TOKEN`
   - Secret: コピーしたトークン
   - **Add secret** をクリック

#### 方法B: ANTHROPIC_API_KEY（代替手段）

**API キーを直接使用する方法**

1. **console.anthropic.com でAPIキーを取得**
   - 詳細は `docs/anthropic-api-key-setup-2025.md` を参照

2. **GitHub Secrets に追加**
   - Name: `ANTHROPIC_API_KEY`
   - Secret: 取得したAPIキー

### 3. ワークフロー設定の確認

現在のワークフローファイル（`.github/workflows/claude-code-actions.yml`）は既に正しく設定されています：

```yaml
- uses: anthropics/claude-code-action@beta
  with:
    anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
    github_token: ${{ secrets.GITHUB_TOKEN }}
    model: "claude-opus-4-20250514"
    fallback_model: "claude-sonnet-4-20250514"
```

#### OAuth方式を使用する場合の調整

`CLAUDE_CODE_OAUTH_TOKEN` を使用する場合は、以下に変更：

```yaml
- uses: anthropics/claude-code-action@beta
  with:
    claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
    github_token: ${{ secrets.GITHUB_TOKEN }}
    model: "claude-opus-4-20250514"
    fallback_model: "claude-sonnet-4-20250514"
```

## 🔍 設定確認方法

### 1. GitHub App のインストール確認

1. リポジトリ → Settings → Integrations
2. "Claude" アプリが表示されていることを確認
3. Permissions を確認

### 2. Secrets の確認

1. リポジトリ → Settings → Secrets and variables → Actions
2. 以下のいずれかが設定されていることを確認：
   - `CLAUDE_CODE_OAUTH_TOKEN` （推奨）
   - `ANTHROPIC_API_KEY`

### 3. 動作テスト

1. **Issue #9** にアクセス
2. コメントで `@claude` をメンション
   ```
   @claude ArrayUtilsクラスを作ってください
   ```
3. GitHub Actions が起動することを確認

## ❓ トラブルシューティング

### エラー: "Environment variable validation failed"

**原因**: 必要なSecretsが設定されていない

**解決**: 以下を確認
- `ANTHROPIC_API_KEY` または `CLAUDE_CODE_OAUTH_TOKEN` が正しく設定されているか
- Secretの名前にタイプミスがないか

### エラー: "Permission denied"

**原因**: GitHub App の権限が不足

**解決**: 
1. https://github.com/apps/claude にアクセス
2. Configure をクリック
3. 必要な権限を再確認・許可

### エラー: "Failed to access repository"

**原因**: GitHub App がリポジトリにインストールされていない

**解決**:
1. GitHub App を正しくインストール
2. 対象リポジトリが選択されているか確認

## 💡 推奨設定

### Max プランユーザー

1. **`CLAUDE_CODE_OAUTH_TOKEN` を使用**（統合認証）
2. **Claude 4 Opus モデル**を活用
3. **長時間処理**（timeout: 60分）を活用

### Build プランユーザー

1. **`ANTHROPIC_API_KEY` を使用**
2. **従量課金制**でコスト管理
3. **必要に応じてモデル選択**

## 📚 関連ドキュメント

- [Anthropic API Key セットアップ](anthropic-api-key-setup-2025.md)
- [Claude Code Actions 公式ドキュメント](https://github.com/anthropics/claude-code-action)
- [GitHub App 設定](https://github.com/apps/claude)