import { Body, Controller, Post, Res } from '@nestjs/common';
import { User } from 'src/models/user';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  public login(@Body() body: Pick<User, 'email' | 'password'>, @Res({ passthrough: true }) response){
    return this.authService.login(body.email, body.password, response);
  }

  @Post('register')
  public register(@Body() body: Omit<User, 'id'>){
    return this.authService.register(body);
    // return '[TEST]: register';
  }
}
