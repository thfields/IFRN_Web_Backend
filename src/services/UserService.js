import User from '../models/UserModel.js';

class UserService {
    
    findLogin(email) {
        
        return User.findOne({ email }).exec();
    }

    async find() {
        return await User.find();
    }

    async findOne(userId) {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        return user;
    }

    async create(user) {
        return await User.create(user);
    }

    async update(userId, user) {
        if (user.userId) {
            user.finalData = new Date();
        }
        return await User.findByIdAndUpdate(userId, user, { new: true });
    }

    async delete(userId) {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        await User.deleteOne({ _id: userId });
        return user;
    }
}

export default new UserService();
