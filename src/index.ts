import 'reflect-metadata'
import express = require('express')
import setupDb from './db'
import bodyParser = require('body-parser')
import { SensorController } from './sensor/controller';

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8080

app.use('/sensor', SensorController)

setupDb()
.then(_ =>
  app.listen(port, () => console.log(`Listening on port ${port}`))
)
.catch(err => console.error(err))

