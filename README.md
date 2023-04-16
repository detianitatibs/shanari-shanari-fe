# shanari-shanari-fe

This is a shanari-shanari application for front end

## ディレクトリ構成

```
components/
├─ atoms/
│  ├─ Button/
│  │  ├─ index.tsx
│  │  └─ styles.module.css
│  ├─ Input/
│  │  ├─ index.tsx
│  │  └─ styles.module.css
│  └─ ...
├─ molecules/
│  ├─ LoginForm/
│  │  ├─ index.tsx
│  │  └─ styles.module.css
│  ├─ Header/
│  │  ├─ index.tsx
│  │  └─ styles.module.css
│  └─ ...
├─ organisms/
│  ├─ Navigation/
│  │  ├─ index.tsx
│  │  └─ styles.module.css
│  ├─ Footer/
│  │  ├─ index.tsx
│  │  └─ styles.module.css
│  └─ ...
├─ templates/
│  ├─ DefaultLayout/
│  │  ├─ index.tsx
│  │  └─ styles.module.css
│  ├─ BlogLayout/
│  │  ├─ index.tsx
│  │  └─ styles.module.css
│  └─ ...
└─ pages/
   ├─ index.tsx
   ├─ about.tsx
   ├─ blog/
   │  ├─ index.tsx
   │  ├─ [slug].tsx
   │  └─ ...
   └─ ...

```

## kubectl での起動

- Docker イメージの作成

```
$ docker build . -t shanari-shanari-fe:latest
```

- kubectl の実行

```
$ kubectl apply -f deployment.yaml
$ kubectl apply -f service.yaml
$ kubectl port-forward service/shanari-shanari-fe-service 3000:80
```

- kubectl の停止

```
$ kubectl delete -f service.yaml
$ kubectl delete -f deployment.yaml
```
