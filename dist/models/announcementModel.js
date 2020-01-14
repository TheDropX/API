"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.announcementSchema = new Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    version: { type: String, required: true },
    link: { type: String, required: true }
});
//# sourceMappingURL=announcementModel.js.map