import { pizza_db, usuario } from "../database/pizza_db.js";

// import express from "express";
// const app = express();

//export const tipo_pizza = Object.keys(pizza_db);//Me devuelve las claves del dicionario.
//export const sabores = Object.values(pizza_db)  //Me devuelve los valores del diccionario.
                                                //Se usa cuando se va a trabajar con diccionarios.


export const get_pizza_tipo = (req, res) => {
    const pizza_tipo = Object.keys(pizza_db);

    return res.send({
        'values' : pizza_tipo, "error" : ''
    }) //devuelce un objeto json con el tipo de la pizza por el "object.key"
}

// export const get_pizza_tipo = (req, res) => {
//     //object.key > devuelve la clave del diccionario
//     //object.values > devuelve los valores del diccionario

//     return res.send({
//         'Tipo' : tipo_pizza,
//         'sabor' : sabores,
//         'error' : ''
//     })
// }

export const get_pizza_sabor = (req, res) => {
    
    const sabor_pizza = Object.values(pizza_db)

    if (sabor_pizza===undefined) {
        return res.send({
            values : sabor_pizza,
            error : "No se encontro dicha consulta"
        })
    } else {
        return res.sendStatus(200).send({'values' : sabor_pizza, 'error' : ''})
    }
}

export const post_anadir_orden = (req, res) => {
    
   // console.log(req.body)

    const data = req.body

    // console.log(data.sabor_pizza)

    // console.log(data.pizza_tipo)

  if (Object.keys(pizza_db).includes(data.pizza_tipo)) {

    usuario.push(data)

    return res.send({
        values : "",
        error : ""
    })} else {
        return res.send({
            values : "",
            error : "No se encontro dicha consulta"
        })
    }

    // console.log(pizza_db[data.pizza_tipo].array.forEach(element => {
    //     if (element==data.sabor_pizza) {
    //         return true;
    //     }
    // });)
}

export const get_orden_cliente = (req, rea) => {
    return res.send({
        values : usuario,
        error : ''
    })
}

export const delete_borrar_orden = (req, res) => {

    try {
        const indice = req.params.indice;

    usuario.splice(indice, 1);

    return res.send({
        values : 'true',
        error : ''
    })
        
    } catch (error) {
        return res.send({
            values : 'false',
            error : 'error'
        })
    }
}