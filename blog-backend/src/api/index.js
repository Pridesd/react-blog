import Router from 'koa-router';
import auth from './auth';
import posts from './posts';

const api = new Router();
api.use('/posts', posts.routes());
api.use('/auth', auth.routes());

//라우터 내보내기
export default api;