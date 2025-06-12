# Dockerfile (ルート直下)
FROM node:18-alpine
WORKDIR /app

# 依存インストールと起動は docker-compose.yml の command に任せるので、
# ビルド時はただの空イメージにする
COPY . .
