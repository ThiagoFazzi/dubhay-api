var express = require('express')
var app = express()

const port = 8080

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
    res.send('POST request to the homepage' + req)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))