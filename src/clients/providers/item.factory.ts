import { UpdateItemDto } from './../dto/update-item.dto';
import { Injectable } from '@nestjs/common';
import { CreateItemDto } from '../dto/create-item.dto';
import { ItemDto } from '../dto/item.dto';
import { Item } from '../schemas/item';

@Injectable()
export class ItemFactory {
  ToItem(item: CreateItemDto): Item {
    return {
      _id: '',
      name: item.name,
      type: item.type,
      description: item.description,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
      label: item.label,
      note: item.note,
      code: item.code,
    };
  }

  ToDto(item: ItemsType, clientId: string): ItemDto {
    return {
      _id: item._id,
      name: item.name,
      type: item.type,
      description: item.description,
      price: item.price,
      quantity: item.quantity,
      image: item.image,
      label: item.label,
      note: item.note,
      code: item.code,
      clientId: clientId,
    };
  }
}

export type ItemsType = Item | UpdateItemDto;
