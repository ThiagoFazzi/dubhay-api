import { Router, Request, Response } from 'express';
import { Sensor } from './entity';
import   Cors  = require('cors')

const router: Router = Router();

var sensors: Array<Sensor> = []
var valuesSent: Array<Sensor> = []

//get all sensors measures
router.get('/', Cors(), (req: Request, res: Response) => {
    console.log(req)
	res.send({sensors: valuesSent})
})

//get all sensors are subscribed to the API
router.get('/subscribed', Cors(), (req: Request, res: Response) => {
    console.log(req)
    res.send({sensors: sensors})
})

//get especific sensor measure by ID
router.get('/:id', (req: Request, res: Response) => {
	const id = req.params.id
	const sensor = valuesSent.filter(s => s.id === id)
	//const sensor = valuesSent.map(s => s.id)
	if(!sensor){
		res.send('not found')
	}else{
		res.send({sensor})
 	}
});


//post sensors measures - USE FOR SENSORS  
router.post('/', Cors(), (req: Request, res: Response) => {
	
	const sensor = {
		id: req.body.id,
		status: req.body.status,
		type: req.body.type,
 		value: req.body.value,
 		date: new Date()
	}
	valuesSent.push(sensor)
	
	res.send('OK')
});


//Sensors subscribe to API
router.post('/new', Cors(), (req: Request, res: Response) => {

	const sensor = {
		id: req.body.macAddres,
		status: 'online',
		type: req.body.type,
 		created: new Date()
	}
	sensors.push(sensor)
    console.log(sensor)
    
	res.send({ sensor })
});

export const SensorController: Router = router;