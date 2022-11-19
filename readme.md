# Repaso de nodejs
---
- _El **-v** nos sirve para ver la versión de nodejs_
- _El **-v** es un flag, también está la versión larga_ **--version**
```
node -v
node --version
```
- _Debemos revisar la docu de [nodejs](https://nodejs.org/en/docs/) que corresponda a nuestra versión_
- _Para requerir modulos usamos el_ __*require*__



### Tenemos 3 tipos de modulos
1. Nativos
2. Propios
3. De terceros

### Modulos que vamos a usar
1. [Path](https://nodejs.org/dist/latest-v18.x/docs/api/path.html)
2. [FileSystem](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html)

## Dentro de path podemos usar los metodos:
### path resolve 
- Nos ayuda a resolver una ruta
- Nos devuelve una ruta absoluta
```
path.resolve
```

### path join 
- Nos ayuda a resolver una ruta
- Nos devuelve una ruta relativa o absoluta si usamos __dirname
```
path.join
```

## JSON
- _La constante **JSON** tiene metodos que nos ayudan a pasar de json a objetos y viceversa_

### Tenemos el metodo parse
- Este metodo nos ayuda a pasar de json a objeto
```
JSON.parse()
```
### Tenemos el metodo stringify
- Este metodo nos ayuda a pasar de objeto a json
```
JSON.stringify()
```
