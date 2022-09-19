import mongoose from 'mongoose';

const url = 'mongodb+srv://JuanMeni:37105385zoster@clusterc2i.gn72gyw.mongodb.net/cafec2i'; //db publicada
// const url = 'mongodb://localhost:27017/cafeteriac2i'; base de dato local


mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de dato conectada')
})