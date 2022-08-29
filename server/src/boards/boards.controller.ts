import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardsService } from './boards.service';

@UseGuards(AuthGuard('jwt'))
@Controller('boards')
export class BoardsController {
    constructor(
        private boardsService: BoardsService
    ){}

    @Post('/')
    createBoard(@Body() board){
        return this.boardsService.createBoard(board)
    }

}
