import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { PORT } from './views/config.js';
import { pool } from './models/app.js';
import userRouter from "./routers/userRouter.js";
import registroRouter from "./routers/registroRouters.js"; // Importar la nueva ruta
import morgan from 'morgan';

const app = express();

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'views')));

app.get('/apl/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/apl/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'registro.html'));
});


app.use(morgan('dev'));
app.use(express.json());

// Usar las rutas
app.use('/apl', userRouter);
app.use('/apl', registroRouter);  // Agregar la ruta de registro

app.listen(PORT, () => {
  console.log('Servidor corriendo', PORT);
});