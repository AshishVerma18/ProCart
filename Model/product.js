const mongoose=require("mongoose");
let productSchema=new mongoose.Schema({
    productName:{type:String ,required:true},
    price:{type:Number,required:true}
})
let Product=mongoose.model("product",productSchema);
module.exports=Product;