# 🔑 Anthropic API Key セットアップガイド（2025年7月最新版）

## 重要：Max プランでも API 利用は別料金

**Max プラン（$100/$200/月）に加入していても、API 利用には別途料金が必要です。** Claude.ai のサブスクリプションプランと API 利用は完全に別のサービスとして扱われます。

## 📋 API キー取得手順

### 1. Anthropic Console にアクセス
1. [console.anthropic.com](https://console.anthropic.com/) にアクセス
2. アカウントを作成（既存の Claude.ai アカウントとは別）

### 2. API キーの作成
1. ダッシュボードの左下の **Key アイコン** をクリック
2. **API Keys** オプションを選択
3. **Create Key** ボタンをクリック
4. キーに名前を付ける（例：`github-actions-tdd`）
5. **Create Key** をクリックして生成

⚠️ **重要**: 生成されたキーは**一度しか表示されません**。必ず安全な場所にコピー・保存してください。

### 3. 料金プランの選択

デフォルトでは **Evaluation プラン**（評価用）に設定されています。実際の開発には以下のプランを選択：

- **Build プラン**（推奨）: 開発・テスト用
  - 従量課金制（使った分だけ支払い）
  - プリペイドクレジットシステム
  
- **Scale プラン**: エンタープライズ向け
  - 営業チームとの相談が必要

**Select Plan** ボタンをクリックして **Build プラン** を選択し、**Continue** をクリック。

### 4. 支払い設定
1. クレジットカード情報を入力
2. 初期クレジットを購入（最小 $5〜）
3. 自動チャージの設定（オプション）

## 💰 API 料金体系（2025年7月）

### Claude 4 モデル料金
- **Claude Opus 4**: $15/$75 per million tokens（入力/出力）
- **Claude Sonnet 4**: $3/$15 per million tokens（入力/出力）

### 料金計算例
```
1回のリクエスト:
- 入力: 1,000 tokens
- 出力: 500 tokens

Opus 4 の場合:
- 入力コスト: 1,000 × $15 / 1,000,000 = $0.015
- 出力コスト: 500 × $75 / 1,000,000 = $0.0375
- 合計: $0.0525（約5.25セント）
```

## 🔧 GitHub Actions での設定

### 1. GitHub Secrets に API キーを追加

1. リポジトリの **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** をクリック
3. 以下を入力：
   - **Name**: `ANTHROPIC_API_KEY`
   - **Secret**: (console.anthropic.com で取得したAPIキー)
4. **Add secret** をクリック

### 2. ワークフローでの使用

```yaml
- uses: anthropics/claude-code-action@beta
  with:
    anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
    github_token: ${{ secrets.GITHUB_TOKEN }}
    model: "claude-opus-4-20250514"
```

## 🛡️ セキュリティベストプラクティス

1. **API キーの保護**
   - パスワードマネージャーで管理
   - コードに直接記述しない
   - 公開リポジトリにコミットしない

2. **使用量の監視**
   - Console の **Usage and Cost** タブで定期的に確認
   - 予期しない使用量増加にアラートを設定

3. **キーのローテーション**
   - 定期的にキーを更新（3-6ヶ月ごと）
   - 不要になったキーは削除

4. **アクセス制限**
   - 必要最小限のチームメンバーのみアクセス許可
   - API キーごとに用途を明確化

## ❓ よくある質問

### Q: Max プランなのに API 利用料が別途必要なのはなぜ？
A: Claude.ai のチャット UI と API は別サービスです。Max プランは Claude.ai とClaude Code（ターミナル版）の利用に適用され、API 利用は開発者向けの別サービスとして課金されます。

### Q: API クレジットの有効期限は？
A: プリペイドクレジットに有効期限はありませんが、アカウントが長期間非アクティブの場合は注意が必要です。

### Q: 無料枠はある？
A: 新規アカウントには少額の無料クレジットが付与される場合がありますが、基本的に従量課金制です。

## 📚 参考リンク

- [Anthropic Console](https://console.anthropic.com/)
- [API ドキュメント](https://docs.anthropic.com/)
- [料金詳細](https://www.anthropic.com/api#pricing)
- [サポート](https://support.anthropic.com/)