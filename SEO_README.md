# SEO y Configuración del Sitio - Bonjour Vallarta

## 🎨 Colores Corporativos

- **Morado Principal**: `#5806a7`
- **Rojo/Tinto**: `#b6084f`

## 🌐 Dominio

- Producción: `https://bonjourvallarta.com.mx/`

## 📱 Assets Configurados

### Favicons y PWA

- **Web**: `/public/web/` contiene todos los iconos para navegadores
  - `favicon.ico` - Favicon estándar
  - `icon-192.png` y `icon-512.png` - Para Android/Chrome
  - `icon-192-maskable.png` y `icon-512-maskable.png` - Para PWA adaptables
  - `apple-touch-icon.png` - Para dispositivos iOS

### Compartir en Redes Sociales

- **Banner**: `/public/banner1.webp` - Imagen que aparecerá cuando compartas el sitio (1200x630px recomendado)

### Mobile Apps (Futuro)

- **Android**: `/public/android/res/` - Iconos para app Android
- **iOS**: `/public/ios/` - Iconos para app iOS

## 🔍 SEO Implementado

### Meta Tags

- ✅ Meta descripción optimizada
- ✅ Keywords relevantes
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Hreflang (ES, EN)
- ✅ Geo tags para Puerto Vallarta

### Archivos Importantes

1. **`/public/robots.txt`** - Permite indexación de motores de búsqueda
2. **`/public/sitemap.xml`** - Mapa del sitio para SEO
3. **`/public/manifest.json`** - Configuración PWA
4. **`/public/.htaccess`** - Configuración Apache (para producción)

## 🚀 Despliegue

### Antes de desplegar:

1. Asegúrate de que el dominio en `index.html` sea el correcto
2. Actualiza las fechas en `sitemap.xml`
3. Verifica que todos los enlaces sean HTTPS

### Después de desplegar:

1. **Google Search Console**:

   - Agrega el sitio en https://search.google.com/search-console
   - Envía el sitemap: `https://bonjourvallarta.com.mx/sitemap.xml`

2. **Google Analytics** (opcional):

   - Crea una propiedad en https://analytics.google.com
   - Agrega el código de seguimiento en `index.html`

3. **Facebook/Instagram**:

   - Verifica que la imagen aparezca correctamente usando: https://developers.facebook.com/tools/debug/
   - Pega tu URL y verifica que aparezca `banner1.webp`

4. **Twitter**:
   - Verifica usando: https://cards-dev.twitter.com/validator

## 📊 Monitoreo

### Herramientas recomendadas:

- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Lighthouse**: Auditoría de rendimiento (en Chrome DevTools)
- **Google Search Console**: Monitoreo de indexación y errores

## 🔒 Seguridad

El archivo `.htaccess` incluye:

- Force HTTPS
- Headers de seguridad
- Compresión de archivos
- Cache de navegador
- Routing para SPA (React Router)

## 📝 Notas

- El `manifest.json` permite que el sitio se pueda "instalar" en dispositivos móviles como PWA
- Los colores del tema (#5806a7) están configurados en `src/index.css` como variables CSS
- El `theme-color` en meta tags coincide con el color corporativo morado
