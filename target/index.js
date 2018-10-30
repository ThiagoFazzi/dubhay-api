var express = require('express');
var app = express();
const port = 8080;
app.get('/sensor/:id/status/:status', function (req, res) {
    res.send(req.params);
});
app.post('/sensor/:id/status/:status', function (req, res) {
    res.send(req.params);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=index.js.map