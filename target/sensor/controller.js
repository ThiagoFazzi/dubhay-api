"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Cors = require("cors");
const router = express_1.Router();
var sensors = [];
var valuesSent = [];
router.get('/', Cors(), (req, res) => {
    console.log(req);
    res.send({ sensors: valuesSent });
});
router.get('/subscribed', Cors(), (req, res) => {
    console.log(req);
    res.send({ sensors: sensors });
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const sensor = valuesSent.filter(s => s.id === id);
    if (!sensor) {
        res.send('not found');
    }
    else {
        res.send({ sensor });
    }
});
router.post('/', Cors(), (req, res) => {
    const sensor = {
        id: req.body.id,
        status: req.body.status,
        type: req.body.type,
        value: req.body.value,
        date: new Date()
    };
    valuesSent.push(sensor);
    res.send('OK');
});
router.post('/new', Cors(), (req, res) => {
    const sensor = {
        id: req.body.macAddres,
        status: 'online',
        type: req.body.type,
        created: new Date()
    };
    sensors.push(sensor);
    console.log(sensor);
    res.send({ sensor });
});
exports.SensorController = router;
//# sourceMappingURL=controller.js.map