import { IsString, MaxLength, MinLength } from "class-validator";
import { isString } from "util";

export class AuthCredentialsDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;
    
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password: string;
}