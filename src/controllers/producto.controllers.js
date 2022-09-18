import Producto from "../models/producto";

export const crearProductos = async(req, res)=>{
    try {
        console.log(req.body);
        // validaciones
        // crear un objeto para guardar en la base de dato
        const productoNuevo = new Producto({
            nombreProducto: req.body.nombreProducto,
            imagen:req.body.imagen,
            precio: req.body.precio,
            categoria: req.body.categoria
        });
        // guardar efectivamente en la base de dato
        await productoNuevo.save()
        // enviar respuesta al frontend
        res.status(201).json({
            mensaje: 'El producto se creo exitosamente'
        })
        // si algo falla tambien enviar una respuesta
         
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'El producto enviado no pudo ser creado'
        })
    } 
}

export const listaProductos = (req, res)=>{
    res.send('enviar lista de productos')
}

export const obtenerProducto = (req, res)=>{
    res.send('Aqui envio un obj producto')
}
export const borrarProducto = (req, res)=>{
    res.send('Aqui se borra un producto')
}
export const editarProducto = (req, res)=>{
    res.send('Aqui edito un producto')
}