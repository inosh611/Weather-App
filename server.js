
import express from 'express';
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello from server hi");
}); 


app.get("/api",(req,res)=>{
    res.send("I am from API");

});

app.get("/help",(req,res)=>{
    res.send("I am from Help");

});


app.get('*',(req,res)=>{
    res.send("Page not Found");
})





app.listen(3000,()=>console.log("Server is on 3000"));
