import { NestFactory } from '@nestjs/core';
import { ExercisesModule } from './exercises.module';

async function bootstrap() {
  const app = await NestFactory.create(ExercisesModule);
  await app.listen(3000);
}
bootstrap();
