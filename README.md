# Microservicios-Spring-Boot-Hello-World

En esta guía encontrará el paso a paso y las herramientas para desarrollar una aplicación basada en arquitectura de microservicios, usando springboot para el backend y react para el frontend. Adicionalmente, se encuentran los pasos para desplegarla en un clúster de RedHat Openshift.

### Contenido

1. [Pre-requisitos](#pre-requisitos)
2. [Presentación de la aplicación a desarrollar](#presentación-de-la-aplicación-a-desarrollar)
3. [Desarrollo del backend](#desarrollo-del-backend)
    1. [Creación del proyecto en VSCode]
    2. []
    3. []
    4. []
    5. [Pruebas de las llamadas API usando Postman](#pruebas-de-las-llamadas-api-usando-postman)
4. [Desarrollo del frontend](#desarrollo-del-frontend)

5. [Despliegue de la aplicación](#despliegue-de-la-aplicación)


6. [Autores](#autores)

## Pre-requisitos
- [Postman](https://www.postman.com/downloads/)
- [Clonar este repositorio de forma local, para tener acceso a la carpeta WorkShop](https://github.com/emeloibmco/Microservicios-Spring-Boot-Dev-HelloWold)


## Presentación de la aplicación a desarrollar

## Desarrollo del BackEnd

### Pruebas de las llamadas API usando Postman
Para verificar el adecuado funcionamiento de las APIs creadas, se puede usar el software [postman](https://www.postman.com/downloads/):

1. Ingrese a la aplicación postman y seleccione **Create new collection** en la esquina superior izquierda

<p align="center"><img width="600" src="assets/backend/postman/nuevaColeccion.png"></p>

2. Aparecerá su nueva colección en el manú de la izquierda, al lado del nombre de su nueva colección seleccione los 3 puntos y dé click en **Add Request**

<p align="center"><img width="600" src="assets/backend/postman/addRequest.png"></p>

3. En la parte superior seleccione **GET**, en la barra de direcciones escriba la siguiente URL:
```http://localhost:65230/saludar```
A continuación, repita los pasos 2 y 3, pero esta vez creando un request **POST**

<p align="center"><img width="600" src="assets/backend/postman/get.png"></p>

4. Para probar el funcionamiento de las llamadas **POST** al microservicio de saludo, ingrese al request y seleccione la pestaña **Body**, diligencie los campos de la tabla:
- KEY: Saludo
- VALUE: "Este es un test de saludo"

Dé click en el botón **Send**, si el request se completa de manera correcta aparecerá el mensaje OK en la terminal.

<p align="center"><img width="600" src="assets/backend/postman/postTest.png"></p>

5. Para probar el funcionamiento de las llamadas **GET** al microservicio de saludo, ingrese al request y dé click en el botón **Send**. Si el request se completa de manera correcta, en la terminal aparecerá el texto que incluyó en el post que realizó en el paso anterior.

<p align="center"><img width="600" src="assets/backend/postman/getTest.png"></p>

6. Para probar el microervicio de despedida, se realiza de la misma forma, dé click en los 3 puntos al lado del nombre de su colección y seleccione **Add request**. En la parte superior seleccione **GET**, en la barra de direcciones escriba la siguiente URL:
```http://localhost:65232/adios```

Repita este paso con un request de tipo **POST**

7. Para probar el funcionamiento de las llamadas **POST** al microservicio de despedida, ingrese al request y seleccione la pestaña **Body**, diligencie los campos de la tabla:
- KEY: Despedida
- VALUE: "Chao"

Dé click en el botón **Send**, si el request se completa de manera correcta aparecerá el mensaje OK en la terminal.

8. Para probar el funcionamiento de las llamadas **GET** al microservicio de despedida, ingrese al request y dé click en el botón **Send**. Si el request se completa de manera correcta, en la terminal aparecerá el texto que incluyó en el post que realizó en el paso anterior.

## Desarrollo del FrontEnd

## Despliegue de la Aplicación

## Autores
Equipo *IBM Cloud Tech Sales Colombia*
