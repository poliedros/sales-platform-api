import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from './schemas/client.schema';
import { Item, ItemDocument } from './schemas/item.schema';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
    @InjectModel(Item.name) private itemModel: Model<ItemDocument>,
  ) {}

  async findAll(): Promise<Client[]> | undefined {
    return this.clientModel.find().exec();
  }

  async findById(id: string): Promise<Client> | undefined {
    return this.clientModel.findById(id).exec();
  }

  async findByName(clientName: string): Promise<Client> | undefined {
    return await this.clientModel.findOne({ name: clientName }).exec();
  }

  async create(client: Client) {
    const createdClient = new this.clientModel(client);
    return createdClient.save();
  }

  async update(newClient: Client) {
    const updatedClient = this.clientModel.findByIdAndUpdate(
      newClient._id,
      newClient,
    );

    return updatedClient.update().exec();
  }

  async delete(id: string) {
    return this.clientModel.deleteOne({ where: { _id: id } }).exec();
  }

  async findItemsByClientId(clientId: string) {
    return this.itemModel.find({ where: { clientId: clientId } }).exec();
  }

  async findItemsByClientName(clientName: string) {
    return this.itemModel.find({ where: { clientName: clientName } }).exec();
  }

  async findItemByClientIdAnditemId(clientId: string, itemId: string) {
    return this.itemModel
      .findOne({ where: { clientId: clientId, itemId: itemId } })
      .exec();
  }

  async findItemByClientNameAndItemId(clientName: string, itemId: string) {
    return this.itemModel
      .findOne({ where: { clientName: clientName, itemId: itemId } })
      .exec();
  }

  async createItem(item: Item): Promise<Item> {
    const createdItem = new this.itemModel(item);
    return createdItem.save();
  }

  // TODO: take a look
  async updateItemByClientId(clientId: string, item: Item): Promise<Item> {
    const updatedItem = new this.itemModel(item);

    return updatedItem.update().exec();
  }

  // TODO: take a look
  async updateItemByClientName(clientName: string, item: Item): Promise<Item> {
    const updatedItem = new this.itemModel(item);

    return updatedItem.update().exec();
  }

  async deleteItemByClientName(clientName: string, itemId: string) {
    return this.itemModel
      .deleteOne({ where: { _id: itemId, clientName: clientName } })
      .exec();
  }
}
