const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const leadersRouter = express.Router();

leadersRouter.use(bodyParser.json());

leadersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end('will send all the leaders to you!');
})

.post(authenticate.verifyUser, (req, res, next) => {
    res.end('will add the leader: '+req.body.name+
    ' with details: '+req.body.description);
})

.put(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('put operation not valid');
})

.delete(authenticate.verifyUser, (req, res, next) => {
    res.end('Deleting all the leaders!');
});

leadersRouter.route('/:leaderId')
.get((req, res, next) => {
    res.end('will send details of the leader: '
    + req.params.leaderId+' to you.');
})

.post(authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not valid');
})

.put(authenticate.verifyUser, (req, res, next) => {
    res.write('updating the leader: '+
    req.params.leaderId);
    res.end('will update the leader: '+ req.body.name+
    'with details: '+req.body.discription);
})

.delete(authenticate.verifyUser, (req, res, next) => {
    res.end('will delete the leader with id: '+
    req.params.leaderId);
});

module.exports = leadersRouter;