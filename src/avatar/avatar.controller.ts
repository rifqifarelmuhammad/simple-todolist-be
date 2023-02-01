import { Controller, Post, Get, UploadedFile, UseInterceptors, Param, Patch, Res, Delete, Request, Put, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import multer, { diskStorage } from 'multer';
import { AvatarFilename } from '../helper/avatar.filename';
import { AvatarDTO } from './avatar.dto';
import { AvatarService } from './avatar.service';

@Controller('avatar')
export class AvatarController {
  constructor(private readonly avatarService: AvatarService) {}

  @Get()
  getAllAvatar(){
    return this.avatarService.getAllAvatar()
  }

  @Post()
  postAvatar(@Request() req){
    console.log(req.header)
    const ava: AvatarDTO = {'uId': req.body["uId"], "file": req.body["public_id"], "url": req.body["url"]}
    return this.avatarService.postAvatar(ava)
  }

  @Delete(':uId')
  deleteAvatar(@Param('uId') uId: string){
    console.log('masuk')
    return this.avatarService.deleteAvatar(uId)
  }

  @Patch(':uId')
  updateAvatar(@Param('uId') uId: string, @Request() req){
    const ava: Partial<AvatarDTO> = {'file': req.body["public_id"], "url": req.body["url"]}
    return this.avatarService.updateAvatar(uId, ava)
  }
}
