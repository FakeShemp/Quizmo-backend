import {
    UserModel
} from "../schemas/user";
import {
    QuizModel
} from "../schemas/quiz"

let getUserById = async (req: any, res: any, next: any) => {
    try {
        const result = await UserModel.findById(req.params.id).exec();
        if (result) {
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

let getUserBySpotifyId = async (req: any, res: any, next: any) => {
    try {
        const result = await UserModel.findOne({
            userId: req.params.id
        }).exec();
        if (result) {
            res.status(200).send(result);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

let createUser = async (req: any, res: any, next: any) => {
    try {
        const result = await UserModel.findOne({
            userId: req.body.userId
        }).exec();
        if (result) {
            res.status(200).send(result);
        } else {
            const result2 = await UserModel.create({
                userId: req.body.userId,
                email: req.body.email
            });
            if (result2) {
                res.status(201).send(result2);
            } else {
                throw "Couldn't create user!";
            }
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

let getQuiz = async (req: any, res: any, next: any) => {
    try {
        const result = await QuizModel.find({
            user: req.params.userId
        }).exec();
        if (result) {
            res.status(200).send(result);
        } else {
            throw "Couldn't find any quiz!"
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

let createQuiz = async (req: any, res: any, next: any) => {
    try {
        const result = await QuizModel.create({
            name: req.body.name,
            user: req.body.user,
            questions: req.body.questions
        })
        if (result) {
            res.status(201).send(result);
        } else {
            throw "Couldn't create quiz!";
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

let patchQuiz = async (req: any, res: any, next: any) => {
    try {
        const result = await QuizModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new:true
        })
        if (result) {
            res.status(201).send(result);
        } else {
            throw "Couldn't update quiz!";
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

let deleteQuiz = async (req: any, res: any, next: any) => {
    try {
        const result = await QuizModel.findByIdAndDelete(req.params.id).exec()
        if (result) {
            return res.status(200).send(result)
        } else {
            res.status(204)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



export const users = {
    get: getUserById,
    getBySpotifyId: getUserBySpotifyId,
    create: createUser
};

export const quizzes = {
    get: getQuiz,
    create: createQuiz,
    patch: patchQuiz,
    delete: deleteQuiz
}
