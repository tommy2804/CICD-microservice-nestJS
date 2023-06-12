import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Types, ObjectId } from 'mongoose';

@Schema({ versionKey: false })
export class Workout extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Exercises' }] }) // Reference to Exercises schema
  exercises: ObjectId[];

  @Prop()
  description: string;

  @Prop()
  duration: number;

  @Prop()
  difficulty: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Users' }] })
  createdBy: ObjectId;

  @Prop()
  createdAt: Date;
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
