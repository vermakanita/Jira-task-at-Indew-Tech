const express = require('express');
const path = require('path');
const fs = require('fs')
const cors = require('cors');


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.post('/create', (req, res) => {
    const { filename, disc } = req.body;
    console.log(filename, disc)
    // Validate request body
    if (!filename || !disc) {

        return res.status(400).send("Filename and description are required.");
    }

    fs.writeFile(`${__dirname}/files/${filename}.txt`, `${disc}`, (err) => {
        console.log(__dirname, __filename)
        if (err) {
            console.error(err);
            return res.status(500).send("Error writing file.");
        }
        else {
            console.log("done")
            
            
            return res.status(201).send("successfully writing file.");
        }
    })
}

)


app.get('/get', (req, res,) => {
    const folderPath = path.join(__dirname, 'files')

    fs.readdir(folderPath, (err, files) => {
        console.log(__dirname)
        if (err) {
            console.error(err);
            return res.status(500).send("Error riding file.");
        }

        const fileContents = {};
        let filesRead = 0;
        if (files.length === 0) {
            return res.status(200).send("No files found in the directory")
        }
        files.forEach((file) => {
            const filePath = path.join(folderPath, file);
            fs.readFile(filePath, 'utf-8', (err, data) => {
                if (err) {
                    console.error(err)
                    fileContents[file] = "error reding file";
                }
                else {
                    fileContents[file] = data;
                }
                filesRead++;
                if (filesRead === files.length) {
                    //all files read once
                    res.status(200).json(fileContents);
                }
            })
        })

    })

})







app.delete("/delete", (req, res) => {
    const { filename } = req.body;

    if (!filename) {
        // alert("filename is required")
        return res.status(400).json({ err: "filename is required" })

    }
    const filePath = path.join(__dirname, 'files', `${filename}`);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({err:"File not found."});
        }




        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({error:"Error deleting file"})

            }
            else {
                 res.status(200).json({ message: "File deleted successfully." });
            }
        })
    })
})






app.patch("/edit", (req, res) => {
    const { filename, newContent } = req.body;
    const { mode } = req.query;

    if (!filename || !newContent) {
        alert("filename and newContent is required")
        return res.status(400).json({ err: "filename and newContent is required" })

    }
    const filePath = path.join(__dirname, 'files', `${filename}`);

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send("File not found.");
        }


        if (mode === "append") {
            //Append file
            fs.appendFile(filePath, `\n${newContent}`, (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send("Error deleting file")

                }

                res.status(200).send("File append successfully.");
            });
        } else {
            //Owerright the file
            fs.writeFile(filePath, newContent, (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send("Error editing file.");
                }
                res.status(200).send("File edited successfully.");

            })
        }

    
    })

})


app.listen(3000, () => {
    console.log("server start on 3000");

})




















