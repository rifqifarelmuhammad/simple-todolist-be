import { unlink } from 'fs';
import { promisify } from 'util';

const unlinkAsync = promisify(unlink);

export class RemoveFile{
    static async removeFile(file: string){
        try{
            await unlinkAsync(file);
        } catch(err){
            console.log('Remove File Is Error')
        }

        return true;
    }
}