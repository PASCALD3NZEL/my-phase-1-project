const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// THIS IS WHERE YOU FIX IT:
const cors = require('cors');
app.use(cors({
    origin: 'https://pascald3nzel.github.io'
}));

// Handle JSON
app.use(express.json());

// Your routes
app.post('/api/requests', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Request received successfully!' });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));