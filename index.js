const express = require('express')
const app = express();
const PORT = 3004;

// first API response
app.get('/', (req, res) => {
    res.send('Hello World! This is my first DOCKER session!');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})