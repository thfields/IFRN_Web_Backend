import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'Token não informado' });
    }

    jwt.verify(token, process.env.SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).json({ error: 'Token inválido' });
        }

        req.user = decoded;
        next();
    });
}
