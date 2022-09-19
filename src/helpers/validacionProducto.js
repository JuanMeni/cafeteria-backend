import { check } from "express-validator";
import resultadosValidacion from "./resultadoValidacion";

const validarProducto = [
  check("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El producto debe tener entre 2 y 50 caracteres"),
  check("precio")
    .notEmpty()
    .withMessage("El precio es un valor obligatorio")
    .custom((value) => {
      if (value >= 0 && value <= 9000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre 0 y 9000");
      }
    }),
    // hacer las validaciones para categoria e imagen(al menos con un notempty)
  (req, res, next) => {
    resultadosValidacion(req, res, next);
  },
];

export default validarProducto;
