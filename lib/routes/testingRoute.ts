import {Request, Response, NextFunction} from "express";

export class testingRoutes { 
    
    public routes(app): void {   
        
        app.route('/test')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: '15125'
            })
        })     
        
    }
}