import { Sequelize } from 'sequelize-typescript';
import config from '../config';

// 创建数据库连接池
const sequelize = new Sequelize({
  database: config.db.database,
  dialect: config.db.dialect,
  username: config.db.username,
  password: config.db.password,
  host: config.db.host,
  port: config.db.port,
  pool: config.db.pool,
});
sequelize.addModels([__dirname + `/db`]);
// 验证连接
sequelize.authenticate()
  .then((/* err */) => {
    console.log('----------------------------------------');
    console.log('DATABASE √');
    console.log('    HOST     %s', config.db.host);
    console.log('    PORT     %s', config.db.port);
    console.log('    DATABASE %s', config.db.database);
    console.log('----------------------------------------');
  })
  .catch((err: any) => {
    console.log('Unable to connect to the database:', err);
  });

export default sequelize;
