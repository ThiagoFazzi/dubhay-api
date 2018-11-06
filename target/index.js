"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const db_1 = require("./db");
const bodyParser = require("body-parser");
const controller_1 = require("./sensor/controller");
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
app.use('/sensor', controller_1.SensorController);
db_1.default()
    .then(_ => app.listen(port, () => console.log(`Listening on port ${port}`)))
    .catch(err => console.error(err));
//# sourceMappingURL=index.js.map