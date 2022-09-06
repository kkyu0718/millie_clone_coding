import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [BoardsModule, 
    AuthModule,
    TypeOrmModule.forRoot(typeORMConfig),
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
