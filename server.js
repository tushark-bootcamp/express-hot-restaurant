// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reservations (DATA)
// =============================================================

var reservations = [
    {
        name: "Aaron",
        phoneNumber: 042211333,
        email: "aaron@app.com",
        id: 112233
    },
    {
        name: "Finch",
        phoneNumber: 041111333,
        email: "finch@app.com",
        id: 34112233
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "book.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});

app.post("/api/makereservation", function(req, res)) {}