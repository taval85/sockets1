var socket = io();

   // eventos ON son para escuchar  y EMIT  para enviar
   socket.on('connect', function(){
       console.log('Conectado al servidor');
   })

   socket.on('disconnect', function() {
        console.log('Perdimos conexion con el servidor');
    });

    socket.on('enviarMensaje', function(mensaje){
        console.log('Servidor: ', mensaje);
    });

    socket.emit('enviarMensaje',{
        usuario: 'Taval',
        mensaje: 'Buenos dias Gilipollas'
    }, function(resp){
        console.log('Respuesta  server: ',resp);
    });
