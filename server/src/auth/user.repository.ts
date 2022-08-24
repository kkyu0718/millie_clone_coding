import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";

// export interface UserRepository extends Repository<User> {
//     this: Repository<User>;

//     createUser(authCredentialsDto: AuthCredentialsDto): Promise<any>;
// }

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(private dataSource: DataSource){
        super(User, dataSource.createEntityManager(), dataSource.createQueryRunner())
    }

    async createUser(authCredntialsDto: AuthCredentialsDto): Promise<any>{
        const {username, password} = authCredntialsDto;
        const user = this.create({username, password})
        await this.save(user)
    }
}
// export class UserRepository extends Repository<User>{
//     async createUser(authCredentialsDto: AuthCredentialsDto){
//         const {username, password} = authCredentialsDto;
//         const user = this.create({username, password})
//         await this.save(user)
//     }
// }