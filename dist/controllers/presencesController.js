"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const presencesModel_1 = require("../models/presencesModel");
const Presence = mongoose.model('Presences', presencesModel_1.PresencesSchema, 'presences');
class PresencesController {
    getPresences(req, res) {
        Presence.find((err, presences) => {
            if (err) {
                res.send("Error!");
            }
            else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(presences);
            }
        });
    }
    getPresenceByUserID(req, res) {
        Presence.find({ userID: req.params.id }, (err, presence) => {
            if (err) {
                res.send(err);
            }
            else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(presence);
            }
        });
    }
}
exports.PresencesController = PresencesController;
//# sourceMappingURL=presencesController.js.map