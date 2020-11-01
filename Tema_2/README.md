# Ejercicios de autoevaluación - Tema 2


## Ejercicio 4. Instalar alguno de los entornos virtuales de node.js (o de cualquier otro lenguaje con el que se esté familiarizado) y, con ellos, instalar la última versión existente, la versión minor más actual de la 4.x y lo mismo para la 0.11 o alguna impar (de desarrollo).


Para este ejercicio, como yo es mi proyecto uso Node.js pues he decidido instalarme el gestor de versiones nvm, que es muy rápido y muy simple de usar. Para descargarlo e instalarlo, simplemente tenemos que ejecutar la siguiente orden, sacada del repositorio oficial de nvm en github:

![nvm-install](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_2/img/nvm_install.png)


Para instalar la última version de node, simplemente tenemos que ejecutar el comando *nvm install node*

![latest](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_2/img/latest.png)

Como vemos, se instala la última versión, que es la 15.0.1.

A continuación querremos instalar la última versión de la serie 4.x, por lo que sacaremos el listado de todas las versiones con la orden *nvm ls-remote* y escogeremos la correcta.
Con esta orden podemos ver que la última versión es la 4.9.1.

![latest_4](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_2/img/latest_4.png)

Ahora que ya sabemos cuál es, podemos instalarla con el comando *nvm install "version_escogida"*

![latest_4_install](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_2/img/latest_4_install.png)


Por último, vamos a probar a instalar la última versión de la serie 0.11.x, de la misma manera que la anterior. La buscamos y la instalamos.

![latest_0.11](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_2/img/latest_0.11.png)

![latest_0.11_install](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_2/img/latest_0.11_install.png)


Y así de fácil se puede cambiar entre versiones instaladas de node.



## Ejercicio 6. Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

Vamos a ejecutar un programa simple de nuestra aplicación para ver si funciona aún cambiando la versión de node con la que se ejecuta.

El programa simplemente creará una rutina, a la que le añadirá un día de entrenamiento y, a este último le añadirá 2 ejercicios. Finalmente lo mostrará todo por pantalla.

![exec_latest](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_2/img/exec_15.0.1.png)


![exec_4.9.1](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_2/img/exec_4.9.1.png)


Como vemos, da error al ejecutar debido a que el programa se ha desarrollado con la última versión de node y aquí estamos usando una versión anterior para ejecutarlo.

Visto esto, no funciona en versiones anteriores a la que se ha usado desde un principio.
