import {Movie} from './movie.model';

export const list = async(req,res)=>{
    try{
        const movies = await Movie.find();
        // console.log(movies)
        if (!movies) return res.status(400).end()
        res.status(200).json({movies})
    } catch(err){
        console.log(err);
        res.status(400).end();
    }
}
export const getById = async(req,res)=>{
    try{
        const movie = await Movie.findOne({_id:req.params.id});
        if (!movie) return res.status(400).end()
        res.status(200).json({movie})
    } catch(err){
        console.log(err);
        res.status(400).end();
    }
}
export const create = async (req,res)=>{
    try{
        const movie = await Movie.create({...req.body})
        res.status(201).json({movie})
    }catch(err){
        console.log(err);
        res.status(400).end()
    }
}
export const deleteOne = async(req,res)=>{
    try{
        const deleteMovie = await Movie.findOneAndDelete({
                _id:req.params.id // trouve moi l'id = à id que je te donne
            }
        )
        if(!deleteMovie) return res.status(400).end()
        res.status(200).json({movie:deleteMovie})
    }catch(err){
        console.log(err);
        res.status(400).end();
    }
}
export const putOne = async(req,res)=>{
    try{
        const putMovie = await Movie.findOneAndUpdate({
                _id:req.params.id // trouve moi l'id = à id que je te donne
            },
            req.body, // Met à jour
            {new:true} // écrase
        )
        if(!putMovie) return res.status(400).end()
        res.status(200).json({movie:putMovie})
    }catch(err){
        console.log(err);
        res.status(400).end();
    }
}