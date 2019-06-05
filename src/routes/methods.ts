import { UserModel } from "../schemas/user";

let getUser = async (req: any, res: any, next: any) => {
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

export const users = {
    get: getUser
};