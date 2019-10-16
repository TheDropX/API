import {Request, Response, NextFunction} from "express";
import { announcementController } from "../controllers/announcementController";

export class aRoutes { 
    
    public announcementController: announcementController = new announcementController()
    
    public routes(app): void {   
        
        app.route('/announcement')
        .get((req: Request, res: Response, next: NextFunction) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);            
            next();                  
        }, this.announcementController.getAnnouncement)

        
    }
}