# README.md

## 1. 提案概要

この提案では、Unity製Androidゲームアプリに対するチート対策の実装について詳細を説明します。具体的には、Google Play Developer APIによる課金検証とGoogle Play Integrity APIの導入を含む2つの重要な対策を実施する予定です。

## 2. 技術選定と理由

### 課金検証
- **Google Play Developer API**: このAPIを使用することで、クライアントから受け取った`purchaseToken`の正当性をサーバーサイドで検証することが可能になります。これにより、リプレイ攻撃や不正な課金行為を防ぐことができます。

### デバイス整合性チェック
- **Google Play Integrity API**: このAPIを使用することで、アプリ起動時や重要操作時にデバイスの整合性を検証できます。改ざんAPKや非正規インストール、root化端末などの不正な状況を検知し、適切に対応することが可能です。

## 3. アーキテクチャ図

```mermaid
graph TD
    A[Unity Client] --> B[Google Play Developer API]
    B --> C[Server (b4a)]
    C --> D[Item Grant Logic]
    A --> E[Google Play Integrity API]
    E --> F[Server (b4a)]
    F --> G[Integrity Check Logic]
```

## 4. 開発アプローチ

### 課金検証
1. Unityクライアントから`purchaseToken`を取得し、サーバーに送信します。
2. サーバーはGoogle Play Developer APIに接続し、`purchaseToken`の正当性を検証します。
3. 検証が成功した場合のみ、アイテムを付与するロジックを実行します。

### デバイス整合性チェック
1. Unityクライアントが起動時や重要操作時にGoogle Play Integrity APIに接続し、Integrity Tokenを取得します。
2. サーバーはこのTokenを検証し、デバイスの整合性を評価します。
3. 不正な状況が検知された場合、適切に対応処理（拒否やフラグ付与）を行います。

## 5. 本提案の強み

1. **過去の実績**: 以前に複数のUnityプロジェクトでGoogle Play BillingとIntegrity APIを導入し、セキュリティ対策を実装した経験があります。これらの案件では、不正行為の防止やアプリの安定性向上に成功しました。

2. **技術的スキル**: UnityとC#を使用したAndroidアプリ開発、サーバーサイド開発（b4a）に精通しています。また、セキュリティ対策の実装にも自信を持っています。

3. **効率的な開発アプローチ**: 開発プロセスを明確化し、品質管理を強化することで、プロジェクトのスケジュールと予算に沿った成果物を提供することが可能です。