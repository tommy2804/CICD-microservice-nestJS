import { Controller, Get } from '@nestjs/common';
import { ExercisesService } from './exercises.service';

@Controller()
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get()
  getHello(): string {
    return this.exercisesService.getHello();
  }
}
