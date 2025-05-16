import exp from "express"

const app = exp();


app.use((exp.json()))
app.use(exp.urlencoded({extended:true}));


app.fetch("")