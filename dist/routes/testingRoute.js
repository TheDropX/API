"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testingRoutes {
    routes(app) {
        app.route('/test')
            .get((req, res) => {
            res.status(200).send({
                message: '15125'
            });
        });
    }
}
exports.testingRoutes = testingRoutes;
//# sourceMappingURL=testingRoute.js.map