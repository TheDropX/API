"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const presencesRoutes_1 = require("./routes/presencesRoutes");
const deployRoute_1 = require("./routes/deployRoute");
const testingRoute_1 = require("./routes/testingRoute");
const announcementRoute_1 = require("./routes/announcementRoute");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new presencesRoutes_1.Routes();
        this.webhooks = new deployRoute_1.WebhooksRoutes();
        this.testing = new testingRoute_1.testingRoutes();
        this.announcement = new announcementRoute_1.aRoutes();
        this.mongoUrl = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGOIP}/discord`;
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.webhooks.routes(this.app);
        this.testing.routes(this.app);
        this.announcement.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
    }
    mongoSetup() {
        require('mongoose').Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map