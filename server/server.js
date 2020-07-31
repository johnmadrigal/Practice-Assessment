const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use('/assets/static', express.static(path.join(__dirname, '../assets/static')))
app.get('/', (req,res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))