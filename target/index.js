"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const controller_1 = require("./sensor/controller");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
app.use('/sensor', controller_1.SensorController);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
//# sourceMappingURL=index.js.map