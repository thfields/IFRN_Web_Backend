function CreateUserMiddleware(req, res, next) {
    let { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Nome, email e senha são campos obrigatórios' });
        }
        
        next();
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao criar o usuário' });
    }
}

export default CreateUserMiddleware;