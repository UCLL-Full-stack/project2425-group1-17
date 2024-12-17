/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - username
 *        - password
 *        - role   
 *      properties:
 *         username:
 *           type: string
 *           description: User's username.
 *         password:
 *           type: string
 *           description: User's password.
 *         role:
 *           type: string
 *           enum: [ADMIN, STUDENT, LECTURER]
 *           description: User's role.
 */
import express, { NextFunction, Request, Response } from 'express';
import userService from "../service/user.service";
import {Role, UserInput} from '../types/index';

const userRouter = express.Router();

/**
 * @swagger
 *  /users:
 *    post:
 *      summary: Create a new user
 *      consumes:
 *       - application/json
 *      parameters:
 *       - in: body
 *         name: user
 *         description: The user to create
 *         schema:
 *          type: object
 *          required:
 *              - username
 *              - password
 *              - role   
 *          properties:
 *              username:
 *                 type: string
 *              password: 
 *                 type: string
 *              role: 
 *                 type: string
 *                 enum: [ADMIN, STUDENT, LECTURER]
 *      responses:
 *        200: 
 *        description: The user was successfully created
 */
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