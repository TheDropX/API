import * as mongoose from 'mongoose';
import { busSchema } from '../models/busModel';
import { Request, Response } from 'express';

const Bus = mongoose.model('Bus', busSchema, 'buses');

export class busController{

    public getBuses (req: Request, res: Response) {           
        Bus.find((err, buses) => {
            if (err) {
            res.send("Error!");
            } else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(buses);
            }
        });
    }

}