#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="${PROJECT_DIR:-/opt/remerubio}"
echo "[DEPLOY] Cambiando al directorio del proyecto: $PROJECT_DIR"
cd "$PROJECT_DIR"

echo "[DEPLOY] Instalando dependencias limpias..."
npm ci

echo "[DEPLOY] Construyendo Vite..."
npm run build

echo "[DEPLOY] Desplegando Cloudflare Worker con Wrangler..."
npx wrangler deploy

echo "[DEPLOY] Despliegue completado"
