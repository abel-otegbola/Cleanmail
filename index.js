const express = require("express")
const fetch = require("node-fetch")
const app = express()


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/contacts", (req, res) => {
    res.render("contacts")
})
app.get("/single", (req, res) => {
    res.render("single")
})
app.get("/bulk", (req, res) => {
    res.render("bulk")
})
app.get("/email-api", (req, res) => {
    res.render("email-api")
})
app.get("/result", (req, res) => {
    res.render("result")
})
app.get("/plans", (req, res) => {
    res.render("manage-plans")
})
app.get("/api/single/:email", (req, res) => {
    const email = req.params.email;
    const key = "0bf36561e7c12161ad9c8ddfb933ee58";
    let url = `http://apilayer.net/api/check?access_key=${key}&email=${email}`
    fetch(url)
    .then(response => response.json())
    .then(data => res.send(data))
})
app.post("/api/multiple", (req, res) => {
    const emails = req.body;
    let emailArray = Object.values(emails)  
    let emailResults = []
    const key = "0bf36561e7c12161ad9c8ddfb933ee58";
    emailArray.forEach(email => {
        let url = `http://apilayer.net/api/check?access_key=${key}&email=${email}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            emailResults.push(data)
            if(emailArray.length == emailResults.length) {
                res.send(emailResults)
            }
        })
    })
})

app.post("/check", async function(req, res, next) {
    const {email} = req.body;

    if (!email) {
        return res.status(400).render("check",{
            message: "Email missing",
            reason: "Email input field empty",
            email
        })
    }

    res.render("check", {email})
})



app.post("/check-bulk", (req, res, next) => {
    const emails = req.body;

    let emailArray = Object.values(emails)    

    res.render("check-bulk", {emailArray})
})

app.use((req, res) => {
    res.render("404", { title: "page not found" })
})

app.listen(port);