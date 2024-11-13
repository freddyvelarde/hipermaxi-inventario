# Gestion de inventario para Hipermaxi

Pasos para contribuir:

1. Crear un fork de este repositorio en tu cuenta de GitHub.
2. Clonar tu repositorio
3. cd ~/path/to/hipermaxi-inventario
4. Crear una nueva rama:

```sh
git checkout -b feature/your-feature-name
```

5. Una ves terminado la "feature":

```sh
git add . ; git commit -m 'commit message';

```

6. Por ultimo subir todo el codigo a tu repositorio:

```sh
git push origin feature/your-feature-branch
```

7. Ir a tu repositorio en github y hacer un "pull request" desde github

setup:

Instalar dependencias:

```sh
# recomendacion: usar "pnpm", en lugar de npm, es mas rapido.
npm install
```

Arrancar react:

```sh
npm run dev
```

info:

- [react router docs](https://reactrouter.com/en/main/start/tutorial)

project directory structure:

├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   ├── helpers/
│   ├── index.css
│   ├── main.jsx
│   ├── pages/
│   │   └── Navbar
│   │   └── index.jsx
│   ├── routes.jsx
│   ├── styles/
│   └── utils/

Project settings: - Node Version: v20.14.0
