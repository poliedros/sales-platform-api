import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { randomUUID } from 'crypto';
import { Item } from './item';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop({ type: String, default: () => randomUUID() })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  email: string;

  @Prop()
  address: string;

  @Prop()
  additionalInfo: string;

  @Prop()
  code: string;

  @Prop()
  items: Item[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
