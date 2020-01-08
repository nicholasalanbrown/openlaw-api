import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { environment } from './environments/environment';
import * as dotenv from 'dotenv';

dotenv.config();

const port = environment.port || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  }

  app.enableCors(options);

  Logger.log(
    `🚀  🚀   🚀   🚀 Apollo Server on http://localhost:${port}/graphql`,
    'Bootstrap',
  );
  await app.listen(port);
}
bootstrap();
