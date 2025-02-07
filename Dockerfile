# Build stage
FROM node:23-alpine as build

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY . .

RUN corepack enable pnpm && pnpm i --frozen-lockfile

RUN pnpm build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
