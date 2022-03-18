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
  Res,
} from '@nestjs/common';
import { Client, ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async get() {
    return this.clientsService.findAll();
  }

  @Get(':name')
  async getByName(@Param('name') clientName: string) {
    const client = await this.clientsService.findByName(clientName);

    if (client) return client;

    throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
  }

  @Post()
  async create(@Body() costumer: Client) {
    return this.clientsService.create(costumer);
  }

  @Put()
  async update(@Body() costumer: Client) {
    return this.clientsService.update(costumer);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.clientsService.delete(id);
  }
}
