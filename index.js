const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
console.log("lllllllllll");
var abc;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`)
})