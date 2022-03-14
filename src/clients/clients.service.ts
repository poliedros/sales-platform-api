import { Injectable } from '@nestjs/common';

export class Client {
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
export class ClientsService {
  clients: Client[] = [
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

  async findAll(): Promise<Client[]> | undefined {
    return this.clients;
  }

  async find(id: string): Promise<Client> | undefined {
    return this.clients.find((costumer) => costumer.id === id);
  }

  async create(client: Client): Promise<Client> {
    this.clients.push(client);
    return client;
  }

  async update(newClient: Client): Promise<Client> {
    let costumer = this.clients.find((old) => old.id == newClient.id);
    costumer = newClient;
    return costumer;
  }

  async delete(id: string): Promise<boolean> {
    this.clients = this.clients.filter((client) => client.id !== id);
    return true;
  }
}
