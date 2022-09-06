import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
import * as config from 'config';

const jwtConfig = config.get('jwt')

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){
        super({
            // decrypt(validate) 에 쓰일 secretKey
            secretOrKey: process.env.JWT_SECRET || jwtConfig.secret,
            // header에 bearer스키마에 담겨온 토큰 해석할 것
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }
    
    async validate(payload){
        const { username } = payload;
        const user: User = await this.userRepository.findOneBy({username})

        if (!user){
            throw new UnauthorizedException()
        }
        
        return user
    }
}