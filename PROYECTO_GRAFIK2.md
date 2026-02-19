# GRAFIK2® - Sitio Web Pixel-Perfect

## 📋 Descripción
Réplica pixel-perfect del sitio web GRAFIK2®, un sitio de diseño gráfico profesional con efecto glassmorphism y estética dark teal moderna.

## ✨ Características Implementadas

### 🎨 Diseño Visual
- **Glassmorphism Effect**: Elementos translúcidos con backdrop-blur
- **Dark Teal Background**: Gradiente oscuro verde/teal con textura de ruido
- **Color Principal**: Teal (#14b8a6) para acentos y CTAs
- **Typography**: Inter font family, sans moderna
- **Bordes Redondeados**: Radios grandes (16-24px) en todos los componentes
- **Shadows**: Sombras suaves y difusas para profundidad

### 📱 Secciones Implementadas

1. **Navbar**
   - Barra translúcida con efecto glassmorphism
   - Logo GRAFIK2® con icono de ubicación
   - Menú de navegación centrado
   - Botón CTA "CONTÁCTENOS" destacado
   - Fixed position con animaciones hover

2. **Hero Section**
   - Banner de oferta especial con countdown funcional
   - Título principal con palabra "único" en teal
   - Descripción de servicios
   - Dos botones CTA: "Comprar ahora" y "Ver portafolio"
   - Grid de 3 cards: Videos, Diseños, Proyectos (+500)

3. **Métricas**
   - 3 cards con estadísticas:
     - 500+ Proyectos terminados
     - 250+ Clientes satisfechos
     - 8+ Años de experiencia
   - Iconos lucide-react (TrendingUp, Users, Award)

4. **Planes**
   - Sistema de tabs: Diseño Gráfico, Creación de Videos, Combos
   - 3 pricing cards: Básico ($49), Profesional ($99), Empresarial ($199)
   - Plan "Profesional" destacado con badge "Popular"
   - Checkmarks para features incluidas
   - Botones "Elegir plan"

5. **Pedir**
   - Tabs con iconos: Flyers, Video, Logo
   - 3 product cards con precios
   - Botón "Ir a Pedir" al final
   - Descripciones de cada producto

6. **Arquitectura**
   - 2 cards: Planos y Renders
   - Chips/badges con características (Planos 2D, Renders 3D, etc.)
   - Botones "Ver detalles"
   - Iconos Building2 y Gem de lucide-react

7. **Portafolio**
   - Grid 2x4 de proyectos (8 items)
   - Efecto hover en cada card
   - Botón Instagram con gradiente rosa/morado

8. **Contacto**
   - Formulario de contacto funcional
   - Campos: Nombre, WhatsApp, Servicio, Mensaje
   - Card "Otros métodos de contacto" con WhatsApp, Instagram, Email
   - Card "Horario de atención" con días y horarios
   - Toast notification al enviar

9. **Footer**
   - 4 columnas: Marca, Servicios, Enlaces rápidos, Síguenos
   - Redes sociales con iconos
   - Email y teléfono de contacto
   - Copyright 2026

### 🎯 Funcionalidades

- **Countdown Timer**: Funcional en el banner de oferta (horas:minutos:segundos)
- **Tabs Interactivos**: En Planes y Pedir con estados activos
- **Formulario de Contacto**: Con validación y toast notifications
- **Hover Effects**: En todos los botones, cards y elementos interactivos
- **Smooth Scrolling**: Navegación suave entre secciones
- **Responsive Design**: Adaptable a desktop, tablet y móvil

### 🛠️ Tecnologías

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **Icons**: lucide-react (NO emojis)
- **UI Components**: Custom components con glassmorphism
- **Notifications**: Sonner (Toast)
- **Routing**: React Router DOM

### 📦 Componentes Creados

```
/app/frontend/src/components/
├── Navbar.jsx
├── Hero.jsx
├── Metricas.jsx
├── Planes.jsx
├── Pedir.jsx
├── Arquitectura.jsx
├── Portafolio.jsx
├── Contacto.jsx
└── Footer.jsx
```

### 🎨 Reglas de Diseño Aplicadas

✅ **SÍ implementado**:
- Glassmorphism con backdrop-blur
- Iconos de lucide-react (NO emojis)
- Color teal para acentos y CTAs
- Bordes redondeados grandes
- Spacing generoso (2-3x normal)
- Shadows suaves y difusas
- Hover states con micro-animaciones
- Focus rings visibles para accesibilidad

❌ **NO implementado** (siguiendo reglas):
- Emojis como iconos
- Gradientes oscuros en botones
- system-ui font
- Gradientes vibrantes que excedan 20% del viewport
- Text-align center en contenedores principales

### 🚀 Estado del Proyecto

**Frontend**: ✅ COMPLETO
- Todas las secciones implementadas
- Diseño pixel-perfect según capturas
- Todos los datos son MOCK (simulados)
- Funcionalidad de frontend completa

**Backend**: ⏳ NO IMPLEMENTADO
- Este es un sitio frontend-only
- Todos los datos están mockeados
- Formularios muestran notificaciones pero no envían a backend
- Para integración backend, se necesitaría crear APIs y base de datos

### 📝 Datos Mock

Los siguientes datos son simulados (MOCK):
- Métricas de proyectos, clientes y experiencia
- Planes de precios y características
- Productos en la sección Pedir
- Proyectos del portafolio
- Información de contacto
- Horarios de atención

### 🎯 Próximos Pasos (Sugeridos)

Si deseas hacer el sitio completamente funcional:
1. Crear backend con FastAPI
2. Implementar base de datos MongoDB
3. Conectar formulario de contacto a email service
4. Implementar sistema de autenticación
5. Panel de administración para gestionar contenido
6. Sistema de pagos para planes
7. Galería de portafolio con CMS

### 🌐 URL de Preview
https://pixel-perfect-design-1.preview.emergentagent.com

## 🎨 Paleta de Colores

- **Background**: `linear-gradient(135deg, #0a1f1c 0%, #0d2420 50%, #0a1816 100%)`
- **Teal Primary**: `#14b8a6` / `#2dd4bf`
- **White Overlay**: `rgba(255, 255, 255, 0.05)` para glassmorphism
- **Border**: `rgba(255, 255, 255, 0.1)`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `rgba(255, 255, 255, 0.7)`
- **Text Muted**: `rgba(255, 255, 255, 0.6)`

## 📱 Responsive Breakpoints

- Desktop: 1920px+ (diseño principal)
- Tablet: 768px - 1919px
- Mobile: < 768px

---

**Desarrollado con ❤️ siguiendo las mejores prácticas de diseño moderno**
