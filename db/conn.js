const mongoose = require("mongoose");
const DB = "mongodb+srv://admin:mqOrHsIkXHhBaFhX@cluster0.kmshkni.mongodb.net/crudmern?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useUnifiedTopology: true,
  
    useNewUrlParser: true,

}).then(() => console.log("Connect")).catch((error)=>{
    console.log("not connected")
});