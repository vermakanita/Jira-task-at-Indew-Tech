 

import mysql from 'mysql2/promise'; // Use promise-based MySQL2

// ✅ Database connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library_system', // Your database name
    
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;