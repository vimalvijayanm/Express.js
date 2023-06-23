const express= require("express")

const router=express.Router()

router.use("/",(req,res,next)=>{
    req.headers['content-type']='application/json'//setting headers in middleware method
    console.log("API call received");
    next();
})

router.get("/",(req,res,next)=>{
    res.send("Headers received "+ req.headers["content-type"]);  
    res.send("get request for users")
     next();
})

router.use("/",(req,res)=>{
    console.log("API call ended");
})

router.get("/user-details/:id",(req,res)=>{
    res.send("get request for selected users "+req.params.id)
})

router.get("/search-by-location/:state/:city",(req,res)=>{
    res.send("get request for selected users "+req.params.state + req.params.city)
})

router.get("/search/:key([0-9]{4})",(req,res)=>{
    res.send("Data captured is "+req.params.key)
})

router.get("/search-username/:key([a-zA-Z]{5})",(req,res)=>{
    res.send("Data captured is "+req.params.key)
})

router.get('*',(req,res)=>{
    
    const resObj={
        statusCode : 404,
        statusMsg : "URL not found"
    }
    res.send(resObj)
})

router.post("/create-user",(req,res)=> {
    res.send("List of users");
});
router.put("/update-user",(req,res)=> {
     res.send("List of users");    
});
router.get("/read-all-users",(req,res)=> {
    res.send("List of users");    
});
router.get("/get-user-details",(req,res)=>{
     const userObj={
         id : 10,
         name : "vimal",
         lastName : "vj",
         status : true
     }
     res.send(userObj);
    })
router.delete("/delete-users",(req,res)=> {
        res.send("List of users");    
    });


module.exports=router;








