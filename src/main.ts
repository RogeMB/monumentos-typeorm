/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Monumentos API')
  .setDescription('API de monumentos creada con NestJS, MySQL y TypeORM.')
  .setVersion('1.0')
  .addTag('monumentos')
  .setContact('Rogelio Mohigefer Barrera', 'https://github.com/RogeMB/monumentos-typeorm', 'mohigefer.barog22@salesianos.triana.edu')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
