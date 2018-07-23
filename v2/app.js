var express = require("express");
var app=express();
app.set("view engine","ejs");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yelp_camp');
app.use(express.static("public"));

var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

 

//app schemeama

var campSchema =new  mongoose.Schema({

    name: String,
    image : String,
    discription: String
});

//model
var db= mongoose.model("db",campSchema);
 /*
db.create({
    name:"california",
    image :"http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_homepage_spring2018_bacararesortspa_supplied-16_1280x640.jpg",
    discription:"Every one should visit this place once in thier life!!!"
},function(err,db){
    if(err){
        console.log(err)
    }else{
        console.log(db);
    }
}); 
*/
app.get("/",function(req,res){
   res.render("landing") 
});
 
app.get("/campgrounds",function(req,res){
    
    db.find({},function(err,db){
        if(err){
            console.log(err);
        }else{
            res.render("index",{campgrounds:db});
            console.log(db);
        }
    })
   
    
})


app.post("/campgrounds",function(req,res){
    
    var submitName =req.body.name;
    var submitImage=req.body.image;
    var submitDescrition=req.body.discription;
    db.create({
        name: submitName,
        image: submitImage,
        discription:submitDescrition
        
    },function(err,data){
       if(err){
           console.log(err);
       } else{
           console.log(data)
       }
    });
    var newCampground={name:submitName,image:submitImage,description:submitDescrition}; //making in object form
   
    res.redirect("/campgrounds")
   //get data from form and add to campground array
   //redirect back to campground 
});

app.get("/campgrounds/new",function(req,res){
   res.render("new"); 
});
//show 
app.get("/campgrounds/:id",function(req, res) {
    
    
    db.findById(req.params.id,function(err,foundCampGround){
        if(err){
            console.log(err)
        }else{
            console.log("\n");
            console.log(foundCampGround);
             res.render("show",{ database:foundCampGround });
        }
    });
    req.param.id;
    
   /* res.send("this will be the show page !");*/
  
});


app.listen(process.env.PORT,process.env.IT,function(req,res){
   console.log("the server has started!") 
});