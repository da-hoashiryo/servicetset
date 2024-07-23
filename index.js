const express = require('express');
const app = express();
const port = process.env.PORT || 8443;

app.get('/test', (req, res) => {
    res.send('<h1>Request Received</h1><p>Your request has been successfully received.</p>');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
