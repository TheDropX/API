"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const busModel_1 = require("../models/busModel");
const Bus = mongoose.model('Bus', busModel_1.busSchema, 'buses');
class busController {
    getBuses(req, res) {
        Bus.find((err, buses) => {
            if (err) {
                res.send("Error!");
            }
            else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(buses);
            }
        });
    }
}
exports.busController = busController;
//# sourceMappingURL=busController.js.map