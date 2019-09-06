import {Request, Response, NextFunction} from "express";
import { PresencesController } from "../controllers/presencesController";

var childProcess = require('child_process');
var githubUsername = 'TheDropX'


export class Routes { 
    
    public presencesController: PresencesController = new PresencesController() 
    
    public routes(app): void {   

        app.route('/webhooks/github')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'Test.'
            })
        })
        
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
        
        app.post("/webhooks/github", function (req, res) {
            var sender = req.body.sender;
            var branch = req.body.ref;
        
            if(branch.indexOf('master') > -1 && sender.login === githubUsername){
                deploy(res);
            }
        })
        
        function deploy(res){
            childProcess.exec('cd /home/alex/Webhook && ./DeployNow.sh', function(err, stdout, stderr){
                if (err) {
                 console.error(err);
                 return res.send(500);
                }
                res.send(200);
              });
        }
        

    }
}