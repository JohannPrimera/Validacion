# 📋 Proyecto de Validación de Formularios

Un formulario de registro con validación en tiempo real utilizando expresiones regulares. El proyecto proporciona retroalimentación visual inmediata al usuario mientras completa el formulario.

## ✨ Características

- ✅ **Validación en tiempo real**: Los campos se validan mientras el usuario escribe
- 🎨 **Retroalimentación visual**: Indicadores de color verde (correcto) y rojo (incorrecto)
- 📱 **Diseño responsive**: Adaptable a diferentes tamaños de pantalla
- 🌍 **Selector de países**: Más de 200 países con códigos telefónicos internacionales
- 🔒 **Validación de contraseña segura**: Requisitos de seguridad implementados
- 💬 **Mensajes informativos**: Guías claras sobre los requisitos de cada campo
- 🚫 **Botón deshabilitado**: El botón de envío solo se activa cuando todos los campos son válidos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura del formulario
- **CSS3**: Estilos y diseño responsive
- **JavaScript (Vanilla)**: Lógica de validación y manipulación del DOM
- **Expresiones Regulares**: Validación de patrones

## 📁 Estructura del Proyecto

```
Validacion/
│
├── index.html      # Estructura HTML del formulario
├── index.js        # Lógica de validación y eventos
├── styles.css      # Estilos y diseño del formulario
└── README.md       # Documentación del proyecto
```

## 🚀 Cómo Usar

1. **Clonar o descargar** el proyecto
2. **Abrir** el archivo `index.html` en tu navegador web
3. **Completar** el formulario y observar la validación en tiempo real

No se requieren dependencias adicionales ni instalación. El proyecto funciona directamente en el navegador.

## 📝 Reglas de Validación

### Nombre de Usuario
- Entre 3 y 20 caracteres
- Solo letras (a-z, A-Z), números (0-9), guiones bajos (_) y guiones (-)

### Correo Electrónico
- Formato estándar de email: `usuario@dominio.com`
- Debe contener el símbolo `@` y un dominio válido

### País
- Debe seleccionar un país de la lista
- El código telefónico se actualiza automáticamente según el país seleccionado

### Número de Teléfono
- Mínimo 8 dígitos
- Puede incluir: `+`, `-`, espacios y paréntesis
- Ejemplo: `+58 4242344243`

### Contraseña
- Mínimo 8 caracteres
- Al menos una letra mayúscula (A-Z)
- Al menos una letra minúscula (a-z)
- Al menos un número (0-9)
- Al menos un carácter especial: `@$!%*?&`

### Confirmar Contraseña
- Debe coincidir exactamente con la contraseña ingresada

## 🎯 Funcionalidades Implementadas

### Validación en Tiempo Real
Cada campo se valida automáticamente cuando el usuario escribe, proporcionando retroalimentación inmediata.

### Estados Visuales
- **Verde (`correct`)**: Campo válido
- **Rojo (`incorrect`)**: Campo inválido
- **Mensajes informativos**: Se muestran cuando un campo es inválido

### Control del Botón de Envío
El botón "Registrar" permanece deshabilitado hasta que todos los campos cumplan con sus respectivas validaciones:
- ✅ Nombre de usuario válido
- ✅ Email válido
- ✅ País seleccionado
- ✅ Teléfono válido
- ✅ Contraseña válida
- ✅ Confirmación de contraseña coincidente

### Manejo del Formulario
Al enviar el formulario (cuando todos los campos son válidos), se previene el envío por defecto y se muestra en consola un objeto con los datos del usuario:

```javascript
{
    username: "...",
    email: "...",
    phone: "+XX XXXXXXXXXX",
    password: "..."
}
```

## 🎨 Diseño

El proyecto utiliza un diseño moderno con:
- Tema oscuro (`#2d1b4e` de fondo, `#2a2a2a` para el formulario)
- Colores de acento púrpura (`#b19cd9`)
- Transiciones suaves
- Diseño responsive para móviles y escritorio

## 👤 Autor

**Johann Primera**

- GitHub: [@JohannPrimera](https://github.com/JohannPrimera)

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y personal.

---

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub!

