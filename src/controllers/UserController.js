import UserService from '../services/UserService.js';
import { cryptoPassword } from '../utils/CryptoToken.js'

async function login(req, res) {
    const { email, password } = req.body;
    const cryptoPassword = cryptoPassword(password);

    try {
        // Encontrar o usuário pelo email
        const user = await UserService.findLogin(email);

        if (!user) {
            return res.status(404).json({ error: 'Usuário ou senha incorreto' });
        }

        // Verificar se a senha digitada corresponde à senha armazenada
        if (user.password !== cryptoPassword) {
            return res.status(401).json({ error: 'Usuário ou senha incorreto' });
        }

        return res.status(200).json({ message: 'Usuário logado com sucesso!' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
}


async function getUser(_, res) {
    const users = await UserService.find();
    return res.status(200).json(users);
}

async function getUserByID(req, res) {
    const userId = req.params.userId;

    try {
        const user = await UserService.findOne(userId);
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
}

async function createUser(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = cryptoPassword(req.body.password);

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
        await UserService.delete(userId);
        return res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

export { login, getUser, getUserByID, createUser, updateUser, deleteUser };
