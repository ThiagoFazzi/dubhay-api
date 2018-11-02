//import { Router, Request, Response } from 'express';



const express require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});


/*const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    console.log(req)
    res.send('Hello')
});

router.get('/:id/status/:status', (req: Request, res: Response) => {
    res.send(req.params)
});


router.post('/:id/status/:status', (req: Request, res: Response) => {
    res.send(req.params);
});*/

export const WelcomeController: Router = router;

