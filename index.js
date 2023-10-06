//Imports
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

//Base URL for the API and API key
const app = express();
const port = 3000;
const key = "17257e556043cd5578cb9156a816efb3";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
//Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


//Renders the home page
app.get("/", (req, res) => {
    res.render("index.ejs")
});

 //Retreives the user input from the front end. Sends the userinput to the API and renders index.ejs with the result data.
app.post("/weather", async(req, res) => {
    const userData = req.body.city;
    console.log(userData)
    try {
        const result = await axios.get(`${baseUrl}q=${userData}&appid=${key}&units=metric`);
        res.render("index.ejs", {
            data: result.data,
        })
        console.log(result.data)
    } catch (error) {
        res.render("index.ejs", {
            error: error.message
        })
        console.log(error.message)
    }

});


























app.listen(port, () => {
    console.log("Server is online at port " + port);
});