import express from "express";
import db from "./DataBaseConfigure/dbConfigure.js";
import fs from "fs"
import {program} from 'commander'



const app = express();
// Function to parse and insert JSON into MySQL
async function insertData(jsonFile){
 
try{
    const data = JSON.parse(fs.readFileSync(jsonFile,'utf-8'));
    const sql = "insert into records (name , email, age) values (? ,? ,?)"
    for (const item of data){
        await db.execute(sql, [item.name, item.email, item.age]);

    }
    console.log("Data inserted successfully");

}catch(error){
    console.error("error while inserting data:", error.message);
}
}





// Function to fetch data
async function fetchData() {
    try {
        const [rows] = await db.execute('SELECT * FROM records');
        console.table(rows);
    } catch (err) {
        console.error('Error fetching data:', err.message);
    }
}

// Function to update a record by ID
async function updateData(id, name, email, age) {
    try {
        const sql = 'UPDATE records SET name = ?, email = ?, age = ? WHERE id = ?';
        const [result] = await db.execute(sql, [name, email, age, id]);

        if (result.affectedRows === 0) {
            console.log('No record found with the given ID.');
        } else {
            console.log('Record updated successfully!');
        }
    } catch (err) {
        console.error('Error updating data:', err.message);
    }
}




// Function to delete a record by ID
async function deleteData(id) {
    try {
        const sql = 'DELETE FROM records WHERE id = ?';
        const [result] = await db.execute(sql, [id]);

        if (result.affectedRows === 0) {
            console.log('No record found with the given ID.');
        } else {
            console.log('Record deleted successfully!');
        }
    } catch (err) {
        console.error('Error deleting data:', err.message);
    }
}




//CLI commands 
program
.command('insert <jsonFile>')  //node server.js insert data.json
.description('Insert JSON data into MySQL')
.action(insertData);

program
.command('fetch')     //node server.js fetch
.description('Fetch all records from MySQL')
.action(fetchData);


program
.command('update <id> <name> <email> <age>') //node server.js update 1 "John Doe" "john@example.com" 30
.description('Update a record by ID')
.action(updateData);

program
.command('delete <id>')
.description('Delete a record by ID')
.action(deleteData);

program.parse(process.argv);




app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})