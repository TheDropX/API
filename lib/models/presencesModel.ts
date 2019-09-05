import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PresencesSchema = new Schema({
    userID: { type: String, required: true },
    username: { type: String, required: true },
    userTag: { type: String, required: true },
    status: { type: String, required: true },
    game: { type: String, required: true },
    details: { type: String, required: true },
    state: { type: String, required: true },
    applicationID: { type: String, required: true },
    largeImage: { type: String, required: true },
    smallImage: { type: String, required: true }
});