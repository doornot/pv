# 基于最新的 node 镜像
FROM node:latest
# 复制当前目录下所有文件到目标镜像 /app/ 目录下
COPY . /app/
# 修改工作目录
WORKDIR /app/
# yarn 一下，安装依赖
RUN ["yarn"]
# 启动 node server
ENTRYPOINT ["node", "index.js"]
