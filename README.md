# 🌿 Andora Skincare App

Una aplicación web responsiva de cuidado de piel construida con HTML5, CSS3 y JavaScript puro.

## 📁 Estructura del Proyecto

```
proyecto/
├── index.html              # Archivo HTML principal
├── styles.css              # Estilos CSS (variables, responsivo, animaciones)
├── script.js               # Lógica JavaScript (navegación, interactividad)
├── README.md               # Este archivo
└── assets/
    ├── images/             # Imágenes de la aplicación
    │   ├── product-serum.png
    │   ├── product-humectante.png
    │   ├── product-hidratante.png
    │   ├── product-antiarrugas.png
    │   ├── botanical-fairy.png
    │   └── leaf-pattern.png
    ├── icons/              # Carpeta para iconos (actualmente usamos SVG)
    └── fonts/              # Carpeta para fuentes personalizadas
```

## 🚀 Cómo Usar

### Opción 1: Abrir directamente en el navegador
1. Abre el archivo `index.html` en tu navegador web
2. La aplicación se ejecutará inmediatamente sin necesidad de servidor

### Opción 2: Usar un servidor local (recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Con PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## 🎨 Diseño y Funcionalidades

### Pantallas Disponibles

1. **Login Screen** - Inicio de sesión con email y contraseña
2. **Welcome Screen** - Pantalla de bienvenida con fondo verde
3. **Greeting Screen** - Saludo personalizado
4. **Categories Screen** - Selección interactiva de categorías
5. **Recommendation Screen** - Selección de productos con preview
6. **Process Screen** - Instrucciones de uso paso a paso
7. **Home Screen** - Panel principal con rutina diaria
8. **Chat Screen** - Chat interactivo con la asesora Verónica
9. **Progress Screen** - Calendario de progreso (31 días)
10. **Cards Screen** - Membresía y recompensas
11. **Profile Screen** - Perfil del usuario con menú

### Características Técnicas

✅ **Diseño Responsivo**
- Se adapta perfectamente a móviles, tablets y escritorio
- Phone frame visual para vista desktop
- Breakpoints en 480px, 768px, 992px, 1200px

✅ **Animaciones Suaves**
- Transiciones fadeIn al cambiar pantallas
- Efectos activos en botones
- Animaciones de scroll en mensajes

✅ **Componentes Interactivos**
- Formularios funcionales
- Botones con estados (hover, active, focus)
- Chat con mensajes bidireccionales
- Selección múltiple (categorías, productos)
- Calendario interactivo
- Progress rings (SVG)

✅ **Variables CSS**
- Paleta de colores completa
- Sistema de espaciado y tipografía
- Valores de transición y sombras

✅ **Accesibilidad**
- Etiquetas semánticas HTML
- aria-labels en iconos y botones
- Contraste de colores adecuado

## 🎯 Flujo de Navegación

```
Login → Welcome → Greeting → Categories → Recommendation → Process → Home
                                                                      ↓
                              ←─── Chat, Progress, Cards, Profile ←─┘
```

## 💻 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere dependencias externas
- No requiere servidor backend

## 🛠️ Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --color-primary: #6b8200;
    --color-secondary: #dde6b8;
    --color-background: #fafaf7;
    /* ... más colores ... */
}
```

### Cambiar Contenido
Edita los datos en `script.js`:
```javascript
const categories = [
    { id: 'cremas', name: 'Cremas', desc: '...', icon: '💧' },
    // ... agregar más categorías ...
];
```

### Agregar Nuevas Pantallas
1. Crea un template en `index.html`:
```html
<template id="nueva-screen">
    <div class="screen">
        <!-- Contenido de la pantalla -->
    </div>
</template>
```

2. Agrega la función de inicialización en `script.js`:
```javascript
function initNuevaScreen() {
    // Lógica de interactividad
}
```

3. Agrega el caso en `initializeScreenInteractions()`:
```javascript
case 'nueva':
    initNuevaScreen();
    break;
```

## 📱 Responsive Design

### Desktop (>992px)
- Phone frame visible con bordes redondeados
- Sombras y efectos
- Ancho máximo de 420px

### Tablet (768px - 992px)
- Ajustes de padding y márgenes
- Tamaños de fuente optimizados

### Mobile (<768px)
- Layout fluido sin phone frame
- Pantalla completa
- Tamaños de fuente adaptados

## 🔧 Troubleshooting

**Las imágenes no carga:**
- Asegúrate de que la carpeta `assets/images/` existe
- Verifica que los nombres de archivo sean exactos
- Si usas un servidor local, asegúrate de que la ruta sea correcta

**Los estilos no se aplican:**
- Verifica que `styles.css` está en la misma carpeta que `index.html`
- Limpia el caché del navegador (Ctrl+Shift+Delete o Cmd+Shift+Delete)

**JavaScript no funciona:**
- Abre la consola (F12) para ver mensajes de error
- Verifica que `script.js` está en la misma carpeta que `index.html`

## 📝 Notas

- Esta es una aplicación de demostración
- No hay persistencia de datos (todo se reinicia al recargar)
- Los mensajes del chat son simulados
- Las credenciales de login aceptan cualquier valor

## 🎓 Conceptos Utilizados

- **HTML Semántico**: Uso correcto de etiquetas (main, nav, header, etc.)
- **CSS Grid & Flexbox**: Layouts modernos y responsivos
- **CSS Variables**: Temas y personalización fácil
- **Template Element**: Reutilización de HTML
- **Event Listeners**: Manejo de interacciones del usuario
- **DOM Manipulation**: Renderizado dinámico
- **State Management**: Gestión simple de estado
- **Animaciones CSS**: Transiciones suaves

## 📄 Licencia

Proyecto de demostración. Libre para uso personal y educativo.

## ✨ Características Especiales

🎨 **Paleta de Colores Natural**
- Verde oliva (primario)
- Verde salvia (secundario)
- Beige suave (acentos)

🌿 **Identidad Visual Cohesiva**
- Logo personalizado con SVG
- Patrón de hojas en fondos
- Tipografía clara y legible

📲 **Experiencia Mobile-First**
- Optimizado para pantallas pequeñas
- Touch-friendly buttons
- Scrolling sin scrollbars

💬 **Interactividad Completa**
- Todos los botones funcionan
- Formularios operativos
- Chat interactivo con IA simulada

---

**Hecho con ❤️ para el cuidado de tu piel**
