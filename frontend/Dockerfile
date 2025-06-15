# ベースイメージ
FROM node:18

# 作業ディレクトリ
WORKDIR /app

# package.json と lock ファイルをコピー
COPY package*.json ./

# 依存インストール
RUN npm install

# 残りのファイルもコピー
COPY . .

# 本番ビルド
RUN npm run build

# 最終ステージ（軽量サーバーに移動）
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
