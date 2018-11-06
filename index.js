const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8080

var sensors = []
var valuesSent = []

app.get('/', cors(), (req, res) => {
	res.send('welcome to API')
})

app.get('/sensor', cors(), (req, res) => {
	res.send({sensors: valuesSent})
})

app.get('/sensor/subscribed', cors(), (req, res) => {
	res.send({sensors: sensors})
})

app.get('/sensor/:id', (req, res) => {
	const id = req.params.id
	const sensor = valuesSent.filter(s => s.id === id)
	//const sensor = valuesSent.map(s => s.id)
	if(!sensor){
		res.send('not found')
	}else{
		res.send({sensor})
 	}
});

app.post('/sensor', cors(), (req, res) => {
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

app.post('/sensor/new', cors(), (req, res) => {

	const sensor = {
		id: req.body.macAddres,
		status: 'online',
		type: req.body.type,
 		created: new Date()
	}
	console.log(sensor)
	sensors.push(sensor)
	
	res.send({ sensor })
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});