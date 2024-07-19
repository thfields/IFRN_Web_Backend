import { Router } from "express";
import { login, getUser, getUserByID, createUser, updateUser, deleteUser } from "../controllers/UserController.js";
import CreateUserMiddleware from '../middlewares/CreateUserMiddleware.js';
import {verifyToken} from '../middlewares/VerifyTokenMiddleware.js';


const routes = Router();

routes.post('/login', login);

routes.get('/users', verifyToken, getUser);

routes.get('/users/:userId', verifyToken, getUserByID);

routes.post('/users', CreateUserMiddleware, createUser);

routes.put('/users/:userId', verifyToken, updateUser);

routes.delete('/users/:userId', verifyToken, deleteUser);

export default routes;