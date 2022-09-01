import { Body, Controller, Post, Req, Res, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { response, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}
    

    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
        return this.authService.signUp(authCredentialsDto)
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
            @Res({passthrough: true}) response: Response){
        
        const username = this.authService.signIn(authCredentialsDto)
            .then(res => {
                            const {accessToken, refreshToken} = res.cookie
                            const {username} = res.payload
                                                        
                            response.cookie('accessToken', accessToken);
                            response.cookie('refreshToken', refreshToken);
                            return username
                        })
            
        return username
    }

    @Post('/signout')
    signOut(@Body(ValidationPipe) user: User,
            @Res({passthrough: true}) response: Response){
        response.cookie('accessToken', '');
        response.cookie('refreshToken', '');
        return this.authService.signOut(user)
    }

}
