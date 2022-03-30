import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from './schemas/client.schema';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  async findAll(): Promise<Client[]> | undefined {
    return this.clientRepository.getData();
  }

  async findById(id: string): Promise<Client> | undefined {
    return this.clientRepository.getData().find((client) => client.id === id);
  }

  async findByName(clientName: string): Promise<Client> | undefined {
    return this.clientRepository
      .getData()
      .find((client) => client.name === clientName);
  }

  async create(client: Client): Promise<Client> {
    this.clientRepository.getData().push(client);
    return client;
  }

  async update(newClient: Client): Promise<Client> {
    let client = this.clientRepository
      .getData()
      .find((old) => old.id === newClient.id);
    client = newClient;
    return client;
  }

  async delete(id: string): Promise<boolean> {
    this.clientRepository.getData().filter((client) => client.id !== id);
    return true;
  }

  async findItemsByClientId(clientId: string): Promise<Item[]> {
    return this.clientRepository
      .getData()
      .find((client) => client.id === clientId).items;
  }

  async findItemsByClientName(clientName: string): Promise<Item[]> {
    return this.clientRepository
      .getData()
      .find((client) => client.name === clientName).items;
  }

  async findItemByClientIdAnditemId(
    clientId: string,
    itemId: string,
  ): Promise<Item> {
    const client = this.clientRepository
      .getData()
      .find((client) => client.id === clientId);
    const item = client.items.find((item) => item.id === itemId);
    return item;
  }

  async finditemByClientNameAnditemId(
    clientName: string,
    itemId: string,
  ): Promise<Item> {
    const client = this.clientRepository
      .getData()
      .find((client) => client.name === clientName);
    const item = client.items.find((item) => item.id === itemId);
    return item;
  }

  async createItem(item: Item): Promise<Item> {
    this.clientRepository
      .getData()
      .find((client) => client.id == item.clientId)
      .items.push(item);

    return item;
  }

  async updateItemByClientId(clientId: string, item: Item): Promise<Item> {
    const client = this.clientRepository
      .getData()
      .find((old) => old.id === clientId);
    client.items.push(item);
    return item;
  }

  async updateItemByClientName(clientName: string, item: Item): Promise<Item> {
    const client = this.clientRepository
      .getData()
      .find((old) => old.name === clientName);
    client.items.push(item);
    return item;
  }

  async deleteItemByClientName(
    clientName: string,
    itemId: string,
  ): Promise<boolean> {
    return true;
  }
}
