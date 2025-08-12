import User from "../model/user.model.js";

class UserService {
    async getallUser() {
        const user = await User.find({});
        return user;
    }

    async createUser(req, res, next) {
        
        let { name, age, Gender } = req.body;
        
        if(!name || !age || !Gender){
            throw new Error("All fields are required");
        }

        const user = await User.create({
            name,
            age,
            Gender
        }
        );
        return user;
    }

    async deleteUser(userId){
        const user = await User.findByIdAndDelete(userId);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        return true;
    }
}

export default new UserService();
