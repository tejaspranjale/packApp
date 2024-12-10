const express = require('express')
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the packApp!');
});

app.get('/about', (req, res) => {
    res.send('Nothing about me!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})