import { CreateWorkoutRequest } from './create-workout.request';
import { WorkoutsRepository } from './workouts.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkoutsService {
  constructor(private readonly workoutsRepository: WorkoutsRepository) {}

  async createWorkout(request: CreateWorkoutRequest) {
    return this.workoutsRepository.create(request);
  }
}
