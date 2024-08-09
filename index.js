
// const express = require("express");
// const app = express();
// const bodyparser = require('body-parser');
// const port = 3000;
// app.use(express.json());// to parse body


// const users = [{
//     name:"rajkumar",
//     kidneys:[{
//         healthy: true
//     },
//      {
//         healthy: true
//      }]
// }]
// const rajKidneys  = users[0].kidneys;
// const len = rajKidneys.length;
// app.get("/", function(req, res){
// let healthyKidneys =0;
// let unHealthyKidneys =0;
// for(let i =0;i<len;i++){
//     if(rajKidneys[i].healthy){
//         healthyKidneys++;
//     }
//     else{
//         unHealthyKidneys++;
//     }
// }
// res.send({
//     healthyKidneys,
//     unHealthyKidneys

// })
// })

// app.post("/", function(req, res){
//     const newKidney = req.body;
//     users[0].kidneys.push(newKidney);

//     res.send(users);
// })


// app.put("/", function(req,res){
//     for(let i =0;i<len;i++){
//         users[0].kidneys[i].healthy= true;
//     }
//     res.send(users)
// })


// app.delete("/",function(req,res){
//     res.send("deleted")
// })

// app.post("/backendapi", function(req, res){
//     console.log(req.body) // gicing undefined
//     console.log(req.query.message);
//     console.log(req.headers);
//     res.status(401).send({
//         msg:"i love you"
//     });
// })
// app.get("/:filename") :filename says any file with same route

// app.listen(port, function(){
//     console.log(`hello listening at ${port}`)
// })
// const express = require("express");

// const app = express();
// const port = 3001;
// app.use(express.json());

// app.get("/",function(req, res){
//     console.log("hi");
//   res.send("your heart is healthy");
// })
// app.listen(port,function(){
//     console.log("app listing")
// });