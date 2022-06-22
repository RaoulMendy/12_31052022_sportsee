// imports
const express = require("express");

// instantiate server
const app = express();

// configure routes
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon serveur</h1>')
})

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
