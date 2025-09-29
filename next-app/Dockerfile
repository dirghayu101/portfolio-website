FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Added this because it is a dependency for sharp package which is used for image optimization in nextjs
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
COPY prisma ./prisma/
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN apk add --no-cache openssl
# Prisma specific
# RUN npx prisma generate
COPY prisma ./prisma/
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Change permission so that nextjs user can access the files
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
EXPOSE 2337

# Switch to user nextjs
USER nextjs
ENV PORT=${PORT:-2337}
CMD ["sh", "-c", "npx prisma migrate deploy && node server.js"]
