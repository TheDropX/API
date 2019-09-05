import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/presencesRoutes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}${process.env.MONGOIP}`;

    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);     
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        require('mongoose').Promise = global.Promise;
        mongoose.connect(this.mongoUrl);        
    }

}

export default new App().app;