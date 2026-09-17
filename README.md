# WebConsulta

Aplicación web React migrada a **Vite** y preparada para desplegar como **Cloudflare Worker** con assets estáticos servidos por Wrangler.

## Stack

- React 19
- Vite
- TailwindCSS
- Cloudflare Workers + Wrangler

## Desarrollo local

```bash
npm install
npm run dev
```

Vite abrirá la app normalmente en `http://localhost:5173`.

Para probar el Worker local con los assets de producción:

```bash
npm run build
npm run cf:dev
```

Wrangler servirá el Worker normalmente en `http://localhost:8787`.

## Validación

```bash
npm run lint
npm test
npm run build
```

## Despliegue

Antes de desplegar, autentica Wrangler o configura `CLOUDFLARE_API_TOKEN` en el entorno.

```bash
npm run deploy
```

El comando ejecuta `vite build` y después `wrangler deploy` usando `wrangler.jsonc`.

### Despliegue automático con GitHub Actions

El workflow `.github/workflows/deploy.yaml` despliega automáticamente cada cambio enviado a `main`. También se puede ejecutar manualmente desde la pestaña **Actions** de GitHub.

GitHub Actions utiliza un runner temporal de GitHub; no es necesario mantener una máquina externa ni un runner `self-hosted`.

En el environment `prd` de GitHub, configura estos secretos:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

`CLOUDFLARE_API_TOKEN` debe ser un token creado en [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens), con permisos para desplegar Workers (`Workers Scripts: Edit`) y limitado a la cuenta correspondiente.

El `CLOUDFLARE_ACCOUNT_ID` de este proyecto es:

```text
d6f2de6988c3bf99ef0f866ebc9ea364
```

No guardes tokens en el repositorio ni publiques el contenido de la configuración local de Wrangler. Para comprobar la cuenta local autenticada:

```bash
npx wrangler whoami
```

## Internacionalización

Los textos están en `i18n/locales/*.json`. Las rutas localizadas se resuelven en `src/lib/i18n-config.js` y `src/lib/routes.js`.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
