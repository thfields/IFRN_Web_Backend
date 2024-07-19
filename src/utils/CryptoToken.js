import crypto from 'crypto';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export function cryptoPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password + process.env.SECRET);
    return hash.digest('hex');
}


export function generateToken(payload) {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: 1200 });
}