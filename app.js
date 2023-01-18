require("dotenv").config();

const  express = require('express')
const app = express();
const mongoose = require("mongoose")
require("./db/conn")
const crudtest = require('../server/Models/userSchema')

const cors = require("cors")
const  mainRoutes = require("./Routes/router")


const port = 8000;
//midlewere
app.use(cors())
app.use(express.json());

app.use(mainRoutes)





app.listen(port,()=>{
    console.log(`server is running start port ${port}`);
})

