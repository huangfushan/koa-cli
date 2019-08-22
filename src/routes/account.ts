import router from './router';
import { User } from '../models';

router.get('/user', async ctx => {
  let user = await User.findAll();
  ctx.body = { user };
});
// router.get('/set', async ctx => {
//   let user = await updateUser();
//   ctx.body = user;
// });
