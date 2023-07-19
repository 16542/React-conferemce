const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
const Conference = require("../Server/Routes/Conference")
const Speaker=require("../Server/Routes/Speaker")
dotenv.config()
const port = process.env.PORT || 5000
const app  = express() ; 
app.use(express.json()) ; 
app.use(cors())
app.use("/conference"   , Conference)
app.use("/speaker" , Speaker)
app.listen(port , ()=>{
  console.log(`the server is running on port ${port} successfuly ...`)
})







