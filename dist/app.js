"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const presencesRoutes_1 = require("./routes/presencesRoutes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new presencesRoutes_1.Routes();
        this.mongoUrl = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}${process.env.MONGOIP}`;
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }
    mongoSetup() {
        require('mongoose').Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map