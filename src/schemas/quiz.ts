import { Schema, model, Types } from 'mongoose';

const Quiz = new Schema({
    name: String,
    user: Types.ObjectId,
    questions: [
        {
            question: {
                type: String,
                required: true
            },
            answer: {
                type: String,
                required: true
            }
        }
    ]
});

const QuizModel = model('quiz', Quiz);
export { QuizModel };