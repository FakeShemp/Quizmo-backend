import { UserModel } from "../schemas/user";

let getUserById = async (req: any, res: any, next: any) => {
    try {
        const result = await UserModel.findById(req.params.id).exec();
        if (result) {
            res.status(200).send(result);
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

let createUser = async (req: any, res: any, next: any) => {
    try {
        const result = await UserModel.findOne({ userId: req.body.userId }).exec();
        if (result) {
            res.status(200).send(result);
        }
        else {
            const result2 = await UserModel.create({
                userId: req.body.userId,
                email: req.body.email
            });
            if (result2) {
                res.status(201).send(result2);
            }
            else {
                throw "Couldn't create user!";
            }
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

export const users = {
    get: getUserById,
    post: createUser
};