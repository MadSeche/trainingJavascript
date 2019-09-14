import {Router} from 'express';
import {search} from './search.controller';

const router = Router();

router
    .route('/')
    .get(search)

export default router;