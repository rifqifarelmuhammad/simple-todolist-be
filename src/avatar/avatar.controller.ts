import { Controller, Post, Get, UploadedFile, UseInterceptors, Param, Patch, Res, Delete, Request, Put } from '@nestjs/common';
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

  @Get(':fileName')
  getAvatar(@Param('fileName') fileName: string, @Res() res){
    return this.avatarService.getAvatar(fileName, res)
  }

  @Post(':uId')
  @UseInterceptors(FileInterceptor('photo', {
    storage: diskStorage({
      destination: './images',
      filename: AvatarFilename.customFileName,
    }),
  }))
  postAvatar(@Param('uId') uId: string, @UploadedFile() file){
    const ava: AvatarDTO = {'uId': uId, 'file': file.path}
    return this.avatarService.postAvatar(ava)
  }

  @Delete(':uId')
  deleteAvatar(@Param('uId') uId: string){
    return this.avatarService.deleteAvatar(uId)
  }

  @Patch(':uId')
  @UseInterceptors(FileInterceptor('photo', {
    storage: diskStorage({
      destination: './images',
      filename: AvatarFilename.customFileName,
    }),
  }))
  updateAvatar(@Param('uId') uId: string, @UploadedFile() file){
    const ava: Partial<AvatarDTO> = {'file': file.path}
    return this.avatarService.updateAvatar(uId, ava)
  }
}
