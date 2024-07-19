import { Router } from "express";
import { login, getUser, getUserByID, createUser, updateUser, deleteUser } from "../controllers/UserController.js";
import CreateUserMiddleware from '../middlewares/CreateUserMiddleware.js';


const routes = Router();

routes.post('/login', login);

routes.get('/users', getUser);

routes.get('/users/:userId', getUserByID);

routes.post('/users', CreateUserMiddleware, createUser);

routes.put('/users/:userId', updateUser);

routes.delete('/users/:userId', deleteUser);

export default routes;