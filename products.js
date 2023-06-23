const express= require("express")

const router=express.Router()

//products
router.get("/",(req,res)=>{
    res.send("get request for products")
})

//products//get-product-details
router.get("/get-product-details",(req,res)=>{
    res.send("get request for selected products")
})

router.post("/create-products",(req,res)=> {
    res.send("create products");
});
router.put("/update-products",(req,res)=> {
     res.send("update products");    
});
router.get("/read-all-products",(req,res)=> {
    res.send("read products");    
});
router.get("/get-details",(req,res)=>{
     const userObj={
         id : 10,
         name : "vimal",
         lastName : "vj",
         status : true
     }
     res.send(userObj);
    })
router.delete("/delete-products",(req,res)=> {
        res.send("delete products");    
    });

module.exports=router;