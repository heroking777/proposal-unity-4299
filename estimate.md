| タスク | 説明 | 時間（h） | WHY |
| --- | --- | --- | --- |
| Google Play Developer APIによる課金検証の実装 | purchaseTokenをサーバーサイドでGoogle Play Developer APIに問い合わせ、購入の正当性を検証する処理の実装 | 15 | クライアントから受け取ったpurchaseTokenをサーバーサイドで検証するため |
| 同一トークンの使い回し対策の実装 | 同一トークンの使い回し（リプレイ攻撃）対策の実装 | 10 | 不正行為防止のため |
| Google Play Integrity APIの導入 | アプリ起動時・重要操作時にIntegrity Tokenを取得しサーバーで検証する処理の実装 | 20 | 改ざんAPKや非正規インストール、root化端末の検知と対応処理（拒否 or フラグ付与）のため |
| 総計 | - | 45 | - |

**前提事項:**
- Unityを使用したAndroidアプリ開発経験がある
- サーバーサイド開発経験がある（サーバー側はb4aを使用）
- Google Play Billing（Unity IAP）/ Gに精通している

**合計時間:** 45h