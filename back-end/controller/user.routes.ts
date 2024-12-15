import express, { NextFunction, Request, Response } from 'express';
import userService from "../service/user.service";
import {Role, UserInput} from '../types/index';

const userRouter = express.Router();


userRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try{
        const userInput: UserInput = req.body;
        const newUser = await userService.createUser(userInput);
        res.status(200).json(newUser);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(500).send({error: errorMessage});
    }
});

export {userRouter};