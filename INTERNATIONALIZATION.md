# Internacionalización (i18n) - Reme Rubio

Este proyecto incluye soporte completo para internacionalización con detección automática del idioma del navegador y un selector de idioma manual.

## Idiomas Soportados

- **Català** (ca) - Idioma por defecto
- **Español** (es)
- **English** (en)

## Características

### 1. Detección Automática del Idioma del Navegador
- El sistema detecta automáticamente el idioma preferido del navegador del usuario
- Si el idioma detectado no está soportado, se usa el catalán como fallback
- La preferencia se guarda en localStorage para futuras visitas

### 2. Selector de Idioma Manual
- Menú desplegable en la esquina superior derecha
- Permite cambiar el idioma en cualquier momento
- La selección se persiste en localStorage
- Incluye banderas y nombres nativos de cada idioma

### 3. Traducciones Dinámicas
- Todas las traducciones se cargan dinámicamente
- Estado de carga con skeleton loaders
- Fallback a la clave de traducción si no se encuentra la traducción

## Estructura de Archivos

```
i18n/
  locales/
    ca.json    # Traducciones en catalán
    es.json    # Traducciones en español
    en.json    # Traducciones en inglés

src/
  hooks/
    useTranslations.js    # Hook principal para traducciones
  components/
    LanguageSelector.js   # Componente del selector de idioma
    HeaderContent.js      # Contenido del header con traducciones
    FooterContent.js      # Contenido del footer con traducciones
    NavMenu.js           # Menú de navegación con traducciones
```

## Uso del Hook useTranslations

```javascript
import { useTranslations } from '@/hooks/useTranslations';

function MyComponent() {
  const { t, locale, changeLanguage, isLoading } = useTranslations();

  return (
    <div>
      <h1>{t('header.title')}</h1>
      <p>{t('header.subtitle')}</p>
      <button onClick={() => changeLanguage('es')}>
        Cambiar a Español
      </button>
    </div>
  );
}
```

## Agregar Nuevas Traducciones

1. Agregar la clave en todos los archivos de idioma (`i18n/locales/*.json`)
2. Usar la función `t()` en los componentes para obtener la traducción

### Ejemplo:

**ca.json:**
```json
{
  "newSection": {
    "title": "Nou Títol",
    "description": "Nova descripció"
  }
}
```

**es.json:**
```json
{
  "newSection": {
    "title": "Nuevo Título",
    "description": "Nueva descripción"
  }
}
```

**Uso en componente:**
```javascript
<h2>{t('newSection.title')}</h2>
<p>{t('newSection.description')}</p>
```

## Configuración Técnica

- **Provider**: `TranslationsProvider` envuelve toda la aplicación
- **Context**: React Context para compartir el estado de traducciones
- **Persistence**: localStorage para mantener la preferencia del usuario
- **Loading**: Estados de carga con skeleton loaders
- **Fallback**: Sistema robusto de fallback a catalán en caso de error

## Detección de Idioma del Navegador

El sistema mapea los códigos de idioma del navegador de la siguiente manera:

- `ca-*` → Catalán
- `es-*` → Español
- `en-*` → Inglés
- Cualquier otro → Catalán (fallback)

## Consideraciones de Rendimiento

- Las traducciones se cargan de forma lazy (solo cuando se necesitan)
- El estado se mantiene en memoria una vez cargado
- No hay re-renderizados innecesarios gracias al Context API
- Skeleton loaders mejoran la percepción de rendimiento
