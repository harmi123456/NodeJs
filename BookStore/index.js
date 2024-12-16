
const express = require("express")
const port = 1001

const app = express()

app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded())

let books = [
    { id: "1", name: "Rich DaD", author: "Robert Kiyosaki", price: "50₹", releasedDate: "1997", image: "/img/Rich_Dad_Poor_Dad.jpg"},
    { id: "2", name: "The Intelligent Investor", author: "Benjamin Graham", price: "60₹", releasedDate: "1949" , image: "/img/investor.jpg" },
    { id: "3", name: "Atomic Habits", author: "James Clear", price: "40₹", releasedDate: "2018", image: "/img/atomic-habit.jpg" },
    { id: "4", name: "The Alchemist", author: "Paulo Coelho", price: "45₹", releasedDate: "1988", image: "/img/alchemist.jpg" },
    { id: "5", name: "Think and Grow Rich", author: "Napoleon Hill", price: "55₹", releasedDate: "1937", image: "/img/think.png" },
    { id: "6", name: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", price: "65₹", releasedDate: "2011", image: "/img/sapiens.jpg" },
    { id: "7", name: "How to Win Friends and Influence People", author: "Dale Carnegie", price: "50₹", releasedDate: "1936", image: "/img/win.jpg" },
    { id: "8", name: "The 5 AM Club", author: "Robin Sharma", price: "40₹", releasedDate: "2018", image: "/img/5 Am.jpg" },
    { id: "9", name: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", price: "55₹", releasedDate: "2016", image: "/img/the.jpg" },
    { id: "10", name: "Ikigai: The Japanese Secret to a Long and Happy Life", author: "Héctor García and Francesc Miralles", price: "50₹", releasedDate: "2017", image: "/img/ikigai.jpg" }

]

app.get("/", (req, res) => {
    res.render("index", {books})
})

app.post("/addData", (req,res) => {
    console.log(req.body)
    req.body.id = String(books.length + 1)
    books.push(req.body)
    res.redirect("/")
}) 

app.get("/editData/:id", (req,res) => {
    let singleData = books.find((item) => item.id == req.params.id)
    res.render("edit", {singleData})
})

app.post("/updateData", (req,res) => {

    books.map((e,i) => {
        if(e.id == req.body.id){
            (e.id = req.body.id),
            (e.name = req.body.name),
            (e.author = req.body.author),
            (e.price = req.body.price),
            (e.releasedDate = req.body.releasedDate)
        } else {
            e;
        }
    })

    res.redirect("/")
})

app.get("/deleteData", (req,res) => {
    console.log(req.query)
    let deleteData = books.filter((e) => e.id !== req.query.id)
    books = deleteData
    res.redirect("/")
})

app.listen(port , (err) => {
    err ? console.log(err) : console.log("server started on : " + port);
    
})