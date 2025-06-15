# ベースイメージ
FROM node:18

# 作業ディレクトリ作成
WORKDIR /app

# package.jsonとlockファイルをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリ本体をコピー
COPY . .

# サーバー起動（例：index.jsがエントリーポイントなら）
CMD ["node", "src/index.js"]

# ポート番号（必要なら開放）
EXPOSE 3000

