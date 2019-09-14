import {User} from './user.model';

export const list = async(req,res)=>{
    try{
        const users = await User.find();
        // console.log(movies)
        if (!users) return res.status(400).end()
        res.status(200).json({users})
    } catch(err){
        console.log(err);
        res.status(400).end();
    }
}
export const getById = async(req,res)=>{
    try{
        const user = await User.findOne({_id:req.params.id});
        if (!user) return res.status(400).end()
        res.status(200).json({user})
    } catch(err){
        console.log(err);
        res.status(400).end();
    }
}
export const create = async (req,res)=>{
    try{
        const user = await User.create({...req.body})
        res.status(201).json({user})
    }catch(err){
        console.log(err);
        res.status(400).end()
    }
}
export const deleteOne = async(req,res)=>{
    try{
        const deleteUser = await User.findOneAndDelete({
                _id:req.params.id // trouve moi l'id = à id que je te donne
            }
        )
        if(!deleteUser) return res.status(400).end()
        res.status(200).json({user:deleteUser})
    }catch(err){
        console.log(err);
        res.status(400).end();
    }
}
export const putOne = async(req,res)=>{
    try{
        const putUser = await User.findOneAndUpdate({
                _id:req.params.id // trouve moi l'id = à id que je te donne
            },
            req.body, // Met à jour
            {new:true} // écrase
        )
        if(!putUser) return res.status(400).end()
        res.status(200).json({user:putUser})
    }catch(err){
        console.log(err);
        res.status(400).end();
    }
}