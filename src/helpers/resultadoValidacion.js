import { validationResult } from "express-validator";

const resultadosValidacion = (req, res, next)=>{
    const errors = validationResult(req)
    // preguntar si tengo errores
    // !=operador not
    if(!errors.isEmpty()){
        return res.status(400).json({
            // errors: errors.mapped() este devuelve el error que ocurre
            errors: errors.array()
        })
    }
    // le digo q continue con el flujo
    next();
}

export default resultadosValidacion;