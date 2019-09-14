import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname : {type: String},
    lastname : {type: String}
    
})
export const User = mongoose.model('User',userSchema)