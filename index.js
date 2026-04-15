const express=require("express");
const app=express();
const port =8080;
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));



app.listen(port,()=>{
    console.log("server is working");
})

app.get("/",(req,res)=>{
    res.send("server is working");
})

app.get("/user",(req,res)=>{
res.render("server.ejs");
})