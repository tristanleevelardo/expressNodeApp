const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//Add this
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Server Status</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f9;
            color: #333;
          }
          .container {
            text-align: center;
            padding: 20px;
            border: 2px solid #4caf50;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            background-color: #ffffff;
          }
          h1 {
            color: #4caf50;
            font-size: 2.5rem;
          }
          p {
            font-size: 1.2rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Server is Running🚀</h1>
        </div>
      </body>
      </html>
    `);
  });

//connection to MongoDB

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://Agile146658:Agile146658@expressnodedb.bb1w8.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); // Exit if the database connection fails
  });

//Middleware
app.use(cors());
app.use(express.json());

//Import API folder
const submitTalentForm = require('./API/submit')

//Use API
app.use("/submit", submitTalentForm);


// Start the server locally 
// const PORT = 5000;

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

//Start the server Microsoft Azure
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});