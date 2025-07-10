# 🤖 Claude Code Actions セットアップガイド（2025年最新版）

## 🚀 公式Claude Code Actions統合システム

このガイドでは、**Anthropic公式のClaude Code Actions**を使用した最新のAI統合システムのセットアップ方法を説明します。Claude Opus 4とSonnet 4の自動切り替え機能を含む、Maxプラン対応の完全版です。

## 🔑 必要な設定

### 1. Claude API キーの取得

1. **Anthropic Console にアクセス**
   - https://console.anthropic.com/ にアクセス
   - アカウントでログイン

2. **API キーを生成**
   - 「API Keys」セクションに移動
   - 「Create Key」をクリック
   - キー名を入力（例：`tdd-sample-github-actions`）
   - 生成されたキーをコピー **（このキーは一度しか表示されません）**

3. **Maxプランの確認**
   - Maxプランでは Claude Opus 4 と Sonnet 4 が利用可能
   - 自動切り替え機能により最適なモデルを自動選択
   - 長時間処理（最大7時間）に対応

### 2. GitHub Secretsの設定

1. **GitHubリポジトリに移動**
   ```
   https://github.com/YuichiNohara24365fw/tdd-sample
   ```

2. **Settings → Secrets and variables → Actions**

3. **新しいシークレットを追加**
   - Name: `CLAUDE_API_KEY`
   - Secret: (上記で取得したClaude APIキー)
   - 「Add secret」をクリック

### 3. ワークフロー権限の設定

1. **Settings → Actions → General**

2. **Workflow permissions**
   - ✅ Read and write permissions を選択
   - ✅ Allow GitHub Actions to create and approve pull requests

## 🏗️ 公式Claude Code Actionsアーキテクチャ

### 統合フロー
```mermaid
graph LR
    A[Issue/PR Comment] --> B[@claude トリガー]
    B --> C[Claude Code Action起動]
    C --> D[Claude Opus 4/Sonnet 4]
    D --> E[自動コード生成]
    E --> F[テスト作成・実行]
    F --> G[PR作成・コミット]
```

### 最新の主要機能

#### 1. **Claude 4 モデル対応**
```yaml
# 最新モデル設定
model: "claude-opus-4-20250514"        # 世界最高レベルのコーディングモデル
fallback_model: "claude-sonnet-4-20250514"  # 高速フォールバック
```

**Claude Opus 4 の特徴:**
- SWE-bench で 72.5% の性能
- 最大7時間の連続作業が可能
- 複雑な長期タスクに対応

**Claude Sonnet 4 の特徴:**
- SWE-bench で 72.7% の性能  
- Sonnet 3.7 からの大幅アップグレード
- より正確な指示理解

#### 2. **自動切り替えシステム**
- Maxプランユーザーは両モデルに完全アクセス
- タスクの複雑さに応じて自動的に最適モデル選択
- フォールバック機能で可用性を保証

#### 3. **統合GitHub機能**
- 公式 `anthropics/claude-code-action@beta` を使用
- PR自動作成・コミット
- Actions結果の自動解析
- コードレビュー機能内蔵

## 🎯 使用方法（2025年最新）

### 🗣️ @claude メンション方式

**最も簡単な方法:** Issue や PR コメントで `@claude` をメンション

#### 1. **自然な指示でクラス作成**
```markdown
@claude ArrayUtilsクラスを作ってください。配列の重複除去、合計、平均値の機能をお願いします。
```

#### 2. **複雑な機能実装**
```markdown
@claude ユーザー認証システムを実装してください：
- JWT認証
- パスワードハッシュ化  
- セッション管理
- セキュリティ対策

テストも含めて完全に実装してください。
```

#### 3. **Issue タイトルでの指示**
```markdown
タイトル: [CLAUDE] ArrayUtils クラス
本文: 任意の詳細説明
```

#### 4. **PR での自動レビュー**
```markdown
@claude このPRをレビューしてください。セキュリティとパフォーマンスの観点で問題がないかチェックしてください。
```

### ✨ 新機能: 長時間作業対応

**Claude Opus 4 の長時間作業機能:**
```markdown
@claude 大規模リファクタリングをお願いします：

1. 現在のアーキテクチャを分析
2. クリーンアーキテクチャに移行
3. すべてのテストを更新
4. ドキュメントも更新

時間がかかっても構いないので、完璧に仕上げてください。
```

### 高度な使用例

#### 1. **アーキテクチャ改善**
```markdown
タイトル: クリーンアーキテクチャ導入
本文:
現在のコードをクリーンアーキテクチャに沿って整理してください：
- レイヤー分離（Presentation, Business, Data）
- 依存性逆転の適用
- テスタビリティの向上
```

#### 2. **パフォーマンス最適化**
```markdown
タイトル: パフォーマンス改善
本文:
アプリケーションのパフォーマンスを分析・改善してください：
- ボトルネックの特定
- アルゴリズムの最適化
- メモリ使用量の削減
- ベンチマークテストの追加
```

## 🔒 セキュリティ考慮事項

### 1. **API キー管理**
- ✅ GitHub Secrets に保存
- ✅ 環境変数として使用
- ❌ コードに直接記述しない
- ❌ ログに出力しない

### 2. **権限制御**
```yaml
permissions:
  contents: write      # コード変更用
  issues: write        # Issue管理用
  pull-requests: write # PR管理用
  # 最小限の権限のみ付与
```

### 3. **実行制限**
- リポジトリオーナーまたは指定ユーザーのみ実行可能
- 過度なAPI使用量の制限
- 実行ログの監視

## 💰 Maxプランでのコスト効率

### Claude 4 モデルの価格効率
- **Claude Opus 4**: $15/$75 per million tokens (高品質・長時間作業)
- **Claude Sonnet 4**: $3/$15 per million tokens (高速・効率的)
- **自動切り替え**: タスクに応じて最適なモデルを自動選択

### Maxプランの利点
- **両モデル利用可能**: Opus 4 + Sonnet 4 完全アクセス
- **長時間処理**: 最大7時間の連続作業
- **優先処理**: レート制限の優遇措置

### 使用量最適化（2025年版）
```yaml
# 最新の設定
model: "claude-opus-4-20250514"        # 複雑なタスク用
fallback_model: "claude-sonnet-4-20250514"  # 効率重視
timeout_minutes: "60"                  # Maxプラン対応の長時間処理
```

## 🚀 2025年版との進化

| 項目 | 従来（3.7世代） | Claude Code Actions（4世代） |
|------|-------------|---------------------------|
| **モデル性能** | Sonnet 3.7 | Opus 4 + Sonnet 4 |
| **SWE-bench** | ~60% | 72.5% - 72.7% |
| **作業時間** | 短時間のみ | 最大7時間連続 |
| **指示方法** | @claude メンション | @claude メンション |
| **統合方式** | カスタムAPI | 公式Action |
| **PR作成** | 手動 | 自動 |
| **長期タスク** | 非対応 | 完全対応 |

## 🛠️ トラブルシューティング

### よくある問題

#### 1. **API キーエラー**
```
Error: Claude API authentication failed
```
**解決方法:**
- GitHub Secrets の `CLAUDE_API_KEY` を確認
- APIキーの有効性をConsoleで確認

#### 2. **トークン制限エラー**
```
Error: Token limit exceeded
```
**解決方法:**
- 指示を簡潔にする
- 大きなファイルは分割して処理

#### 3. **権限エラー**
```
Error: Permission denied
```
**解決方法:**
- Workflow permissions を確認
- トークンの権限設定を確認

### デバッグ方法

#### 1. **実行ログの確認**
- GitHub Actions の実行ログを確認
- Claude API レスポンスをチェック

#### 2. **段階的テスト**
```markdown
タイトル: [CLAUDE] テスト
本文: Hello Claude! 簡単なテストをしてください。
```

## 🎯 2025年版ベストプラクティス

### 1. **Claude 4 世代の効果的活用**
- **Opus 4 活用**: 複雑な設計・大規模リファクタリングに使用
- **Sonnet 4 活用**: 日常的なコード生成・小規模修正に使用
- **長時間作業**: 時間制限を気にせず、完璧な実装を依頼
- **@claude メンション**: シンプルで自然な指示

### 2. **Maxプラン最適化**
- **両モデル併用**: タスクに応じて適切なモデルを意識
- **フォールバック活用**: 自動切り替えを前提とした設計
- **長時間処理**: 7時間機能を活用した大規模タスク
- **優先処理**: レート制限を気にしない開発

### 3. **公式Action活用**
- **PR自動作成**: コードレビューフローの最適化
- **統合レビュー**: Actions結果の自動解析活用
- **継続的改善**: Claude の学習能力を信頼

## 🚀 2025年版次のステップ

1. **🔑 API キー設定**: Anthropic Console でAPIキー取得
2. **⚙️ Workflow 確認**: `.github/workflows/claude-code-actions.yml` を確認
3. **🧪 テスト実行**: Issue #9 に `@claude ArrayUtilsクラスを作ってください` とコメント
4. **📈 本格運用**: 複雑なタスクでClaude Opus 4の真価を体験
5. **🔄 継続最適化**: 実際の使用パターンに応じて設定調整

**🎯 Issue #9 で即座にテスト可能！**
`@claude ArrayUtilsクラスを作ってください。配列の重複除去、合計、平均値を計算する機能をお願いします。`

これで世界最高レベルのAI開発環境が完成です！