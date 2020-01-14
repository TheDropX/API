import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/presencesRoutes";
import { WebhooksRoutes } from "./routes/deployRoute";
import { testingRoutes } from "./routes/testingRoute";
import { aRoutes } from "./routes/announcementRoute";
import { busRoutes } from "./routes/busRoute";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public webhooks: WebhooksRoutes = new WebhooksRoutes();
    public testing: testingRoutes = new testingRoutes();
    public announcement: aRoutes = new aRoutes();
    public buses: busRoutes = new busRoutes();
    public mongoUrl: string = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGOIP}/discord`;

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.webhooks.routes(this.app); 
        this.testing.routes(this.app); 
        this.announcement.routes(this.app);
        this.buses.routes(this.app);
        this.mongoSetup();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void {
        require('mongoose').Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });        
    }

}

export default new App().app;