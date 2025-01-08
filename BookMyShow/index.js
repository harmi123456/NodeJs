const express = require("express");
const port = 1006;
const app = express ();
const db = require("./Config/db")
const schema = require ("./model/firstSchema")
const path = require ("path");
const fs = require ("fs");

app.set("view engine" , "ejs")
app.use(express.urlencoded()); 

app.use (express.static(path.join(__dirname,"public")));
app.use ("/uploads",express.static(path.join(__dirname,"uploads")));

const multer = require("multer");

const Storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"uploads/");
    },
    filename:(req,file,cb) => {
        cb(null,file.fieldname +" " + Date.now());
    }
});

const upload = multer({ storage : Storage}).single("image");

app.get ("/", async (req,res) =>{ 
     data = await schema.find({});
     res.render("index", {data});
 });

//  app.get ("/about",async (req,res) => {
//      data = await schema.find({});
//     res.render("about", {data});
//  })

 app.post("/addData",upload,async (req ,res) => {
   // console.log(req.file)
     req.body.image = req.file.path;
    await schema.create (req.body)
    .then(data => {
        res.redirect("/")
    })
     // let data =await schema.create(req.body);
    // data && res.redirect("/");        // this is second understand trik
 });



 app.get("/deleteData",async (req ,res) => {
    let singleData = await schema.findById(req.query.id);
    fs.unlinkSync(singleData.image);


    await schema.findByIdAndDelete(req.query.id).then((data) => {
        res.redirect("/");
        });
 })

 app.get("/editData" , async (req,res) =>{
    // console.log(req.query);
   data = await schema.findById(req.query.id);
    // console.log(data);
    
    res.render("edit", {data});
    });


app.post ("/updateData",upload, async (req,res) => {
    let img = "";
    let singleData = await schema.findById(req.body.id);
    req.file ? (img = req.file.path) : (img = singleData.image);
    req.file && fs.unlinkSync(singleData.image)
    req.body.image = img;

    await schema.findByIdAndUpdate(req.body.id,req.body)
    .then((data) => {
        res.redirect("/");
    });
})


app.listen (port,(err)=>{
    err ? console.log (err) : console.log(`Server started: http://localhost:${port}`);
})
