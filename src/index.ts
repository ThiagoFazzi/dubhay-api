import express = require('express')
import bodyParser = require('body-parser')
import { SensorController } from './sensor/controller';

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8080

app.use('/sensor', SensorController)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
})