"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entity_1 = require("./entity");
const Cors = require("cors");
const router = express_1.Router();
router.get('/', Cors(), (req, res) => {
    entity_1.default.find()
        .then(sensors => res.send({ sensors: sensors }))
        .catch(error => console.log(error));
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    entity_1.default.findOne({ where: { id: id } })
        .then(sensor => res.send({ sensor }))
        .catch(error => console.log(error));
});
router.patch('/:id', Cors(), (req, res) => {
    const id = req.body.id;
    const update = req.body;
    entity_1.default.findOne(id)
        .then(sensor => {
        if (sensor) {
            entity_1.default.merge(sensor, update).save()
                .then(s => {
                console.log(s.value);
                res.send(s);
            })
                .catch(error => console.log(error));
        }
    }).catch(error => console.log(error));
});
router.post('/new', Cors(), (req, res) => {
    if (req.body.macAddres) {
        const sensor = req.body;
        entity_1.default.save(sensor)
            .then(sensor => res.send({ sensor }))
            .catch(error => console.log(error));
    }
});
exports.SensorController = router;
//# sourceMappingURL=controller.js.map