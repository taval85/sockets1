const {io} = require('../server')

/**CONEXIONES DESCONEXIONES */
io.on('connection', (client)=> {

    console.log('Usuario Connectado');

    client.emit('enviarMensaje', {
        usuario: 'Gombo Admin',
        mensaje: 'Bienvenido a esta APP'
    }, function(){
        console.log('Se diapara el callback');
    });

    client.on('disconnect', ()=>{
        console.log('Usuario desconectado');
    });

    // excuchar al cliente

    client.on('enviarMensaje', (data,callback)=>{
       //console.log(mensaje);
            client.broadcast.emit('enviarMensaje',data);

    //    if(mensaje.usuario){
    //         callback({
    //             resp: "Todo OK"
    //         });
    //    }else{
    //     callback({
    //         resp: "Todo salio Mal!!!!!"
    //     });

    //    }
       
    });
});

