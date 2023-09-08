# node image
FROM node:18-alpine

# 建立app目錄
WORKDIR /usr/src/app

# 複製依賴檔
COPY  package*.json ./

COPY tsconfig*.json ./

# 複製程式碼
COPY . .

# 下載依賴
RUN npm install

# 部屬專案
RUN npm run build

# 啟動服務
CMD [ "node", "dist/main.js" ]