#!/usr/bin/env bash
# =============================================================================
# Script de despliegue para aplicación Next.js con Docker
# =============================================================================
# Este script se ejecuta desde la pipeline de Bitbucket para desplegar la
# aplicación en el servidor de producción.
#
# Variables de entorno requeridas:
# - PROJECT_DIR: Directorio del proyecto en el servidor (por defecto: /opt/remerubio)
# - DEPLOY_USER: Usuario SSH para conectar al servidor
# - DEPLOY_HOST: Host del servidor de despliegue
# - SSH_PRIVATE_KEY: Clave privada SSH para autenticación
# =============================================================================

# Configuración de bash para mayor robustez
set -euo pipefail

# =============================================================================
# CONFIGURACIÓN Y PREPARACIÓN
# =============================================================================

# Cambiar al directorio del proyecto (definido por la pipeline de Bitbucket)
PROJECT_DIR="${PROJECT_DIR:-/opt/remerubio}"
echo "[DEPLOY] Cambiando al directorio del proyecto: $PROJECT_DIR"
cd "$PROJECT_DIR"

# =============================================================================
# ACTUALIZACIÓN DEL CÓDIGO
# =============================================================================

echo "[DEPLOY] Actualizando código desde el repositorio..."
echo "[DEPLOY] Obteniendo todos los cambios remotos..."
git fetch --all

echo "[DEPLOY] Reseteando a la rama main (descartando cambios locales)..."
git reset --hard origin/main

echo "[DEPLOY] Código actualizado correctamente"

# =============================================================================
# GESTIÓN DE CONTENEDORES DOCKER
# =============================================================================

echo "[DEPLOY] Deteniendo y eliminando contenedores existentes..."
# -v: Elimina también los volúmenes para limpieza completa
docker compose down

echo "[DEPLOY] Construyendo e iniciando nuevos contenedores..."
# -d: Ejecutar en segundo plano (detached)
# --build: Forzar reconstrucción de imágenes
# --remove-orphans: Eliminar contenedores huérfanos de versiones anteriores
docker compose up -d --build --remove-orphans

# =============================================================================
# LIMPIEZA Y OPTIMIZACIÓN
# =============================================================================

echo "[DEPLOY] Limpiando imágenes Docker no utilizadas..."
# -f: Forzar sin confirmación
# || true: Continuar aunque falle la limpieza (no es crítico)
docker image prune -f || true

# =============================================================================
# VERIFICACIÓN FINAL
# =============================================================================

echo "[DEPLOY] Verificando estado de los contenedores..."
docker compose ps

echo "[DEPLOY] ✅ Despliegue completado exitosamente"
echo "[DEPLOY] La aplicación debería estar disponible en el servidor"