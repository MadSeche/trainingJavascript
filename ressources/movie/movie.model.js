import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    directors : {type: String},
    release_date : {type: Date},
    rating : {type: Number},
    genres : {type: String},
    image_url : {type: String},
    plot : {type: String},
    title : {type: String},
    rank : {type: Number},
    running_time_secs :{type: Number},
    actors : {type: String},
    year : {type: Number}
})
export const Movie = mongoose.model('Movie',movieSchema)