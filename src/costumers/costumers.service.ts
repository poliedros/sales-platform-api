import { Injectable } from '@nestjs/common';

export class Costumer {
  id: string;
  name: string;
  type: string;
  phoneNumber: string;
  email: string;
  address: string;
  additionalInfo: string;
  code: string;
}

@Injectable()
export class CostumersService {
  costumers: Costumer[] = [
    {
      id: '1',
      name: 'Anderson',
      type: 'Good guy',
      phoneNumber: '123132',
      email: 'anderson@md.ie',
      address: '1 wd',
      additionalInfo: 'a very good costumer',
      code: '1',
    },
    {
      id: '2',
      name: 'Carlos',
      type: 'Family Guy',
      phoneNumber: '123132',
      email: 'carlos@md.ie',
      address: '1 wd',
      additionalInfo: 'a very very good costumer',
      code: '2',
    },
  ];

  async findAll(): Promise<Costumer[]> | undefined {
    return this.costumers;
  }

  async find(id: string): Promise<Costumer> | undefined {
    return this.costumers.find((costumer) => costumer.id === id);
  }

  async create(costumer: Costumer): Promise<Costumer> {
    this.costumers.push(costumer);
    return costumer;
  }

  async update(newCostumer: Costumer): Promise<Costumer> {
    let costumer = this.costumers.find((old) => old.id == newCostumer.id);
    costumer = newCostumer;
    return costumer;
  }

  async delete(id: string): Promise<boolean> {
    this.costumers = this.costumers.filter((costumer) => costumer.id !== id);
    return true;
  }
}
