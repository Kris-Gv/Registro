import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: '172.21.5.255',  
  user: 'TALLER',       
  password: '1801', 
  database: 'TALLER', 
  port: 3306          
});

pool
    .query('SELECT 1')
    .then(() => console.log('Connected to MySQL'))
    .catch((err) => {
        console.error('Eroor al conectar a la base de datos', err)
    })

    pool.on('error', (err) => {
        console.error('MySQL Pool Error', err)
    })