import {pool} from "../models/app.js";

export const getTALLER = async(req,res) => {
  const [rows] = await pool.query('INSERT INTO Usuario ("nombre_usuario", "contraseña") VALUES ("?", "?")')
  res.json(rows)
}