import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource){
        super(User, dataSource.createEntityManager(), dataSource.createQueryRunner())
    }

    async createUser(authCredntialsDto: AuthCredentialsDto): Promise<any>{
        const {username, password} = authCredntialsDto;
        
        const user = this.create({username, password})
        // 같은 username 이 있을 경우 error 발생
        try{
             await this.save(user)
        } catch (error) {
            if(error.code == '23505') {
                throw new ConflictException('Existing username')
            } else{
                throw new InternalServerErrorException()
            }
        }
    }
}
