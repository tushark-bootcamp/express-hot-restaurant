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
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/book", function (req, res) {
    res.sendFile(path.join(__dirname, "book.html"));
});

// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});

app.post("/api/makereservation", function(req, res) {
    var newReservation = req.body;
    //newReservation.routeName =
    // Validate if the max no of reservations are filled; add a reservation if slots remaining 
    reservations.push(newReservation);
    console.log(newReservation);
    res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });