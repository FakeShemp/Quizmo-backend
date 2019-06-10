import { UserModel } from "../schemas/user";
import { QuizModel } from "../schemas/quiz"

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
let createUser = async (req: any, res: any, next: any) => {
    try {
        const result = await UserModel.create({
            userId: req.body.userId,
            email: req.body.email
        });
        if (result) {
            res.status(200).send(result);
        }
        else {
            throw "Couldn't create user!";
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}
let getQuiz = async (req: any, res: any, next: any) => {
    try {
        const result = await QuizModel.findById(req.params.id).exec();
        if (result) {
            res.status(200).send(result);
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}


let createQuiz = async (req: any, res: any, next: any) => {
    try {
        const result = await QuizModel.create({
            name: req.body.name,
            user: req.body.user,
            questions: [{
                question: req.body.questions.question,
                answer: req.body.questions.answer
            }]
        })
        if (result) {
            res.status(200).send(result);
        }
        else {
            throw "Couldn't create quiz!";
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}



export const users = {
    getUser: getUser,
    getQuiz: getQuiz,
    createQuiz: createQuiz
};