import { UpdateItemDto } from './../dto/update-item.dto';
import { CreateItemDto } from './../dto/create-item.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientsService } from '../clients.service';

@Controller('clients/:client_name')
export class ItemsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get('/items')
  async get(@Param('client_name') clientName) {
    return this.clientsService.findItemsByClientName(clientName);
  }

  @Get('/items/:item_id')
  async getById(@Param('client_name') clientName, @Param('item_id') itemId) {
    const item = await this.clientsService.findItemByClientNameAndItemId(
      clientName,
      itemId,
    );

    if (item) return item;

    throw new HttpException('item not found', HttpStatus.NOT_FOUND);
  }

  @Post('/items')
  async create(
    @Param('client_name') clientName,
    @Body() createItemDto: CreateItemDto,
  ) {
    const client = await this.clientsService.findByName(clientName);

    if (client) return this.clientsService.createItem(client, createItemDto);

    throw new NotFoundException('Client not found');
  }

  @Put('/items')
  async update(@Body('client_name') clientName, @Body() item: UpdateItemDto) {
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
