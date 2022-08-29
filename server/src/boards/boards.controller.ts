import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardsService } from './boards.service';

@Controller('boards')
@UseGuards(AuthGuard('jwt'))
export class BoardsController {
    constructor(
        private boardsService: BoardsService
    ){}

    @Post('/')
    createBoard(@Body() board){
        return this.boardsService.createBoard(board)
    }

}
