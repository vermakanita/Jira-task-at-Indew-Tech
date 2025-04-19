 import express from "express";
 import pool from "./databaseConfigure/dbConfigure.js";
 import bodyParser from "body-parser";

 const app = express();
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 
 //add user
app.post('/addUser', async (req, res) => {   // end point for add user  http://localhost:5000/addUser
    try {
        const { name, email, phone } = req.body;
        const sql = 'INSERT INTO user (name, email, phone) VALUES (?, ?, ?)';

        // Using MySQL2 with a connection pool
        const [result] = await pool.execute(sql, [name, email, phone]);

        res.status(201).json({ message: 'User added successfully', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



 
 




 // 🟢 Insert Borrow Record
 app.post('/borrowBook', async (req, res) => { // end point for borrow book  http://localhost:5000/borrowBook
    try {
        const { user_id, book_id, borrow_date } = req.body;

        // Check if the user exists
        const [user] = await pool.execute('SELECT * FROM user WHERE u_id = ?', [user_id]);
        if (user.length === 0) {
            return res.status(400).json({ error: 'Invalid user_id. User does not exist.' });
        }

        // Check if the book exists
        const [book] = await pool.execute('SELECT * FROM books WHERE b_id = ?', [book_id]);
        if (book.length === 0) {
            return res.status(400).json({ error: 'Invalid book_id. Book does not exist.' });
        }

        // Insert the borrow record
        const sql = 'INSERT INTO borrow_record (user_id, book_id, borrow_date) VALUES (?, ?, ?)';
        const [result] = await pool.execute(sql, [user_id, book_id, borrow_date]);

        res.status(201).json({ message: 'Borrow record added successfully', id: result.insertId });
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).json({ error: err.message });
    }
});


// find userd who borrowed the book in year --

app.get("/borrowedBooks", async(req,res)=>{     // end point for borrowed books   http://localhost:5000/borrowedBooks?year=2024
    try {
                // Log the incoming request 
                console.log("Request received:", req.query);

         // Get year from query parameters (default to current year if not provided)
        const {year} = req.query;
        if(!year) {
            return res.status(400).json({ error: 'Year is required' });
        }
        const sql = `select user.name,books.title  
        from borrow_record 
        join user on borrow_record.user_id = user.u_id
        join books on borrow_record.book_id=books.b_id
        where year(borrow_date) = ?`;
        console.log("Executing SQL:", sql, "with year:", year);


        const [records]= await pool.execute(sql,[year]);
        
                // Log the query result
                console.log("Query result:", records);


        if(records.length === 0) {
            return res.status(404).json({ message: 'No records found for the specified year' });
        }
        res.status(200).json(records);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'An error occurred while fetching borrowed books' });
   
    }

})

// crud Operatio  on books table
// 1. Add a book
// 2. Get all books
// 3. Update a book by ID
// 4. Delete a book by ID

// ✅ Add a book (POST) //   http://localhost:5000/addBook
app.post('/addBook', async (req, res) => {
    try {
         // Destructure the request body to get book details
        // and log the values
        const { title, author, published_year, available_copies } = req.body;

        // log incoming data
        console.log("Request received:", req.body);
        
        const sql = 'INSERT INTO books (title, author, published_year, available_copies) VALUES (?, ?, ?, ?)';
        console.log("Executing SQL:", sql, "with values:", [title, author, published_year, available_copies]);

        const [result] = await pool.execute(sql, [title, author, published_year, available_copies]);

        res.status(201).json({ message: "Book added successfully", id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Get all books (GET) //http://localhost:5000/getBooks
app.get('/getBooks', async (req, res) => {
    try {
        const sql = 'SELECT * FROM books';
        const [books] = await pool.execute(sql);
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Update a book by ID (PUT) // http://localhost:5000/updateBook/1
app.put('/updateBook/:b_id', async (req, res) => {
    try {
        const { title, author, published_year, available_copies } = req.body;
        const { b_id } = req.params;

        const sql = 'UPDATE books SET title = ?, author = ?, published_year = ?, available_copies = ? WHERE b_id = ?';
        const [result] = await pool.execute(sql, [title, author, published_year, available_copies, b_id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: "Book updated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ Delete a book by ID (DELETE)  //http://localhost:5000/deleteBook/3
app.delete('/deleteBook/:b_id', async (req, res) => {
    try {
        const { b_id } = req.params;

        const sql = 'DELETE FROM books WHERE b_id = ?';
        const [result] = await pool.execute(sql, [b_id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// ✅ Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});





 