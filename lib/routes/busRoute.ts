import { Request, Response, NextFunction } from "express";
import { busController } from "../controllers/busController";

export class busRoutes { 
    
    public busController: busController = new busController()
    
    public routes(app): void {   
        
        app.route('/buses')
        .get((req: Request, res: Response, next: NextFunction) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);            
            next();                  
        }, this.busController.getBuses)
        
    }
}