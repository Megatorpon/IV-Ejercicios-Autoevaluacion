# Ejercicios de autoevaluación - Tema 3


## Ejercicio 1. Instalar docker y/o otro gestor de contenedores como Podman/Buildah

Para este ejercicio no vamos a instalar Docker porque ya lo tenemos instalado debido a su uso requerido en otra asignatura. Por otra parte, sí procederemos a instalar Podman.

Podman es una alternativa a Docker como marco de construcción y ejecución de contenedores y cuya principal diferencia con este es la no utilización de un único servicio para manejarlo todo. Podman descentraliza los componentes necesarios y los divide en componentes más pequeños los cuáles solo se utilizan cuando es necesario. Para instalarlo haremos lo siguiente:

Primero, ejecutamos la siguiente orden para asegurar que hay datos identificativos del sistema disponibles:

`$ source /etc/os-release`

A continuación, añadimos el repositorio necesario y lo instalamos con apt:

`$ sudo sh -c "echo 'deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/ /' > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list"`
`$ wget -nv https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable/xUbuntu_${VERSION_ID}/Release.key -O- | sudo apt-key add -`
`$ sudo apt-get update -qq`
`$ sudo apt-get -qq --yes install podman`

Con esto es suficiente. Podman ya estaría listo para utilizarse.



## Ejercicio 2.

### 2.1 - Instalar a partir de docker una imagen alternativa de Ubuntu y alguna adicional, por ejemplo de CentOS

Primero lanzamos el daemon docker y lo dejamos corriendo en segundo plano.

![docker](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_3/img/sudo_docker.png)

Para instalar una imagen de Ubuntu, basta con hacer `docker pull ubuntu`. Con esta, el daemon irá descargando la imagen por capas y una vez finalizada la instalación, se podrá empezar a utilizar (se pueden ejecutar comandos sin necesidad de conectarse a la máquina en sí).

![pull_ubuntu](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_3/img/pull_ubuntu.png)

Para la imagen de centos, basta con ejecutar el mismo comando, sólo que cambiamos "ubuntu" por "centos" y se nos descargará la última versión de la imagen de centos.

![pull_centos](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_3/img/pull_centos.png)

Y ya tenemos nuestras dos imágenes descargadas.


### 2.2 - Buscar e instalar una imagen que incluya MongoDB

Para la imagen de MongoDB, he elegido una que se llama bitnami/mongodb, la cual se obtiene del Docker Hub mediante el comando `docker pull bitnami/mongodb:latest`


![pull_mondodb](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_3/img/pull_mongodb.png)



## Ejercicio 3. Crear un usuario propio e instalar alguna aplicación tal como nginx en el contenedor creado de esta forma, usando las órdenes propias del sistema operativo con el que se haya inicializado el contenedor.


Para este ejercicio vamos a utilizar un contenedor con la imagen de centos, que hemos instalado anteriormente.
Lo lanzaremos con la orden `docker run -it centos /bin/bash`

A continuación, vamos a crear un usuario con la orden propia de centos, además de añadirle una contraseña. Para esto último hemos tenido que instalar la orden passwd a través del gestor de paquetes yum.

![adduser](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_3/img/adduser.png)
![passwd](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_3/img/passwd.png)


También vamos a instalar la aplicación que se nos nombra, nginx, usando la orden `dnf install nginx`

![nginx](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_3/img/nginx.png)


## Ejercicio 4. Crear a partir del contenedor anterior una imagen persistente con commit.

Vamos a hacer un commit de la imagen de centos que usamos antes. De esta manera se puede guardar el estado de un contenedor en forma de imagen.

Para ello, abrimos una segunda terminal con la primera todavía con la imagen de centos en ejecución. En la segunda, miramos la id de la imagen con `docker ps` y, posteriormente, usamos la orden `docker commit`.

![centos_running.png](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_3/img/centos_running.png)

![commit](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_3/img/commit.png)
