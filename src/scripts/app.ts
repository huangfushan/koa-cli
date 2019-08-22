import * as session from 'koa-generic-session' // 通用的 session 中间件，可结合 mongodb、redis等使用
import * as redisStore from 'koa-redis' // redis 缓存
import * as Koa from 'koa'
import router from '../routes'
import config from '../config'

const app = new Koa();

app.keys = config.keys;
app.use(session({
    store: redisStore({
        // Options specified here
    })
}));

app.use(router.routes());

export default app
