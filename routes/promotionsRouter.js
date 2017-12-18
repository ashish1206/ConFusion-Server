const express = require('express');
const bodyParser = require('body-parser');

const promotionsRouter = express.Router();

promotionsRouter.use(bodyParser.json());

promotionsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end('will send all the promotions to you!');
})

.post((req, res, next) => {
    res.end('will add the promotion: '+req.body.name+
    ' with details: '+req.body.description);
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('put operation not valid');
})

.delete((req, res, next) => {
    res.end('Deleting all the promotions!');
});

promotionsRouter.route('/:promotionId')
.get((req, res, next) => {
    res.end('will send details of the promotion: '
    + req.params.promotionId+' to you.');
})

.post((req, res, next) => {
    res.statusCode = 403;
    res.end('post operation not valid');
})

.put((req, res, next) => {
    res.write('updating the promotion: '+
    req.params.promotionId);
    res.end('will update the promotion: '+ req.body.name+
    'with details: '+req.body.discription);
})

.delete((req, res, next) => {
    res.end('will delete the promotion with id: '+
    req.params.promotionId);
});

module.exports = promotionsRouter;