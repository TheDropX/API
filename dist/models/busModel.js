"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.busSchema = new Schema({
    buses: { type: Array, required: true }
});
//# sourceMappingURL=busModel.js.map