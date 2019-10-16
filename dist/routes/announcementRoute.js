"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const announcementController_1 = require("../controllers/announcementController");
class aRoutes {
    constructor() {
        this.announcementController = new announcementController_1.announcementController();
    }
    routes(app) {
        app.route('/announcement')
            .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, this.announcementController.getAnnouncement);
    }
}
exports.aRoutes = aRoutes;
//# sourceMappingURL=announcementRoute.js.map