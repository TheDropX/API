"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const announcementModel_1 = require("../models/announcementModel");
const Announcement = mongoose.model('Announcement', announcementModel_1.announcementSchema, 'announcement');
class announcementController {
    getAnnouncement(req, res) {
        Announcement.find((err, announcement) => {
            if (err) {
                res.send("Error!");
            }
            else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(announcement);
            }
        });
    }
}
exports.announcementController = announcementController;
//# sourceMappingURL=announcementController.js.map