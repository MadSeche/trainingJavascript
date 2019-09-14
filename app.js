import express from 'express';
import {json,urlencoded} from 'body-parser';
import {connect} from './utils/db';

import usersRouter from './ressources/user/user.router'
import moviesRouter from './ressources/movie/movie.router';
import searchRouter from './ressources/search/search.router';
const app = express();

app.disable('x-powered-by');
app.use(json());
app.use(urlencoded({extended:true}));

app.use('/api/users',usersRouter);
app.use('/api/movies',moviesRouter);
app.use('/search',searchRouter);
const start = async()=>{
    try{
        await connect ()
        app.listen(8001,()=>{
            console.log('REST API listening on port 8001');
        })
    } catch (err) {
        throw err;
    }
}

start();
