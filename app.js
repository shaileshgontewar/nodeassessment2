
// it will load the express package in our app
const express=require("express");
// creating app object 
const app= express();
app.get("/",function(req,res){
    res.write("Hello Express");
    
})

app.get('/api/main',(req,res)=>{
  res.write("<h2>I am using express</h2>")
  res.write("<h3> HEllo This is express</h3>")
  res.end();
})
app.listen(3000);





//The res.end() function is used to end the response process
// const express = require("express");
// const jsonData = require("./data");
// const app = express();

// app.get("/getUsers1", function (req, res) {
//   res.json(jsonData.users.json1);
// });

// app.get("/getUsers2", function (req, res) {
//   res.json(jsonData.users.json2);
// });

// app.listen(3001);
