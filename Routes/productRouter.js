const express=require("express")
const model=require("../Model/product")
const router=express.Router();

router.get("/",async(req,res)=>{
        try{
            let productData=await Product.find()
            console.log(productData);
            res.status(200).json(productData);

        }
        catch(err){
            console.log(err);
            res.status(500).json({msg:err})

        }

})
/*
API URL : localhost:8000/product/upload
Method: POST
Fields: Product Name, Price
*/
router.post("/upload",async(req,res)=>{
    try{
        let newProduct={productName:req.body.name, price:req.body.price}
        let product=Product(newProduct);
        console.log(product);
        let response=await product.save();
        res.status(200).json({msg:"stored successfully"});
    }
    catch(err){}
})
module.exports =router;