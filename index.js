const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8080

var sensors = []

app.get('/', cors(), (req, res) => {
	res.send('welcome to API')
})

app.get('/sensor', cors(), (req, res) => {
	res.send({sensors: sensors})
})

app.get('/sensor/:id', (req, res) => {
	const id = req.params.id
	const sensor = sensors.filter(s => s.id === id)
	if(!sensor){
		res.send('not found')
	}else{
		res.send({sensor})
 	}
});

app.post('/sensor', cors(), (req, res) => {
	sensors = []
	const sensor = {
		id: req.body.id,
		status: req.body.status,
		type: 'termometer',
 		value: req.body.temp,
 		date: new Date()
	}
	sensors.push(sensor)
	
	res.send(
 		{
 			sensor: { sensor }	
 		}
 	)
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});