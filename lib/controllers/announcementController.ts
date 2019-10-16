import * as mongoose from 'mongoose';
import { announcementSchema } from '../models/announcementModel';
import { Request, Response } from 'express';

const Announcement = mongoose.model('Announcement', announcementSchema, 'announcement');

export class announcementController{

    public getAnnouncement (req: Request, res: Response) {           
        Announcement.find((err, announcement) => {
            if (err) {
            res.send("Error!");
            } else {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.send(announcement);
            }
        });
    }

}