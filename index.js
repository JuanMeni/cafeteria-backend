// const express = require('express');
import express from 'express';

// instancia de express
const app = express();

// queremos tomar un puerto de la pc
app.set('port', process.env.PORT || 4000);

// quiero que mi backend escuche el puerto creado
app.listen(app.get('port'), ()=>{

    console.log('Estamos en el puerto ' + app.get('port'));
})
