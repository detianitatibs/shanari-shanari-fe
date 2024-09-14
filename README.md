# しゃなりしゃなり フロントエンドアプリケーション

しゃなりしゃなりのフロントエンドアプリケーションを構築/管理する

# ローカル開発環境

## npm コマンドでの起動

`package.json`があるディレクトリで実行する

```
$ npm run dev
```

## StoryBook の起動

```
$ npm run storybook
```

## Docker イメージ作成方法

Dockerfile があるディレクトリで以下のコマンドよりイメージを作成する

```
$ docker build -t shanari-shanari-fe:v0.0.1 .
```

## Docker で実行確認

イメージ作成後、以下のコマンドより実行する  
実行後、ブラウザから"localhost:3000"でアクセスできる

```
$ docker run -d -p 3000:3000 --name ssfe shanari-shanari-fe
```

動作確認後、以下のコマンドで停止、削除すること

```
$ docker stop ssfe
$ docker rm ssfe
```

## Jest による単体テストの実施

```
$ npm run test
```
