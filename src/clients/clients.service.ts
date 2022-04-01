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
    return this.clientModel.find().exec();
  }

  async findById(id: string): Promise<Client> | undefined {
    return this.clientModel.findById(id).exec();
  }

  async findByName(clientName: string): Promise<Client> | undefined {
    return this.clientModel.findOne({ where: { name: clientName } }).exec();
  }

  async create(client: Client) {
    const createdClient = new this.clientModel(client);
    return createdClient.save();
  }

  async update(newClient: Client) {
    const updatedClient = new this.clientModel(newClient);

    return updatedClient.update().exec();
  }

  async delete(id: string) {
    return this.clientModel.deleteOne({ where: { _id: id } }).exec();
  }

  async findItemsByClientId(clientId: string) {
    // return this.clientModel.findOne({ where: { clientId: clientId } }).exec();
  }

  async findItemsByClientName(clientName: string) {
    // return this.clientModel
    //   .findOne({ where: { clientName: clientName } })
    //   .exec();
  }

  async findItemByClientIdAnditemId(clientId: string, itemId: string) {
    // return this.clientModel
    //   .findOne({ where: { clientId: clientId, itemId: itemId } })
    //   .exec();
  }

  async findItemByClientNameAndItemId(clientName: string, itemId: string) {
    // return this.clientModel
    //   .findOne({ where: { clientName: clientName, itemId: itemId } })
    //   .exec();
  }

  async createItem(item: Item): Promise<Item> {}

  async updateItemByClientId(clientId: string, item: Item): Promise<Item> {}

  async updateItemByClientName(clientName: string, item: Item): Promise<Item> {}

  async deleteItemByClientName(
    clientName: string,
    itemId: string,
  ): Promise<boolean> {}
}
