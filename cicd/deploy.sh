# cicd/deploy.sh
#!/usr/bin/env bash
set -euo pipefail

# Ir a la raíz del repo (por si se llama desde otro directorio)
cd "$(git rev-parse --show-toplevel)"

echo "[deploy] docker compose down"
docker compose down

echo "[deploy] docker compose up -d --build --remove-orphans"
docker compose up -d --build --remove-orphans

echo "[deploy] limpieza de imágenes antiguas"
docker image prune -f || true

echo "[deploy] OK"