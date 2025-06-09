# 🔗 Generador QR - CodigoQRonlineGratis.com

Generador de códigos QR gratuito y profesional desarrollado con Next.js. Crea códigos QR personalizados para URLs, texto, contactos, WiFi y más, completamente gratis y sin registro.

## ✨ Características

- 🎨 **Personalización completa**: Cambia colores de fondo y primer plano
- 📱 **Responsive**: Funciona perfectamente en dispositivos móviles y desktop
- 🚀 **Rápido**: Generación instantánea de códigos QR
- 💾 **Descarga PNG**: Guarda tus códigos QR en alta calidad
- 🌐 **SEO optimizado**: Puntuación SEO de 93/100
- 📖 **Multiidioma**: Completamente en español
- 🔒 **Sin registro**: No requiere cuenta ni datos personales

## 🛠️ Tecnologías

- **Frontend**: Next.js 14.2.18 + React 18.3.1
- **Styling**: Tailwind CSS
- **QR Generation**: qrcode.js
- **Icons**: Lucide React
- **TypeScript**: Para mayor seguridad de tipos

## 🚀 Instalación y Desarrollo

### Requisitos previos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/TU_USUARIO/codigoqronlinegratis.com.git
cd codigoqronlinegratis.com
```

2. **Instalar dependencias**
```bash
npm install --legacy-peer-deps
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 📦 Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter ESLint
```

## 📁 Estructura del proyecto

```
├── app/
│   ├── contacto/           # Página de contacto
│   ├── ejemplos/           # Ejemplos de códigos QR
│   ├── faq/               # Preguntas frecuentes
│   ├── politica-privacidad/ # Política de privacidad
│   ├── terminos-uso/       # Términos de uso
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── public/
│   ├── manifest.json      # Configuración PWA
│   ├── robots.txt         # SEO robots
│   └── sitemap.xml        # Mapa del sitio
└── components/
    └── QRGenerator.tsx    # Componente generador QR
```

## 🎯 Funcionalidades

### Generador QR Principal
- Entrada de texto/URL
- Selector de colores personalizados
- Previsualización en tiempo real
- Descarga en formato PNG

### Páginas adicionales
- **FAQ**: 14 preguntas frecuentes sobre códigos QR
- **Ejemplos**: 8 tipos de códigos QR con casos de uso
- **Contacto**: Formulario de contacto con Formspree
- **Legal**: Política de privacidad y términos de uso

## 🔍 SEO y Performance

- ✅ **Meta tags** optimizados
- ✅ **Schema markup** (WebApplication + FAQPage)
- ✅ **Sitemap XML** con 6 páginas indexadas
- ✅ **Robots.txt** configurado
- ✅ **PWA ready** con manifest.json
- ✅ **Responsive design**
- ✅ **Loading optimizado**

**Puntuación SEO**: 93/100

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio GitHub con Vercel
2. Vercel detectará automáticamente Next.js
3. Deploy automático en cada push

### Netlify
1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `out`

## 📝 Configuración de producción

Antes del despliegue, actualiza:

1. **Dominio**: Cambia las URLs en `layout.tsx` y `sitemap.xml`
2. **Contacto**: Configura tu endpoint de Formspree
3. **Analytics**: Añade Google Analytics si es necesario
4. **Icons**: Genera los iconos PWA (icon-192.png, icon-512.png)

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Generador QR Team**
- Website: [codigoqronlinegratis.com](https://codigoqronlinegratis.com)
- GitHub: [@TU_USUARIO](https://github.com/TU_USUARIO)

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) por el framework
- [Tailwind CSS](https://tailwindcss.com/) por el styling
- [qrcode.js](https://github.com/soldair/node-qrcode) por la generación de QR
- [Lucide](https://lucide.dev/) por los iconos

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!** ⭐ 