# jacksearchBE/Dockerfile
# --- base image ---
FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --prod

COPY . .

ENV NODE_ENV=production

EXPOSE 5434
CMD ["node", "index.js"]
