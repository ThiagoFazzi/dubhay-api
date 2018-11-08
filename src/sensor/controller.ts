import { Router, Request, Response } from 'express';
import Sensor from './entity';
import   Cors  = require('cors')

const router: Router = Router();
/*
interface Sensor {
    id: string,
    status: string,
    type: string,
    value?: number,
    date?: Date,
    created?: Date
}

var sensors: Array<Sensor> = []
var valuesSent: Array<Sensor> = []
*/

//get all sensors measures    Sensor.find()
router.get('/', Cors(), (req: Request, res: Response) => {
    //console.log(req)
    Sensor.find()
    .then(sensors => res.send({sensors: sensors}))
    .catch(error => console.log(error))
})

//get all sensors are subscribed to the API
//router.get('/subscribed', Cors(), (req: Request, res: Response) => {
//    console.log(req)
//    res.send({sensors: sensors})
//})

//get especific sensor measure by ID
router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id
    Sensor.findOne({where: { id: id}})
    .then(sensor => res.send({sensor}))
    .catch(error => console.log(error))
});


//post sensors measures - USE FOR SENSORS  
router.patch('/:id', Cors(), (req: Request, res: Response) => {
  
  const id = req.body.id
  const update: Partial<Sensor> = req.body
  
  Sensor.findOne(id)
  .then(sensor => {  
    if (sensor){
      Sensor.merge(sensor, update).save()
      .then(s => {
        console.log(s.value)
        res.send(s)
      })
      .catch(error => console.log(error))
    }
  }).catch(error => console.log(error))
});


//Sensors subscribe to API
router.post('/new', Cors(), (req: Request, res: Response) => {
  if(req.body.macAddres){
    const sensor: Sensor = req.body
    Sensor.save(sensor)
    .then(sensor => res.send({sensor}))
    .catch(error => console.log(error))
  }
});

export const SensorController: Router = router;