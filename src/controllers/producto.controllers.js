import Producto from "../models/producto";

export const crearProductos = async (req, res) => {
  try {
    console.log(req.body);
    // validaciones
    // crear un objeto para guardar en la base de dato
    const productoNuevo = new Producto({
      nombreProducto: req.body.nombreProducto,
      imagen: req.body.imagen,
      precio: req.body.precio,
      categoria: req.body.categoria,
    });
    // guardar efectivamente en la base de dato
    await productoNuevo.save();
    // enviar respuesta al frontend
    res.status(201).json({
      mensaje: "El producto se creo exitosamente",
    });
    // si algo falla tambien enviar una respuesta
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El producto enviado no pudo ser creado",
    });
  }
};

export const listarProductos = async (req, res) => {
  try {
    // buscar en la base de datos la collection de productos
    const listaProductos = await Producto.find();
    // enviar la respuesta
    res.status(200).json(listaProductos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los productos"
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    // buscar en la base de datos la collection de productos
    const productoBuscado = await Producto.findById(req.params.id);
    // enviar la respuesta
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los productos"
    });
  }
};
export const borrarProducto = async(req, res) => {
    try {
        // buscar un producto por id en la collection de productos de BD y luego borrar
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'El producto fue borrado correctamente'
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error al intentar borrar el producto"
        })
    }
};
export const editarProducto = (req, res) => {
  res.send("Aqui edito un producto");
};
