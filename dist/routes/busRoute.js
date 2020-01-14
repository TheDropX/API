"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const busController_1 = require("../controllers/busController");
class busRoutes {
    constructor() {
        this.busController = new busController_1.busController();
    }
    routes(app) {
        app.route('/buses')
            .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, this.busController.getBuses);
    }
}
exports.busRoutes = busRoutes;
//# sourceMappingURL=busRoute.js.map