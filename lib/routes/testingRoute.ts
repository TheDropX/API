import {Request, Response, NextFunction} from "express";

export class testingRoutes { 
    
    public routes(app): void {   
        
        app.route('/test')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: '15125'
            })
        })   
        
        app.route('/test2')
        .get((req: Request, res: Response) => {          
            res.setHeader('Access-Control-Allow-Origin', '*');  
            res.status(200).send({
                roles: ["Moderator", "Ticket Manager", "Presence Developer", "Donator", "Proofreader", "Translator"]
            })
        })
        
    }
}