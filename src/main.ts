import { NestFactory } from '@nestjs/core';
import { DocumentBuilder ,SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Ibrahim crud')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  app.enableCors();
  await app.listen(3010);
}
bootstrap();
