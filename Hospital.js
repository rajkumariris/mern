const express = require("express");

const app = express();

app.use(express.json());


function userMiddleware(req, res,next){
    const username= req.headers.username;
    const pass= req.headers.pass;
  
    if(username!='harkirat' ||  pass!= '123'){
        return res.status(404).json({
            "msg": "you have wrong crednetials"
        })
        return;
      }
      else{
        next();
      }
}
function kidneyMiddleware(req, res,next){
    const kidney=  req.query.kidney;   
    if(kidney!=1 || kidney!=2){
      return res.status(404).json({
          "failure":"kidney failyr"
      })
      return;
    }
    else{
        next();
    }
}
//just middleware is just another function
app.get("/",userMiddleware , kidneyMiddleware , function(req, res){
  res.send("your heart is healthy");
})
app.listen(4000,function(){
    console.log("app listing")
});

