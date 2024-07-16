import UserService from '../services/UserService.js';

async function getUser(_, res) {
    const users = await UserService.find();
    return res.status(200).json(users);
}

async function getUserByID(req, res) {
    const userId = req.params.userId;

    try {
        const user = await UserService.findOne(userId);
        return res.status(200).json(user);
    } catch (error) {
        if (error.message === 'Usuário não encontrado') {
            return res.status(404).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
}

async function createUser(req, res) {
    const { name, email, password } = req.body;

    try {
        const user = await UserService.create({ name, email, password });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno no controller.', details: error });
    }
}

async function updateUser(req, res) {
    const userId = req.params.userId;
    const user = req.body; // Use req.body instead of req.user

    try {
        const updatedUser = await UserService.update(userId, user);
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao atualizar o usuário' });
    }
}

async function deleteUser(req, res) {
    const userId = req.params.userId;
    try {
        const user = await UserService.delete(userId);
        return res.status(200).json({ message: 'Usuário deletado com sucesso!'});
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export { getUser, getUserByID, createUser, updateUser, deleteUser };