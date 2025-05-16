import express from "express"
import cors from "cors";
import {} from "./database/dbConfigure.js"
import user from "./model/user.model.js"


const  app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/user/signUp",async(req,res)=>{
    try {
        const signUp = await user.create({
            name : "kanita",
            email:"kanita@gamil.com",
            password:"12345"
        })
        res.send(signUp)
        
    } catch (error) {
        console.log(error);
        
        res.send(error)
        
    }
})


app.post("/users/register",async(req,res)=>{
    try {

        const {name , email, password} = req.body;
        const result = await new user({name , email, password});
        await result.save();
        res.json({ msg: "User registered successfully" });
    
        
    } catch (error) {
        res.status(500).json({err:"internal error",error})
        
    }
})
 


app.get("/user/login",async(req,res)=>{
    try {
        const data = await user.findOne({password:"123458"});
        if(!data){
            return res.send({err:"invalid password"})
        }
        else{
            return res.send(data)
        }
    
    } catch (error) {
        res.send({error:"internal error"})
    }
})



 app.post("/login",async(req,res)=>{
    try {
        const {email , password} = req.body;
        const data = await user.findOne({email,password});
        if(!data){
            return res.send({err:"invalid password"})
        }
        else{
            return res.send(data)
        }
    
    } catch (error) {
        res.send({error:"internal error"})
    }
})



app.listen(3005,()=>{
    console.log("server statr");
    
})