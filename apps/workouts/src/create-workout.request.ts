import {
  IsString,
  IsNumber,
  IsArray,
  IsDate,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { ObjectId } from 'mongoose';
export class CreateWorkoutRequest {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsArray()
  exercises: ObjectId[];
  @IsString()
  description: string;
  @IsNumber()
  @IsPositive()
  duration: number;
  @IsString()
  difficulty: string;
  @IsString()
  createdBy: ObjectId;
  @IsDate()
  createdAt: Date;
}
