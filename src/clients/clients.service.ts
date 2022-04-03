import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { randomUUID } from 'crypto';
import { Client, ClientDocument } from './schemas/client.schema';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './schemas/item';
import { ItemDto } from './dto/item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemFactory } from './providers/item.factory';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
    private readonly itemFactory: ItemFactory,
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
    return this.clientModel.deleteOne({ _id: id }).exec();
  }

  async findItemsByClientId(clientId: string) {
    const client = await this.clientModel
      .findOne({ where: { clientId: clientId } })
      .exec();

    return client.items;
  }

  async findItemsByClientName(clientName: string) {
    const client = await this.clientModel
      .findOne({ clientName: clientName })
      .exec();

    return client.items;
  }

  async findItemByClientIdAndItemId(clientId: string, itemId: string) {
    const client = await this.clientModel.findOne({ _id: clientId }).exec();

    return client.items.find((x) => x._id == itemId);
  }

  async findItemByClientNameAndItemId(clientName: string, itemId: string) {
    const client = await this.clientModel.findOne({ name: clientName }).exec();

    return client.items.find((x) => x._id == itemId);
  }

  async createItem(
    client: Client,
    createItemDto: CreateItemDto,
  ): Promise<ItemDto> {
    const item = this.itemFactory.ToItem(createItemDto);

    item._id = randomUUID();
    const items = client.items;
    items.push(item);

    console.log(items);

    await this.clientModel
      .findByIdAndUpdate(client._id, { ...client, items: items })
      .exec();

    const itemDto = this.itemFactory.ToDto(item, client._id);
    return itemDto;
  }

  async updateItemByClientId(
    clientId: string,
    updateItemDto: UpdateItemDto,
  ): Promise<Item> {
    const client = await this.clientModel.findOne({ _id: clientId }).exec();

    if (!client) throw new NotFoundException('Client not found');

    const index = client.items.findIndex(
      (itemDto) => itemDto._id === updateItemDto._id,
    );
    client.items[index] = {
      _id: updateItemDto._id,
      name: updateItemDto.name,
      description: updateItemDto.description,
      image: updateItemDto.image,
      label: updateItemDto.label,
      note: updateItemDto.note,
      price: updateItemDto.price,
      quantity: updateItemDto.quantity,
      type: updateItemDto.type,
      code: updateItemDto.code,
    };

    await this.clientModel.findByIdAndUpdate(client._id, client);

    const itemDto = this.itemFactory.ToDto(updateItemDto, client._id);
    return itemDto;
  }

  async updateItemByClientName(
    clientName: string,
    updateItemDto: UpdateItemDto,
  ): Promise<Item> {
    const client = await this.clientModel.findOne({ name: clientName }).exec();

    const index = client.items.findIndex(
      (itemDto) => itemDto._id === updateItemDto._id,
    );
    client.items[index] = {
      _id: updateItemDto._id,
      name: updateItemDto.name,
      description: updateItemDto.description,
      image: updateItemDto.image,
      label: updateItemDto.label,
      note: updateItemDto.note,
      price: updateItemDto.price,
      quantity: updateItemDto.quantity,
      type: updateItemDto.type,
      code: updateItemDto.code,
    };

    await this.clientModel.findByIdAndUpdate(client._id, client);

    const itemDto = this.itemFactory.ToDto(updateItemDto, client._id);
    return itemDto;
  }

  async deleteItemByClientName(clientName: string, itemId: string) {
    const client = await this.clientModel.findOne({ name: clientName }).exec();

    if (!client) throw new NotFoundException('Client not found');

    const updatedItems = client.items.filter(
      (itemDto) => itemDto._id !== itemId,
    );

    client.items = updatedItems;

    await this.clientModel.findByIdAndUpdate(client._id, client);

    return itemId;
  }
}
