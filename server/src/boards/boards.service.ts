import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
    async createBoard(board){
        console.log(board);
    }
}
