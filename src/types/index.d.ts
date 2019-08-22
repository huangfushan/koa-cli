import { ISequelizeConfig } from "sequelize-typescript"
import { RedisOptions } from "koa-redis"

declare interface RedisAndClusterOptions extends RedisOptions {
  isRedisCluster?: boolean
  nodes?: object[]
  redisOptions?: any
}


declare interface IConfigOptions {
  version: string
  serve: {
    port: number
    path: string // Context Path
  },
  keys: string[]
  db: ISequelizeConfig
  redis: RedisAndClusterOptions
}
