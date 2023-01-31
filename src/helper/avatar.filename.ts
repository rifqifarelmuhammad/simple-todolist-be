import { Request } from "express";
import { extname } from 'path';

export class AvatarFilename{
    static customFileName(req: Request, file: Express.Multer.File, cb: any){
        const randomName = Array(32).fill(null).map(() => Math.round(Math.random() * 16).toString(16)).join('')
    
        const fileName = cb(null, `${randomName}${extname(file.originalname)}`)

        return fileName;
    }
}