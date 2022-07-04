const express = require("express")
const bodyParser = require("body-parser")
const route = require("./routes/route")
const mongoose = require("mongoose")
const app = express()

app.use(bodyParser.json())
         

mongoose.connect("mongodb+srv://unmesh_dhore:Kundan%4012345@cluster0.szcbzir.mongodb.net/group57Database",{
    useNewUrlParser:true
}).then(()=> console.log("MongoDb Connected")).catch((err)=> console.log(err))

app.use("/", route)

app.listen(process.env.PORT|| 3001, function(){
    console.log("Express App running on Port " + (process.env.PORT|| 3001))
})

