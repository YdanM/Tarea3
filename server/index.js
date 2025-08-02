import { port } from "./src/utils/keys.js";
import { app } from "./src/main.js";

app.listen(port, () => {
    console.log(`El servidor ha iniciado en el puerto: ${port}`)
});





// //console.log('Hola mundo!');

// //const express = require('express');

// import express from "express";
// const app = express();
// const port = 4000;

// app.get('/', (req, res) => {
//     return res.send('<h1>Hola mundo<h1/>')
// });

// app.listen(port, () => {
//     console.log(`El servidor inicio correctamente en el puerto ${port}`);
// }
// );
