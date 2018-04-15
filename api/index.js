const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const database = require('./db');

const app = new Koa();
const router = new Router();

const config = {
    port: 9000
};

app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

// App

database.connect()
    .then(() => {
        app.listen(config.port, () => {
            console.log(`Server is listening on port ${config.port}...`);
        });
    })
    .catch(error => {
        console.log('Can\'t connect to the database.');
        console.log(error);
        console.log('Shutting down...');
        process.exit(-1);
    });

// Routes

router.get('/users', async (ctx, next) => {
    ctx.body = await database.findAll('users');
    next();
});

router.post('/users', async (ctx, next) => {
    ctx.body = await database.insertOne('users', ctx.request.body);
    next();
});

router.delete('/users/:id', async (ctx, next) => {
    ctx.body = await database.deleteById('users', ctx.params.id);
    next();
});
