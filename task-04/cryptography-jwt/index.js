// Import necessary modules
var http = require('http'); // Import the Node.js HTTP module
const express = require('express'); // Import the Express framework
const app = express(); // Create an Express application
var cookieParser = require('cookie-parser'); // Import the cookie-parser middleware
const bodyParser = require('body-parser'); // Import the body-parser middleware
var jwt = require('jsonwebtoken'); // Import the jsonwebtoken library for JWT authentication
const fs = require('fs'); // Import the file system module
const secret = "arquiteturaWeb"; // Secret key for JWT

// Configure middleware for parsing URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Define a route for the root path '/'
app.get('/', (req, res, next) => {
  res.json({ message: "Everything works fine here!" });
})

// Protected route
app.get('/clientes', verifyJWT, (req, res, next) => {
    console.log("All clients returned!");
    res.status(200).json([{ id: 1, nome: 'Joseph Smith' }]);
}) 

// Login route
app.post('/login', (req, res, next) => {
  if (req.body.user === 'arquiteturaWeb' && req.body.password === '123') {
      // Authentication successful
      const id = 1; // This ID would typically come from the database
      var privateKey = fs.readFileSync('./private.key', 'utf8'); // Read the private key file
      var token = jwt.sign({ id }, privateKey, {
          expiresIn: 300, // Token expires in 5 minutes
          algorithm: "RS256" // SHA-256 hash signature
      }); 
      
      console.log("Logged in and generated token!");
      return res.status(200).send({ auth: true, token: token });
  }
  
  return res.status(401).send('Invalid login!');
})

// Logout route
app.post('/logout', function(req, res) {
    console.log("Logged out and token invalidated!");
    res.status(200).send({ auth: false, token: null });
});

// Function to verify if the JWT is valid
function verifyJWT(req, res, next){
  var token = req.headers['x-access-token']; // Extract the token from headers
  if (!token) 
      return res.status(401).send({ auth: false, message: 'Token not provided.' }); 
  
  var publicKey = fs.readFileSync('./public.key', 'utf8'); // Read the public key file
  jwt.verify(token, publicKey, { algorithm: ["RS256"] }, function(err, decoded) {
      if (err) 
          return res.status(500).send({ auth: false, message: 'Invalid Token.' });
      
      req.userId = decoded.id; 
      console.log("User Id: " + decoded.id)
      next();
  }); 
}    

// Create an HTTP server using Express
var server = http.createServer(app);
server.listen(3000); // Listen on port 3000
console.log("Server listening on port 3000");
