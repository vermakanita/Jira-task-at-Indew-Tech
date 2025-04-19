import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get("/time", (req, res) => {
    res.send("it is time route!");
});
app.get("/hello", (req, res) => {
    res.send("Hello from Express.js!");
});



app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})



