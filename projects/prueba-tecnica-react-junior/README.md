# Prueba técnica para Juniors y Trainess de React en Live Coding.
APIs: 
-Facts Random: https://catfact.ninja/fact
-Imagen random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos y muestra una imagen de un gato con la primera palabra del hecho recuperado usando la segunda API.

VAMOS:
1.Recupera un hecho aleatorio de gatos 
2.Recuperar la primera palabra del hecho
3.Muesta una imagen de un gato con la primera palabra

hemos buscado la api correcta:
https://cataas.com/cat/says/hello?fontSize=50&fontColor=red&json=true 
le he adderido json=true
este Seria el Empoint para usar. Y lo vamos a poner de una vez como un template strinc
        `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`