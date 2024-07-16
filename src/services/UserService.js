import User from '../models/UserModel.js';

class UserService {
    async find() {
        return await User.find();
    }

    async findOne(userId) {
        const user = await User.findOne({userId: userId});
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
        return await User.findOneAndUpdate({userId: userId}, user, { new: true });
    }

    async delete(userId) {
        const user = await User.findOne({ userId: userId });
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        await User.deleteOne({ userId: userId });
        return user;
    }
}

export default new UserService();