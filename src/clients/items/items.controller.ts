import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientsService, Item } from '../clients.service';

@Controller('clients/:client_name')
export class ItemsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get('/items')
  async get(@Param('client_name') clientName) {
    return this.clientsService.findItemsByClientName(clientName);
  }

  @Get('/items/:item_id')
  async getById(@Param('client_name') clientName, @Param('item_id') itemId) {
    const item = await this.clientsService.finditemByClientNameAnditemId(
      clientName,
      itemId,
    );

    if (item) return item;

    throw new HttpException('item not found', HttpStatus.NOT_FOUND);
  }

  @Post('/items')
  async create(@Param('client_name') clientName, @Body() item: Item) {
    const client = await this.clientsService.findByName(clientName);

    item.clientId = client.id;
    return this.clientsService.createItem(item);
  }

  @Put('/items')
  async update(@Body('client_name') clientName, @Body() item: Item) {
    return this.clientsService.updateItemByClientName(clientName, item);
  }

  @Delete('/items/:item_id')
  async delete(
    @Param('client_name') clientName,
    @Param('item_id') itemId: string,
  ) {
    return this.clientsService.deleteItemByClientName(clientName, itemId);
  }
}
