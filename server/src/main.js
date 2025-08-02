import express from "express";
import { pizza_rutas } from "./routers/pizza_routers.js";

export const app = express();

app.use(express.json())

app.use('/', pizza_rutas); //use, agrupa un conjunto de url, para usar las rutas que creamos.