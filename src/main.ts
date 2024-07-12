import { Logger } from 'nestjs-pino';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger as AppLogger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { readPackageJson } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const configService = app.get(ConfigService);
  const env = configService.get('NODE_ENV');
  const port = configService.get('PORT');
  const appPrefix = configService.get('APP_PREFIX') || '';
  const swaggerEndpoint = configService.get('SWAGGER_ENDPOINT') || 'docs';

  app.setGlobalPrefix(appPrefix);
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe());

  const packageJson = await readPackageJson();

  const config = new DocumentBuilder()
    .setTitle(packageJson.name)
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerEndpoint, app, document, {
    swaggerUiEnabled: env !== 'production',
  });

  await app.listen(port);

  const logger = new AppLogger();

  const swaggerLink = `Swagger link: http://localhost:${port}/${swaggerEndpoint}`;

  logger.log(`

NODE_ENV=${env}

Listening on port ${port}

${env !== 'production' ? swaggerLink : `Swagger disabled`}
`);
}

bootstrap();
