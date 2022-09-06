import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserRepository } from './user.repository';
import * as config from 'config';

const jwtConfig = config.get('jwt')

@Module({
  imports: [
    PassportModule.register({ defaultStrategy : 'jwt' }),
    JwtModule.register({
    secret: process.env.JWT_SECRET || jwtConfig.secret, // 암호화에 쓰일 key
    // signOptions: {
    //   expiresIn: 60*60,
    // }
    }
    ),
    TypeOrmModule.forFeature( [UserRepository] )
  ], 
  controllers: [AuthController],
  providers: [AuthService, UserRepository, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
