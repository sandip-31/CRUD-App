import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { IUser } from '../models/userModel';


export const ValidateJoi = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);

            next();
        } catch (error) {
            console.log(error);

            return res.status(422).json({ error });
        }
    };
};

export const Schemas = {
    user: {
        create: Joi.object<IUser>({
            name: Joi.string().required(),
            email: Joi.string().required()
        }),
        update: Joi.object<IUser>({
            name: Joi.string().required()
        })
    }
}; 