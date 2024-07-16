import { Router } from "express";
import { getUser, getUserByID, createUser, updateUser, deleteUser } from "../controllers/UserController.js";
import CreateTaskMiddleware from '../Middlewares/CreateUserMiddleware.js';


const routes = Router();

routes.get('/users', getUser);

routes.get('/users/:userId', getUserByID);

routes.post('/users', CreateTaskMiddleware, createUser);

routes.put('/users/:userId', updateUser);

routes.delete('/users/:userId', deleteUser);

export default routes;