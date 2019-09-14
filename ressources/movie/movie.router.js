import {Router} from 'express';
import {list,create,getById,putOne,deleteOne} from './movie.controller';

const router = Router();

router
    .route('/')
    .get(list)
    .post(create)

router
    .route('/:id')
    .get(getById)
    .put(putOne)
    .delete(deleteOne)


export default router;