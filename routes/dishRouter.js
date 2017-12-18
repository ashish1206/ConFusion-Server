const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end('will send all the dishes to you!');
})

.post((req, res, next) => {
    res.end('will add the dish: '+req.body.name+
    ' with details: '+req.body.description);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('put operation not valid');
})

.delete((req, res, next) => {
    res.end('Deleting all the dishes!');
});

dishRouter.route('/:dishId')
.get((req, res, next) => {
    res.end('will send details of the dish: '
    + req.params.dishId+' to you.');
})

.post((req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not valid');
})

.put((req, res, next) => {
    res.write('updating the dish: '+
    req.params.dishId);
    res.end('will update the dish: '+ req.body.name+
    'with details: '+req.body.discription);
})

.delete((req, res, next) => {
    res.end('will delete the dish with id: '+
    req.params.dishId);
});

module.exports = dishRouter;