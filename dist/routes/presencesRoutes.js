"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const presencesController_1 = require("../controllers/presencesController");
class Routes {
    constructor() {
        this.presencesController = new presencesController_1.PresencesController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        // Contact 
        app.route('/presences')
            .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, this.presencesController.getPresences);
        app.route('/presences/:id')
            .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, this.presencesController.getPresenceByUserID);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=presencesRoutes.js.map