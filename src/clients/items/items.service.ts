import { Injectable } from '@nestjs/common';

export class item {
  id: string;
  name: string;
  type: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  label: string;
  note: string;
  code: string;
}

@Injectable()
export class ItemsService {
  Items: item[] = [
    {
      id: '1',
      name: 'Water',
      type: 'Drinkable',
      description: 'A water for thirsty people',
      price: 1,
      quantity: 12,
      image: 'a image must go here',
      label: '123',
      note: 'Irish spring water',
      code: '1',
    },
    {
      id: '2',
      name: 'Coca cola',
      type: 'Drinkable',
      description: 'A liquid that will make you fat',
      price: 2,
      quantity: 12,
      image: 'a image must go here',
      label: '123',
      note: 'Irish Coca cola',
      code: '2',
    },
  ];

  async findAll(): Promise<item[]> | undefined {
    return this.Items;
  }

  async find(id: string): Promise<item> | undefined {
    return this.Items.find((item) => item.id === id);
  }

  async create(item: item): Promise<item> {
    this.Items.push(item);
    return item;
  }

  async update(newitem: item): Promise<item> {
    let item = this.Items.find((old) => old.id == newitem.id);
    item = newitem;
    return item;
  }

  async delete(id: string): Promise<boolean> {
    this.Items = this.Items.filter((item) => item.id !== id);

    return true;
  }
}
