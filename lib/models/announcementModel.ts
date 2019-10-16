import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const announcementSchema = new Schema({

    title: { type: String, required: true },
    message: { type: String, required: true },
    version: { type: String, required: true }

});