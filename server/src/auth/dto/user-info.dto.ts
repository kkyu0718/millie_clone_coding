import { IsString, MaxLength, MinLength } from "class-validator";
import { User } from "../user.entity";

export class UserInfoDto {
    user: User;

    cookie: {

        accessToken: string;
    
        refreshToken?: string;
    }

}