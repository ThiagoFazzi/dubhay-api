const express = require('express')
const bodyParser = require('body-parser');
//const WelcomeController = require('./controller')

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 8080

var sensors = []


app.get('/', (req, res) => {
	res.send('welcome to API')
})

app.get('/sensor', (req, res) => {
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

app.post('/sensor', (req, res) => {
	
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