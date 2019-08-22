import * as Router from 'koa-router'

 let router = new Router();

// index
router.get('/', (ctx) => {
  ctx.body = 'Hello RAP!'
});



export default router
