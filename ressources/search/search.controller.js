import {Movie} from '../movie/movie.model';
import{User} from '../user/user.model';

export const search = async(req,res)=>{
//     try{
      
//         const okOk= function(){
//             const movie= await Movie.find(req.query);
//             const user= await User.find(req.query);
//             const okUser= await User.find(req.params.firstname);
//             const okMovie= await Movie.find(req.params.title);
//             if (user === okUser){
//                 res.status(200).json({user})
//             }
//             else if(movie = okMovie){
//                 res.status(200).json({movie})
//             }
//         }

//         if (!movie|!user) return res.status(400).end();
//         await okOk();
       
//     } catch(err){
//         console.log(err);
//         res.status(400).end();
//     }
// }

    try{
        console.log(req);
        console.log("-----------------------------------------");
        console.log(req.query);


        const movie = await Movie.find(req.query);
        const user= await User.find(req.query);

        if (!movie|!user) return res.status(400).end();
        else if(movie===movie|user===user){
            res.status(200).json({movie,user})
        }
        
        // res.status(200).json({movie})
    } catch(err){
        console.log(err);
        res.status(400).end();
    }
}