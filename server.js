const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // Allow requests from anywhere, especially your GitHub Pages
app.use(express.json());  // Parse JSON bodies

const PORT = process.env.PORT || 3000;

app.post('/api/requests', (req, res) => {
    console.log(req.body);  // Debug submitted data

    // Respond with valid JSON
    res.json({ message: "Request received successfully!" });
});

app.get('/', (req, res) => {
    res.send('Borehole Request Backend is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));