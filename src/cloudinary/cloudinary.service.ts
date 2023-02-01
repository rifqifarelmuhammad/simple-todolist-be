import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
    deleteImage(public_id: string){
        v2.uploader.destroy(public_id, function(error,result) {
        console.log(result, error) })
        .then(resp => console.log(resp))
        .catch(_err=> console.log("Something went wrong, please try again later."));
    }
}
