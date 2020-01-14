import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const busSchema = new Schema({

    buses: { type: Array, required: true }

});