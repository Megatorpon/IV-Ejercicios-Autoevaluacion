# Ejercicios de autoevaluación - Tema 6


## Ejercicio 1. Instalar etcd3, averiguar qué bibliotecas funcionan bien con el lenguaje que estemos escribiendo el proyecto (u otro lenguaje), y hacer un pequeño ejemplo de almacenamiento y recuperación de una clave; hacer el almacenamiento desde la línea de órdenes (con etcdctl) y la recuperación desde el mini-programa que hagáis.

El primer paso es instalar localmente etcd, utilizando la orden
`sudo apt-get install etcd`

Establecemos la API a la versión 3, exportando la variable de entorno con `export ETCDCTL_API=3` y checkeamos la versión

![etcdctl](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_6/img/etcdctl_version.png)

A continuación, escribimos una clave que procederemos a recuperar con un fichero.

![etcdctl_put](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_6/img/etcdctl_put.png)

Instalamos etcd3 con el gestor de paquetes node, npm, con la orden
`npm i --save etcd3`

Ahora, con el programa que hemos creado siguiendo las indicaciones de la [documentación oficial](https://www.npmjs.com/package/etcd3), seremos capaces de obtener el valor de la clave de vuelta.

![programa](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_6/img/programa.png)

![salida_programa](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_6/img/salida_programa.png)


## Ejercicio 2. Realizar una aplicación básica que use express para devolver alguna estructura de datos del modelo que se viene usando en el curso.

Para este ejercicio, crearemos un fichero básico que devolverá una variable en formato JSON en su ruta creada.

![ejercicio_2](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_6/img/ejercicio_2.png)

Como vemos, primero que nada, importamos el framework de express para posteriormente crear nuestra app con respecto a este framework. A continuación, establecemos una variable port que tendrá el valor de la variable de entorno o, en su defecto, 5000. Crearemos una ruta llamada "/prueba" y que podrá ser llamada con el método GET de REST. Al enviar una petición GET a esta ruta, devolverá en formato JSON un mensaje. Finalmente, indicamos que la app va a estar escuchando en el puerto establecido anteriormente y lo mostramos por consola.

Lanzaremos la app por consola mediante la orden
`node Tema_6/ejercicio_2.js`
y cuando entremos a [localhost:5000/nombre](localhost:5000/nombre), obtendremos por pantalla el mensaje.

![ej_2_localhost](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_6/img/ej_2_localhost.png)


## Ejercicio 3. Programar un microservicio en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.

Este ejercicio es muy similar al anterior, solo que esta vez usaremos variables. Vamos a devolverle al usuario el nombre y los apellidos que van a estar guardados en una variable declarada previamente.

![ejercicio_3](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_6/img/ejercicio_3.png)

![ej_3_localhost](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_6/img/ej_3_localhost.png)


## Ejercicio 4. Crear pruebas para las diferentes rutas de la aplicación.

Para poder crear tests y poder realizar pruebas para nuestras rutas, debemos utilizar el módulo supertest de npm. Hagamos un nuevo archivo basado en el del ejercicio 3, pero que añada una ruta más. Además, para poder testear la aplicación en el fichero de test, debemos exportarla añadiendo al final de *ejercicio_4.js* la línea:
`module.exports = app;`

![ejercicio_4](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_6/img/ejercicio_4.png)

Para el archivo que se encarga de testear, añadiremos al comienzo un require que importará el módulo supertest. Importaremos también la aplicación del anterior archivo y lanzaremos dos tests: uno se encarga de testear si la salida devuelve código 200 y está en formato JSON y el otro si la salida devuelve código 200 y está en formato html. Como vemos, ambos funcionan a la perfección.

![rutas_test](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_6/img/rutas_test.png)

![salida_test](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_6/img/salida_test.png)
