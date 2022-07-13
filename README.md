# Prueba

## Inicialización del proyecto

Instalacón de dependencias del proyecto

```
yarn install
# or
npm install
```

### Instalando dependencias globales

Instalar json-server y json-server-auth de forma global en nuestro equipo

```
yarn add -g json-server json-server-auth
# or
npm install -g json-server json-server-auth
```

Con json-server y json-server-auth instalados de manera global ejecutamos la siguiente linea

```
json-server-auth ./src/db/db.json
```

### Iniciando aplicación en modo desarrollo

Para ejecutar nuestra aplicación de forma local ejecute uno de los dos siguientes comandos

```
yarn dev
# or
npm run dev
```

Luego vaya a [http://localhost:8080](http://localhost:8080)
