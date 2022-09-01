import { IsString, MaxLength, MinLength } from "class-validator";

export class UserInfoDto {
    payload : {
        username: string;
    }

    cookie: {

        accessToken: string;
    
        refreshToken?: string;
    }

}