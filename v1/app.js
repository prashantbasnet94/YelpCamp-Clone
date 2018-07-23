var express = require("express");
var app=express();
app.set("view engine","ejs");


var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

 

app.get("/",function(req,res){
   res.render("landing") 
});
 var campgrounds=[
            {name:'california',image:'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_homepage_spring2018_bacararesortspa_supplied-16_1280x640.jpg'},
            {name:'california',image:'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_homepage_spring2018_bacararesortspa_supplied-16_1280x640.jpg'},  
            {name:'california',image:'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_homepage_spring2018_bacararesortspa_supplied-16_1280x640.jpg'},
            {name:'california',image:'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_homepage_spring2018_bacararesortspa_supplied-16_1280x640.jpg'},
            {name:'california',image:'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_homepage_spring2018_bacararesortspa_supplied-16_1280x640.jpg'},  
            {name:'california',image:'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_homepage_spring2018_bacararesortspa_supplied-16_1280x640.jpg'},
            {name:'california',image:'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_homepage_spring2018_bacararesortspa_supplied-16_1280x640.jpg'},
            {name:'california',image:'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_homepage_spring2018_bacararesortspa_supplied-16_1280x640.jpg'},  
            {name:'california',image:'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_homepage_spring2018_bacararesortspa_supplied-16_1280x640.jpg'}

];
app.get("/campgrounds",function(req,res){
    
   
    res.render("campground",{campgrounds:campgrounds})
})


app.post("/campgrounds",function(req,res){
    
    var name =req.body.name;
    var image=req.body.image;
    var newCampground={name:name,image:image}; //making in object form
    campgrounds.push(newCampground);
    res.redirect("/campgrounds")
   //get data from form and add to campground array
   //redirect back to campground 
});


app.get("/campgrounds/new",function(req,res){
   res.render("new"); 
});

app.listen(process.env.PORT,process.env.IT,function(req,res){
   console.log("the server has started!") 
});