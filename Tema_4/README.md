# Ejercicios de autoevaluación - Tema 4


## Ejercicio 1. Haced los dos primeros pasos antes de pasar al tercero.

Primero, nos damos de alta en el sistema de integración continua elegido para nuestro proyecto (Travis en nuestro caso). Nos autentificaremos usando la cuenta de Github.

![travis_account](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_4/img/travis_account.png)

A continuación, activaremos en el repositorio del proyecto la integración continua. Para ello vamos a la página de Travis, activamos la integración con el repositorio de nuestro proyecto y le damos a aceptar la instalación.

![app_integration](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_4/img/app_integration.png)

![install_travis](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_4/img/install_travis.png)

![travis_apus](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_4/img/travis_apus.png)


## Ejercicio 2. Configurar integración continua para nuestra aplicación usando Travis o algún otro sitio.


Tras el ejercicio anterior, debemos crear un fichero de configuración para que Travis testee el repositorio cada vez que se actualice. Este archivo se añadirá a la raíz del repositorio y se llamará `.travis.yml`, el cual contendrá varias secciones especificando la configuración.

El archivo de nuestro proyecto quedaría así:

![travis_yml](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_4/img/travis_yml.png)
