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
        app.route('/test2')
            .get((req, res) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).send({
                roles: ["Moderator", "Ticket Manager", "Presence Developer", "Donator", "Proofreader", "Translator"]
            });
        });
        app.route('/announcements')
            .get((req, res) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.status(200).send({
                title: "Attention!",
                message: "A new update is available!"
            });
        });
    }
}
exports.testingRoutes = testingRoutes;
//# sourceMappingURL=testingRoute.js.map