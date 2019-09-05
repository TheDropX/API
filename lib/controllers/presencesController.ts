import * as mongoose from 'mongoose';
import { PresencesSchema } from '../models/presencesModel';
import { Request, Response } from 'express';

const Presence = mongoose.model('Presences', PresencesSchema, 'presences');

export class PresencesController{

    public getPresences (req: Request, res: Response) {           
        Presence.find((err, presences) => {
            if (err) {
            res.send("Error!");
            } else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(presences);
            }
        });
    }

    public getPresenceByUserID (req: any, res: Response) {           
        Presence.find({userID: req.params.id}, (err, presence) => {
            if(err){
                res.send(err);
            } else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(presence);
            }
        });
    }
}