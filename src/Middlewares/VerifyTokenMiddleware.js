import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export function verifyToken(req, res, next) {
    // Obtendo o token do header 'Authorization'
    const authHeader = req.headers['authorization'];

    // Verifica se o header está presente
    if (!authHeader) {
        return res.status(403).json({ mensagemErro: 'Token não detectado. Faça login.' });
    }

    // Verifica se o header começa com 'Bearer '
    let token;
    if (authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    } else {
        return res.status(401).json({ mensagemErro: 'Token não informado ou formato inválido' });
    }
    
    
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if (error) {
            console.log('Erro na verificação do token:', error); 
            return res.status(401).json({ mensagemErro: 'Token inválido. Faça login novamente.' });
        }

        
        req.user = decoded;
        next();
    });
}
