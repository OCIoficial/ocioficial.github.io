---
layout: page
title: Competencia
---

> 
> **_Actualización:_**  El proceso 2020 de la Olimpiada Chilena de Informática ha sufrido modificaciones, y se realizará una única competencia online y remota el día sábado 30 de enero de 2021.
>
---

## Introducción

La Olimpiada Chilena de Informática (OCI) es una competencia individual de programación que desde 2013 busca despertar el interés por la Ciencia de la Computación en estudiantes de entre 7° básico y 4° medio a lo largo del país, además de reconocer y potenciar a talentos jóvenes y acercar la disciplina a grupos pocos representados en el área de la tecnología, con un foco especial en la disminución de la brecha de género en esta área.

La Olimpiada contempla diversas etapas, entre las que se cuentan: talleres de preparación, competencia regional, final nacional, un campamento de verano para los mejores competidores del país (*equipo nacional*) y una competencia entre estos últimos para seleccionar a los 4 participantes que representarán a Chile en la [Olimpiada Internacional de Informática](https://ioinformatics.org/) del año siguiente.

## Requisitos

Pueden participar todos y todas las estudiantes que cumplan con las condiciones:
* Tener nacionalidad chilena
* Asistir a un establecimiento educacional de enseñanza básica o media, o estar inscrito/a para rendir exámenes libres

Adicionalmente, para ser elegible para asistir a la Olimpiada Internacional de Informática, el/la participante debe ser menor de 20 años al 1 de julio del año en que se desarrolle la correspondiente edición de la Olimpiada Internacional.

## Reglas

* Las y los participantes accederán a la competencia por medio de un sistema web (CMS), utilizando un computador con acceso a internet y las credenciales (usuario y password) provistas por la organización de la Olimpiada.
* La competencia tendrá una duración de 4 horas en las que las y los participantes deberán intentar resolver un conjunto de *n* problemas, con *n>=4*.
* Para resolver un problema, cada participante debe escribir un archivo de código (la solución) en alguno de los lenguajes de programación soportados.
* Las soluciones deben ser cargadas y enviadas al CMS para su evaluación y asignación de puntaje.
* Durante la competencia, está estrictamente prohibido:
	* Acceder, directa o indirectamente, a cualquier recurso online excepto aquellos permitidos por los comités Científico y Técnico de la OCI.
	* Usar teléfonos celulares, calculadoras, relojes inteligentes, teclados programables o cualquier otro dispositivo electrónico distinto del computador y los periféricos necesarios para competir.
	* Usar más de un monitor o pantalla.
	* Usar cualquier material de apoyo en formato digital, incluyendo archivos de código fuente previamente escritos por la/el mismo participante.
	* Comunicarse con otros u otras competidoras.
	* Solicitar ayuda en la resolución de los problemas a cualquier persona, ya sea de manera presencial o virtual.
* Durante la competencia, está permitido:
	* Contar con material de apoyo impreso o escrito en papel.
	* Contar con elementos para escribir (lápiz, papel, goma, etc.)
	* Consumir snacks y líquidos en un espacio apto para ello.
	* Contar con una pequeña mascota en el espacio de trabajo (peluche o figura de buena suerte).
	* Imprimir el set de problemas, si existe una impresora disponible.

**Al participar de cualquiera de las fases de la Olimpiada, las y los competidores aceptan las reglas de la competencia. Ante cualquier incumplimiento de estas por parte de un/a participante, así como otros comportamientos no descritos que signifiquen una falta a la honestidad o constituyan una ofensa hacia cualquier miembro de la comunidad, se aplicará la sanción que el Comité Directivo de la OCI estime conveniente, incluyendo la descalificación inmediata y prohibición de participar en futuras competencias.**

### Equipamiento y ambiente de competencia
El equipo del competidor corresponde al computador físico (*desktop* o *laptop*) que el o la participante utilizarán para participar de la Olimpiada. 

Sugerimos que el equipo del competidor cuente con las siguientes características:
* RAM de al menos 4GB (recomendado 8GB o superior)
* Espacio de almacenamiento disponible de al menos 8 GB
* Procesador de al menos 2 cores/4 threads
* Monitor con resolución igual o superior a 1024 x 768
* Sistema Operativo: alguna distribución de Linux (recomendado Ubuntu 20.04)[^1]

Adicionalmente, el equipo del competidor debe contar con el siguiente software:
* Compiladores e intérpretes requeridos según lenguaje de preferencia
	* C++: g++
	* Java: openjdk-8-jdk, openjdk-8-jre
* Opcional: Python2 y/o Python3 (solo como ayuda, dado que Python no es un lenguaje habilitado para enviar soluciones)
* Editores de texto y/o IDEs de preferencia, tales como: Geany, Gedit, Kate, Emacs, Vim, Sublime, Visual Studio Code, Eclipse Java, Eclipse CDT, Netbeans, Codeblocks (verificar que esté instalado xterm porque es necesario para correr los programas dentro de Codeblocks)
* Emulador de terminal, como por ejemplo: Linux console, GNOME terminal, Konsole, Terminator, Kitty, Xterm
* Explorador: Firefox, Chrome o similar

[^1]: El uso de una distribución de Linux no es obligatorio en fases regionales y/o remotas de la Olimpiada; sin embargo, en fases presenciales o posteriores a la final nacional, se espera que cada participante tenga un dominio básico del entorno y utilidades de este tipo de sistemas operativos.

## Modalidad remota para la OCI 2020

Considerando la situación nacional y mundial, la versión 2020 de la OCI se realizará de manera completamente remota y constará de dos rondas que se llevarán a cabo en dos fechas distintas:

- Primera ronda: 19 de diciembre del 2020, 15 a 19 hrs. (GMT-3)
- Segunda ronda: 30 de enero del 2021, 15 a 19 hrs. (GMT-3)

Con excepción de la forma en la que se determinará el puntaje final para cada participante, las fases 1 y 2 corresponden en todos los otros aspectos a las fases regional y final nacional en versiones anteriores de la OCI. Particularmente, el contenido a evaluar en cada fase se mantiene sin modificaciones. El detalle de temas que abarca cada ronda, descripción de la estructura de un problema, consideraciones de implementación y otra información relacionada se encuentra en el [Syllabus de la competencia](https://github.com/OCIoficial/syllabus/releases/download/v2020/oci-syllabus.pdf).

### Lenguajes de programación soportados

En la edición 2020, los participantes podrán enviar soluciones usando C++ o Java.

### Puntajes y ganadores

Para determinar los clasificados al equipo nacional se considerará el puntaje obtenido en ambas competencias. Específicamente, si un participante obtiene un puntaje *P<sub>1</sub>* en la fase 1 y un puntaje *P<sub>2</sub>* en la fase 2, el puntaje final *P* del participante estará determinado por la siguiente fórmula:

*<center>P = max(0,3 × P<sub>1</sub> + 0,7 × P<sub>2</sub> , P<sub>2</sub>)</center>*

Quienes obtengan los 10[^2]  mejores puntajes según lo descrito anteriormente serán declarados ganadores de la competencia nacional y pasarán a conformar el equipo nacional. Las y los seleccionados nacionales recibirán una invitación a participar del training camp OCI para profundizar y adquirir nuevos conocimientos en diferentes tópicos de programación competitiva. La fecha y modalidad de este campamento serán definidas y comunicadas según la contingencia.

----

[^2]: Esta cantidad puede variar según los resultados finales de la competencia.

