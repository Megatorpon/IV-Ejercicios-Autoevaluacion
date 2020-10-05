# Ejercicios de autoevaluación - Tema 1


## Ejercicio 1. Consultar en el catálogo de alguna tienda de informática el precio de un ordenador tipo servidor y calcular su coste de amortización a cuatro y siete años.

Para la realización de este ejercicio se ha utilizado como ejemplo el siguiente ordenador:

![PC-server](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_1/img/PC.png)

Su precio con IVA es de 1518€ y sin IVA es de 1254,55€

Según las tablas oficiales de amortización para los bienes de una empresa, en los equipos para procesos de información, solamente puede ser amortizado un máximo del 25% de su coste anualmente, en un máximo de 8 años.

![Tablas de amortización](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_1/img/Tabla_amortizacion.png)


Puesto que queremos calcular su coste en 4 años y en 7 años, lo dividiremos en dos:

##### 	4 años

	Primero dividiremos 100% por el número de años deseados para ver si sobrepasa el límite. 100% / 4 = 25%. Es justamente el límite por lo que no hay problema.
	1254,55 * 0.25 = 313,64€. Tocaría amortizar 313,64€ anuales.
	
	
####	7 años

	100% / 7 = 14.29%. Ni el porcentaje (14.29% frente a 25%) ni el número de años (7 frente a 8) sobrepasan los límites, por lo que podemos proceder a realizar la operación.
	1254,55 * 0,1429 = 179,22 €. Tocaría amortizar 179,22€ anuales.
	
	
	
## Ejercicio 2. Usando las tablas de precios de servicios de alojamiento en Internet “clásicos”, es decir, que ofrezcan Virtual Private Servers o servidores físicos, y de proveedores de servicios en la nube, comparar el coste durante un año de un ordenador con un procesador estándar (escogerlo de forma que sea el mismo tipo de procesador en los dos vendedores) y con el resto de las características similares (tamaño de disco duro equivalente a transferencia de disco duro) en el caso de que la infraestructura comprada se usa solo el 1% o el 10% del tiempo.


Para un año de uso de un VPS contratado en, por ejemplo, *ovhcloud.com*, con 2 vCPU, 4GB de RAM, 80GB de SSD y 500Mb/s tráfico ilimitado, el coste sería de 11,13€/mes con 12 meses de permanencia, por lo que serían 133,56€ durante un año.

![VPS](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_1/img/ovhcloud_vps.png)


Para un año de uso de un Servidor Cloud contratado en, por ejemplo, *arsys.com*, con las mismas características que el VPS anterior, el precio se elevaría a los 54€/mes, teniendo un mes gratis, con lo cual, el precio se elevaría a los 594€.

![Cloud Server](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_1/img/arsysCloud.png)


En ninguno de estos dos proveedores de servicio se cobra por tiempo de uso de la infraestructura.


## Ejercicio 3. En general, cualquier ordenador con menos de 5 o 6 años tendrá estos flags. ¿Qué modelo de procesador es? ¿Qué aparece como salida de esa orden? Si usas una máquina virtual, ¿qué resultado da? ¿Y en una Raspberry Pi o, si tienes acceso, el procesador del móvil?


Mi modelo de procesador es un Intel Core i7-4750HQ 3.4GHz Octa-Core

Introducimos la siguiente orden en la terminal: egrep '^flags.*(vmx|svm)' /proc/cpuinfo

En caso de que no liste nada, quiere decir que el procesador no es compatible con esos flags. Como podemos observar, en nuestro caso sí los lista y ello quiere decir que sí posee la funcionalidad de virtualización por hardware


![Flags CPU](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_1/img/flags_CPU.png)


No utilizo máquinas virtuales pero he buscado por internet el procesador de mi móvil (un Qualcomm Snapdragon 660) y al parecer no soporta Virtualización asistida por hardware

![Procesador móvil](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_1/img/snapdragon.png)


## Ejercicio 4. Instalar un hipervisor para gestionar máquinas virtuales, que más adelante se podrá usar en pruebas y ejercicios. Usar siempre que sea posible un hipervisor que sea software libre.

VirtualBox es un hipervisor open source de tipo 2. Es el que tengo instalado y el que llevo usando desde principio de carrera.


![VirtualBox](https://github.com/Megatorpon/IV-Ejercicios-Autoevaluacion/blob/main/Tema_1/img/virtualbox.png)



## Ejercicio 5. Darse de alta en una web que permita hacer pruebas con alguno de los sistemas de gestión de nube libres como los mencionados en los párrafos anteriores, aunque sea temporalmente. Si la prueba es menos de un mes, simplemente anotarlo y dejarlo para el mes de diciembre, más o menos.


Como se comentó en el ejercicio 2, arsys ofrece servidores cloud con 30 días de prueba, por lo que lo dejaré para más adelante.

