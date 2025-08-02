import express from "express";
import { get_pizza_tipo, get_pizza_sabor, 
    post_anadir_orden, get_orden_cliente,
     delete_borrar_orden } from "../functions/pizza_functions.js";

export const pizza_rutas = express.Router();

pizza_rutas.get('/', get_pizza_tipo)

pizza_rutas.get("/sabor/:sabor_pizza", get_pizza_sabor);

//izza_rutas.put("/actualizar-orden");

pizza_rutas.post("/añadir-orden", post_anadir_orden);
pizza_rutas.get("/orden-cliente", get_orden_cliente)
 
pizza_rutas.delete("/borrar-orden/:indice", delete_borrar_orden);



//GET: Obtiene un registro
//POST: Crea un registro - guardar
//PUT: Actualiza un registro
//DELETE: Elimina un registro