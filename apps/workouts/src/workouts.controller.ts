import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutRequest } from './create-workout.request';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  async createWorkout(@Body() request: CreateWorkoutRequest) {
    return this.workoutsService.createWorkout(request);
  }
}
