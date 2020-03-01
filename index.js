const Redis = require('ioredis');
const Koa = require('koa');
const Router = require('koa-router');
const ip = require('ip');

const router = new Router();
const app = new Koa();

// const redis = new Redis(`redis://127.0.0.1:6379/0`);
const redis = new Redis(process.env.REDIS_HOST);

router.get('/', async (ctx, next) => {
  await next();
  await redis.incr('pv');
  const current = await redis.get('pv');
  ctx.body = `current pv: ${current}, ${ip.address()}`;
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
