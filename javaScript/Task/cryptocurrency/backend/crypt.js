import express from "express"
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/" ,async(req, res)=>{
    
    try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd'
    );
    res.json(response.data);
    
}catch (error) {
         res.status(500).json({ error: 'Failed to fetch data' });

        
        
    }
})

