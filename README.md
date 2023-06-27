¿Qué sucedio al usar async y await?
Al emplear la sintaxis sincrónica async/await, tenemos la capacidad de aguardar a que las funciones que devuelven promesas se resuelvan previamente a proseguir con la ejecución del código. Mediante el empleo de la palabra clave await, se detiene la ejecución hasta que las promesas se resuelvan o rechacen. Por otro lado, 

¿Qué sucedio al usar el método then()?
la utilización del procedimiento then() nos otorga la capacidad de concatenar llamadas a funciones que devuelven promesas y asignar funciones de callback que se ejecutan al resolverse o rechazarse las promesas.

¿Qué diferencias encontraste entre async, await y el método then()?
La principal disparidad entre async/await y el método then() radica en la manera de redactar el código y su estructura. async/await proporciona una manera más intuitiva y legible de aguardar a la resolución de las promesas, lo cual facilita la comprensión del flujo de ejecución. En contraste, el método then() emplea un enfoque basado en callbacks, lo cual puede dar lugar a una estructura de código más compleja y menos clara.