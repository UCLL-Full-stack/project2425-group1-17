import express, { Request, Response } from 'express';
import { UserService } from "../service/user.service";
import {Role} from '../types/index';

const userRouter = express.Router();
const userService = new UserService();


userRouter.post('/', (req: Request, res: Response) => {
    try{
        const userData = req.body as {username: string; password: string; role: Role};
        const newUser = userService.createUser(userData);
        res.status(200).json(newUser);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).send({error: errorMessage});
    }
});

export {userRouter};