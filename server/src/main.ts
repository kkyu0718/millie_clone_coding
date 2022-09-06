import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors : {credentials: true}});
  
  const serverConfig = config.get('server')
  const port = serverConfig.port;

  app.enableCors()
  app.use(cookieParser())
  await app.listen(port);
  console.log("running in ", process.env.NODE_ENV)
}
bootstrap();
