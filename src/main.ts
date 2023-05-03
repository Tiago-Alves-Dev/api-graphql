import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('HttpsServer');
const port = Number(process.env.PORT) || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
}

bootstrap().then(() => {
  logger.log('# # # # # # # # # # # # # # # # # # # # # # # # #');
  logger.log('# # # # # # # # # # # # # # # # # # # # # # # # #');
  logger.log('# # # # # # #                       # # # # # # #');
  logger.log('# # # # # # #      CRUD SIMPLE      # # # # # # #');
  logger.log('# # # # # # #    NESTJS AND NODEJS  # # # # # # #');
  logger.log('# # # # # # #                       # # # # # # #');
  logger.log('# # # # # # #        by Tiago       # # # # # # #');
  logger.log('# # # # # # #     R E S T  A P I    # # # # # # #');
  logger.log('# # # # # # #                       # # # # # # #');
  logger.log('# # # # # # #      D E S E N V      # # # # # # #');
  logger.log('# # # # # # #                       # # # # # # #');
  logger.log('# # # # # # # # # # # # # # # # # # # # # # # # #');
  logger.log('# # # # # # # # # # # # # # # # # # # # # # # # #');
  logger.log('Application is listening on port ' + port);
});
