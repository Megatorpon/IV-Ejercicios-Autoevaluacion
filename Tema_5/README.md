# Ejercicios de autoevaluación - Tema 5


## Ejercicio 1. Darse de alta en Vercel y Firebase, y descargarse los SDKs para poder trabajar con ellos localmente.

Para el primer ejercicio, como bien indica en el enunciado, debemos visitar las páginas oficiales de Vercel y de Firebase y darnos de alta. Vamos a ver que esto es muy sencillo.

### Vercel

Lo primero es visitar la página de [Vercel](https://vercel.com/). En esta, en la esquina superior derecha, nos aparecerá el botón de "Sign Up"

![Vsignup](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/Vsignup.png)

Nos dará la posibilidad de registrarnos tanto con Github como con Gitlab y BitBucket. Pulsaremos en Github y aceptaremos los permisos.

![Vlogin](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/Vlogin.png)

Y ya estaría registrados correctamente. A continuación, elegiremos este mismo repositorio para realizar las pruebas del posterior ejercicio. Para ello, debemos importarlo y seguir los pasos

![vercel_account](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/vercel_account.png)

![vercel_repos](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/vercel_repos.png)

![vercel_success](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/vercel_success.png)

Para poder utilizar Vercel en nuestro proyecto, debemos descargarlo. El siguiente paso será instalarlo con npm, con la orden `npm i -g vercel` y lanzarlo con la orden `vercel`.
Nos pedirá un mail y nos enviará un correo de confirmación. Tras esto, volvemos a lanzar con la orden `vercel` para acabar de configurarlo.

![v_install](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/v_install.png)

![v_email](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/v_email.png)

![v_config](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/v_config.png)

### Firebase

Registrarnos en Firebase y descargar el SDK será muy sencillo también. En primer lugar, iremos a la página de [Firebase](https://firebase.google.com/?hl=es) y accederemos con una cuenta de Google.

![F_login](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/F_login.png)

Pincharemos en "Crear proyecto" y seguiremos los pasos que se nos indica. Una vez creado, nos aparecerá esto.

![f_project](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/f_project.png)

Para comenzar a utilizar Firebase en nuestro proyecto, tendremos que utilizar npm también, concretamente la orden `npm i -g firebase-tools`

![f_npm](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/f_npm.png)


## Ejercicio 2. Tomar alguna de las funciones de prueba de Vercel, y hacer despliegues de prueba con el mismo.

En nuestro proyecto de la asignatura usamos Node.js así que vamos a utilizar la función de prueba que nos proporciona Vercel para Node.js, de la manera que se nos indica en la siguiente imagen.

![vercel_node](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/vercel_node.png)

Siguiendo lo anterior, crearemos un directorio api en el que guardaremos la función que se nos proporciona en un archivo [hello.js](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/api/hello.js). Hacemos push a nuestro repositorio, desplegamos con la orden `vercel --prod` y ya podremos visitar la función con el [link](https://iv-ejercicios-autoevaluacion.vercel.app/api/hello.js) que nos proporciona Vercel.

## Ejercicio 3. Tomar alguna de las funciones de prueba de Netlify, y hacer despliegues de prueba con el mismo.

Lo primero de todo es acceder a la web de [Netlify](https://www.netlify.com/) y registrarnos con nuestra cuenta de Github, autorizando a Netlify con los permisos que requiere.

Tras esto, debemos descargar el SDK con la orden `npm i -g netlify-cli`.

![netlify_install](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/netlify_install.png)

Como vemos en la anterior imagen, luego de instalarlo es necesario logearnos, lo cual nos redirigirá a una página en la que permitiremos el acceso.

![netlify_auto](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/netlify_auto.png)

A continuación, lo desplegamos con `netlify deploy`

![netlify_deploy](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_5/img/netlify_deploy.png)

El siguiente paso es visitar la página de Netlify del proyecto y establecer la carpeta api como la carpeta que alojará la función de prueba (extraída de las [funciones](https://functions-playground.netlify.app/) de ejemplo que nos proporcionan)
