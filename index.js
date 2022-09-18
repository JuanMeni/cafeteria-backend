// const express = require('express');
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// instancia de express
const app = express();

// queremos tomar un puerto de la pc
app.set('port', process.env.PORT || 4000);

// quiero que mi backend escuche el puerto creado
app.listen(app.get('port'), ()=>{

    console.log('Estamos en el puerto ' + app.get('port'));
})

// middlewares
app.use(morgan('dev')); //da informacion en la terminal
app.use(cors()); //permite recibir peticiones remotas de otras pc
// los dos middlewares sgtes. sirven para procesar un obj json
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//cargar un archivo estatico
app.use(express.static('./public'));



// rutas para peticiones
// app.get('/',(req, res)=>{
//     res.send('primera peticion get')
// })
app.get('/prueba',(req, res)=>{
    res.send('otra peticion get')
})

// app.post('/')