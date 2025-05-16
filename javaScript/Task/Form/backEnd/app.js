import express from "express"
import cors from "cors"
import fs from "fs"


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends:true}))

 

// a 


app.post("/", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields (name, email, message) are required" });
    }

    console.log("Received data:", { name, email, message });

    // Prepare data to store in local storage (file)
    const dataToStore = { name, email, message, timestamp: new Date().toISOString() };

    // Read existing data from the file (if it exists)
    const filePath = "./localStorage.json";
    let existingData = [];
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        existingData = JSON.parse(fileContent);
    }

    // Append the new data
    existingData.push(dataToStore);

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf-8");

    res.status(200).json({ msg: "Data received and stored successfully", data: dataToStore });
});


 app.listen(3005, () => {
    console.log("server running on http://localhost:3005");
});
