import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    Gender:{
        type: String,
        required: true,
        enum : ['male', 'female', 'other']
    }
})

const User = mongoose.model("User", userSchema);
export default User;