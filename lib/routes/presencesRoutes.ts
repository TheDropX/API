import {Request, Response, NextFunction} from "express";
import { PresencesController } from "../controllers/presencesController";

export class Routes { 
    
    public presencesController: PresencesController = new PresencesController() 
    
    public routes(app): void {   
        
        app.route('/test')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'testing...'
            })
        })
        
        // Contact 
        app.route('/presences')
        .get((req: Request, res: Response, next: NextFunction) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);            
            next();                  
        }, this.presencesController.getPresences)        

        app.route('/presences/:id')
        .get((req: Request, res: Response, next: NextFunction) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);            
            next();                  
        }, this.presencesController.getPresenceByUserID)        

    }
}