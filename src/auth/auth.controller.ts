import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signin(@Body() body: Prisma.UserCreateInput) {
    return this.authService.signIn(body.email, body.password);
  }
}
