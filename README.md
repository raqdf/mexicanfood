# Mexican Food

Sitio web de Mexican Food, organizado en páginas independientes y servido con Flask:

- Inicio: `/`
- Menú: `/menu`
- Nosotros: `/nosotros`
- Visítanos: `/visitanos`

Los estilos compartidos están en `static/css/styles.css` y cada página carga su
propio CSS (`home.css`, `menu.css`, `nosotros.css` o `visitanos.css`). El menú
carga además `static/js/menu.js`; la navegación compartida está en
`static/js/common.js`.

## Ejecutar en Windows

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python app.py
```

Si PowerShell bloquea la activación del entorno virtual, puedes instalar y ejecutar
sin activarlo:

```powershell
py -m pip install -r requirements.txt
py app.py
```

Abre http://127.0.0.1:5000 en el navegador. Detén el servidor con `Ctrl+C`.

## Desplegar en Render

El proyecto incluye `render.yaml` para crear un servicio web gratuito en Render.

1. Sube los cambios a GitHub.
2. En Render, selecciona **New > Blueprint**.
3. Conecta `raqdf/mexicanfood` y confirma el despliegue del servicio `mexicanfood`.

Render instalará las dependencias y ejecutará Gunicorn. Los cambios futuros
subidos a `main` se desplegarán automáticamente.
