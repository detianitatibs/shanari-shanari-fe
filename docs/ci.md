# CI

`GitHub Actions`を使ってコンテナイメージをビルドし、GCP の`Artifact Registry`へプッシュする

![](img/ci.drawio.svg)

## 構成

GitHub Actions から GCP にアクセスするために、Workload Identity 連携を利用している。(\*1)

## 参考

\*1 [Workload Identity 連携を利用して GitHub Actions を動かす](https://zenn.dev/cloud_ace/articles/7fe428ac4f25c8)
