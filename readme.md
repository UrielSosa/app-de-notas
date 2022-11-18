# Repaso de nodejs

- El *-v* es un flag
- El -v nos sirve para ver la versión de nodejs
```
node -v
node --version
```

- Tenemos 3 tipos de modulos
1. Nativos
2. Propios
3. De terceros

- Modulos que vamos a usar
1. [Path](https://nodejs.org/dist/latest-v18.x/docs/api/path.html)
2. [FileSystem](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html)

- Para requerir modulos usamos el __*require*__
- Dentro de path podemos usar los metodos
1. path resolve 
- Nos ayuda a resolver una ruta
- Nos devuelve una ruta absoluta
````
path.resolve
```

2. path join 
- Nos ayuda a resolver una ruta
- Nos devuelve una ruta relativa o absoluta si usamos __dirname
````
path.join
```

