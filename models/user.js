const mongoose =require("mongoose");
mongoose.connect("mongodb+srv://doctor123:doctor123@cluster0.nnxbqud.mongodb.net/testapp1"); 

const userSchema= mongoose.Schema({
    image: String,
    email:String,
    name: String
})
module.exports= mongoose.model('user',userSchema)