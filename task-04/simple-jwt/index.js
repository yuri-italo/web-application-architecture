// Import required modules
const http = require('http'); // Import the Node.js HTTP module
const express = require('express'); // Import the Express framework
const app = express(); // Create an Express application
const server = http.createServer(app); // Create an HTTP server using the Express app

// Load environment variables from a .env file (dotenv-safe)
require("dotenv-safe").config();

// Import JSON Web Token (JWT) for authentication
const jwt = require('jsonwebtoken');

// Import and configure bodyParser to parse JSON requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Define a route for the root path '/'
app.get('/', (req, res, next) => {
    res.json({ message: "Everything's okay here!" });
})

// Define a route for '/clientes' with JWT verification middleware
app.get('/clientes', verifyJWT, (req, res, next) => {
    console.log(req.userId + ' authenticated'); // Log the authenticated user's ID
    res.json([{ id: 1, nome: 'Joseph Smith' }]);
})

// Define a route for user login
app.post('/login', (req, res, next) => {
    // This check should be done against your database
    if (req.body.user === 'arquiteturaWeb' && req.body.password === '123') {
        // Authentication successful
        const id = 1; // This ID would typically come from the database
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // Token expires in 5 minutes
        });
        return res.json({ auth: true, token: token }); // Respond with the generated token
    }

    res.status(500).json({ message: 'Invalid Login!' }); // Invalid login credentials
})

// Define a route for user logout
app.post('/logout', function (req, res) {
    res.json({ auth: false, token: null }); // Respond with authentication status and null token
})

// Middleware function to verify JWT token in request headers
function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']; // Extract the token from headers
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    // Verify the token with the provided secret
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        // If verification succeeds, store the user ID in the request for later use
        req.userId = decoded.id;
        next(); // Continue processing the request
    });
}

// Start the server and listen on port 3000
server.listen(3000);
console.log("Server listening on port 3000");
