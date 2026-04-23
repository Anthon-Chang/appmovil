# 📸 Photo Gallery App

Aplicación móvil desarrollada con **Angular + Ionic + Capacitor** para Android, que permite capturar fotos con la cámara del dispositivo y visualizarlas en una galería interactiva.

---

## 🧰 Tecnologías utilizadas

| Tecnología | Versión |
|---|---|
| Angular | 17+ |
| Ionic Framework | 7.2.1 |
| Capacitor | 8.3.1 |
| Node.js | 18+ |
| Android SDK | API 22+ |

---

## 📋 Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) v18 o superior
- [Android Studio](https://developer.android.com/studio) con SDK configurado
- [Ionic CLI](https://ionicframework.com/docs/cli)
- Java JDK 17+

Instala el CLI de Ionic de forma global:

```bash
npm install -g @ionic/cli
```

---

## 🚀 Instalación y configuración

### 1. Clona el repositorio

```bash
git clone https://github.com/Anthon-Chang/appmovil.git
cd photo-gallery
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Sincroniza con Android

```bash
npx cap sync android
```

### 4. Abre en Android Studio

```bash
npx cap open android
```

Desde Android Studio, conecta un dispositivo físico o inicia un emulador y presiona ▶️ **Run**.

---

## 📱 Funcionalidades

### 📷 Captura de fotos
- Accede a la **cámara del dispositivo** para tomar fotos directamente desde la app.
- Solicita los permisos necesarios automáticamente en el primer uso.

### 🖼️ Galería de fotos
- Muestra todas las fotos capturadas en una **cuadrícula visual**.
- Permite seleccionar fotos desde el **almacenamiento del dispositivo**.
- Las fotos se persisten localmente entre sesiones.

---

## 🎨 Personalización visual

### Ícono de la aplicación
El ícono fue generado con `@capacitor/assets` a partir de una imagen base de **1024×1024 px** ubicada en:
```
resources/
└── icon.png
```

Para regenerar el ícono:
```bash
npx capacitor-assets generate --android
npx cap sync android
```

### Splash Screen
La pantalla de bienvenida fue configurada con `@capacitor/splash-screen` usando una imagen de **2732×2732 px**:
```
resources/
└── splash.png
```

Configuración en `capacitor.config.ts`:
```typescript
plugins: {
  SplashScreen: {
    launchShowDuration: 2500,
    launchAutoHide: true,
    backgroundColor: '#ffffff',
    showSpinner: false,
    androidScaleType: 'CENTER_CROP',
    splashFullScreen: true,
    splashImmersive: true,
  },
},
```

Para regenerar el splash:
```bash
npx capacitor-assets generate --android
npx cap sync android
```

---

## 📂 Estructura del proyecto

```
photo-gallery/
├── src/
│   ├── app/
│   │   ├── tab2/               # Galería de fotos
│   │   ├── services/           # Lógica de cámara y almacenamiento
│   │   └── app.module.ts
│   └── assets/
├── resources/
│   ├── icon.png                # Ícono base (1024×1024 px)
│   └── splash.png              # Splash base (2732×2732 px)
├── android/                    # Proyecto Android nativo
├── capacitor.config.ts         # Configuración de Capacitor
├── ionic.config.json
└── package.json
```

---

## 🔧 Plugins de Capacitor utilizados

| Plugin | Uso |
|---|---|
| `@capacitor/camera` | Acceso a cámara y galería del dispositivo |
| `@capacitor/splash-screen` | Pantalla de bienvenida personalizada |
| `@capacitor/assets` | Generación de íconos y splash en múltiples resoluciones |

---

## 🛠️ Comandos útiles

```bash
# Compilar la app
ionic build

# Sincronizar cambios con Android
npx cap sync android

# Abrir en Android Studio
npx cap open android

# Regenerar ícono y splash
npx capacitor-assets generate --android

# Correr en navegador (modo desarrollo)
ionic serve
```

---

## ⚠️ Permisos de Android

La app requiere los siguientes permisos declarados en `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

Estos permisos son solicitados al usuario en tiempo de ejecución la primera vez que usa la cámara o la galería.

---

## 👤 Autor

**Chang Andre**
Proyecto académico — Escuela Politecnica Nacional
Año: 2026

---

## 📄 Licencia

Este proyecto fue desarrollado con fines académicos.


<img width="369" height="809" alt="Captura de pantalla 2026-04-18 220207" src="https://github.com/user-attachments/assets/4db5e604-1cfe-40b1-81c8-f0aba97ef059" />

<img width="370" height="805" alt="Captura de pantalla 2026-04-18 220141" src="https://github.com/user-attachments/assets/7e1ea4b5-ca13-4265-b10e-66e97808def6" />

<img width="376" height="806" alt="Captura de pantalla 2026-04-18 220216" src="https://github.com/user-attachments/assets/deb642ec-a63c-4bc5-8bd8-04bade31ff39" />

<img width="373" height="805" alt="Captura de pantalla 2026-04-18 220227" src="https://github.com/user-attachments/assets/97cda29e-be4c-4846-be08-33cb3166d181" />

<img width="373" height="807" alt="Captura de pantalla 2026-04-18 220242" src="https://github.com/user-attachments/assets/49207385-fe1d-4cca-9e4f-8ffe45f555e0" />

<img width="735" height="91" alt="Captura de pantalla 2026-04-18 220338" src="https://github.com/user-attachments/assets/d47ea351-9de0-412d-b464-3a01c23d4640" />
