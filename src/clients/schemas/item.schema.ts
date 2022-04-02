import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  _id: string;

  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop()
  image: string;

  @Prop()
  label: string;

  @Prop()
  note: string;

  @Prop()
  code: string;

  @Prop()
  clientId: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
